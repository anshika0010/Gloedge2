"use client";

export function QuestionStep({ question, selectedAnswer, onAnswer }) {
  // ✅ Helper: merge answers for sub-questions
  const handleSubAnswer = (key, value) => {
    onAnswer({
      ...selectedAnswer,
      [key]: value,
    });
  };

  // ✅ Country selection step
  if (question.type === "country-selection") {
    return (
      <div className="space-y-8">
        {question.title && (
          <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
            {question.title}
          </h2>
        )}

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

        {question.subtitle && (
          <h3 className="text-xl font-medium text-gray-800 mt-8">
            {question.subtitle}
          </h3>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {Array.isArray(question.options) &&
            question.options.map((option) => (
              <button
                key={option}
                onClick={() => onAnswer(option)}
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
      {/* Title / Question */}
      {question.title ? (
        <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
          {question.title}
        </h2>
      ) : question.question ? (
        <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
          {question.question}
        </h2>
      ) : null}

      {/* Case 1: Nested sub-questions */}
      {Array.isArray(question.questions) && question.questions.length > 0 ? (
        <div className="space-y-6">
          {question.questions.map((subQ, index) => (
            <div key={index}>
              <p className="text-lg font-medium text-gray-800 mb-3">{subQ.q}</p>

              {Array.isArray(subQ.options) ? (
                <div
                  className={`grid gap-4 ${
                    subQ.type === "yes-no"
                      ? "grid-cols-2 max-w-md"
                      : subQ.options.length > 4
                      ? "grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 max-w-md"
                  }`}
                >
                  {subQ.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSubAnswer(subQ.q, option)}
                      className={`p-4 border-2 transition-colors text-left ${
                        selectedAnswer?.[subQ.q] === option
                          ? "border-orange-500 bg-orange-50 text-orange-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : subQ.type === "yes-no" ? (
                // ✅ Agar options missing hain, fir bhi Yes/No buttons dikhao
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {["Yes", "No"].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSubAnswer(subQ.q, option)}
                      className={`p-4 border-2 transition-colors text-left ${
                        selectedAnswer?.[subQ.q] === option
                          ? "border-orange-500 bg-orange-50 text-orange-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  value={selectedAnswer?.[subQ.q] || ""}
                  onChange={(e) => handleSubAnswer(subQ.q, e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Type your answer here..."
                />
              )}
            </div>
          ))}
        </div>
      ) : question.type === "multi-yes-no" ? (
        // ✅ Case 2: Multi Yes/No
        <div className="space-y-6">
          {question.subQuestions.map((sq, idx) => (
            <div key={idx}>
              <p className="text-lg font-medium text-gray-800 mb-3">{sq}</p>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSubAnswer(sq, option)}
                    className={`p-4 border-2 transition-colors text-left ${
                      selectedAnswer?.[sq] === option
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ✅ Case 3: Single Q
        <>
          {question.type === "yes-no" ? (
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  onClick={() => onAnswer(option)}
                  className={`p-4 border-2 transition-colors text-left ${
                    selectedAnswer === option
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : Array.isArray(question.options) && question.options.length > 0 ? (
            <div
              className={`grid gap-4 ${
                question.options.length > 4
                  ? "grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 max-w-md"
              }`}
            >
              {question.options.map((option) => (
                <button
                  key={option}
                  onClick={() => onAnswer(option)}
                  className={`p-4 border-2 transition-colors text-left ${
                    selectedAnswer === option
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <input
              type="text"
              value={selectedAnswer || ""}
              onChange={(e) => onAnswer(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your answer here..."
            />
          )}
        </>
      )}
    </div>
  );
}
