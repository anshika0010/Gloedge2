export function ScoreSidebar({ country, score }) {
  const getCountryFlag = (country) => {
    switch (country) {
      case "Australia":
        return "🇦🇺"
      case "UK":
        return "🇬🇧"
      default:
        return "🌍"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-6">
      {/* Country flag */}
      <div className="text-right">
        <span className="text-3xl">{getCountryFlag(country)}</span>
      </div>

      {/* Evaluation text */}
      <div className="text-center space-y-2">
        <p className="text-gray-600">You want to get Yourself</p>
        <p className="text-gray-600">Evaluated for</p>
        <p className="text-2xl font-bold text-gray-900">{country}</p>
      </div>

      {/* Score section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">Your Score</h3>

        {/* Circular score indicator */}
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#da010b"
              strokeWidth="8"
              strokeDasharray={`${(score / 100) * 314} 314`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-white bg-[#da010b] rounded-full w-20 h-20 flex items-center justify-center">
              {score}
            </span>
          </div>
        </div>
      </div>

      {/* Contact expert */}
      <div className="border-t pt-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-sm">👥</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Talk to an Expert</p>
            <p className="text-sm text-gray-600">Call 7670800000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
