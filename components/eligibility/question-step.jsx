"use client";

export function QuestionStep({ question, selectedAnswer, onAnswer }) {
  if (question.type === "country-selection") {
    return (
      <div className="space-y-8">
        {/* Question title */}
        <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
          {question.title}
        </h2>

        {/* Preselected option */}
        {question.preselected && (
          <div className="mb-6">
            <button
              className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800"
              disabled
            >
              {question.preselected}
            </button>
          </div>
        )}

        {/* Subtitle */}
        {question.subtitle && (
          <h3 className="text-xl font-medium text-gray-800 mt-8">
            {question.subtitle}
          </h3>
        )}

        {/* Country options */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              variant="outline"
              className={`p-4 h-auto text-left justify-start border-2 transition-colors ${
                selectedAnswer === option
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Question navigation tabs - Updated to show dynamic number of questions */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className={`px-4 py-2 text-sm font-medium rounded ${
              index === question.id
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Question {index + 1}
          </div>
        ))}
      </div>

      {/* Question title */}
      <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
        {question.title}
      </h2>

      {/* Answer options - Updated grid layout for different question types */}
      <div
        className={`grid gap-4 ${
          question.type === "yes-no"
            ? "grid-cols-2 max-w-md"
            : question.options.length > 6
            ? "grid-cols-2 lg:grid-cols-3"
            : question.options.length > 4
            ? "grid-cols-2 lg:grid-cols-3"
            : "grid-cols-2 max-w-2xl"
        }`}
      >
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            variant="outline"
            className={`p-4 h-auto text-left justify-start border-2 transition-colors text-wrap ${
              selectedAnswer === option
                ? "border-orange-500 bg-orange-50 text-orange-700"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
