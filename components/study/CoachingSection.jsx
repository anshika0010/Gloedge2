import React from "react";

const CoachingSection = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="container mx-auto grid md:grid-cols-2 border border-gray-300 rounded-sm overflow-hidden shadow-sm">
        {/* Left Content */}
        <div className="p-8">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900">Coaching</h2>
          <p className="mt-2 text-gray-700">
            For IELTS, TOEFL, CELPIP, PTE, GRE, GMAT, SAT, OET & German
          </p>

          {/* Bullet Points */}
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
              Tailored study plans based on aptitude test
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
              Interactive learning resources & LMS access
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
              Multiple learning options to fit your schedule
            </li>
          </ul>

          {/* Button Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              "IELTS",
              "PTE",
              "TOEFL",
              "CELPIP",
              "SAT",
              "GRE",
              "GMAT",
              "ENGLISH PROFICIENCY",
              "CONVERSATIONAL GERMAN",
              "STRATEGY STUDY PLAN",
              "STUDENT PROFILE REPORT",
              "INTERNATIONAL RESUME",
            ].map((item, index) => (
              <button
                key={index}
                className="bg-yellow-500 text-black font-semibold py-2 px-4 text-sm text-center shadow-md relative"
              >
                {item}
                {/* Small red bar on right */}
                <span className="absolute right-0 top-0 h-full w-1 bg-red-600"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Red vertical bar */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-20 bg-red-600 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" // replace with actual
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CoachingSection;