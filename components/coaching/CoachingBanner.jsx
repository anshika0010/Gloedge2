import React from "react";

const CoachingBanner = () => {
  const coachingPrograms = [
    "IELTS",
    "IELTS-SPRINT",
    "GMAT",
    "GRE",
    "PTE-Academic",
    "PTE-Core",
    "TOEFL",
    "SAT",
    "German",
    "CELPIP",
    "OET",
    "Register for Free Demo",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center container my-4 mx-auto shadow-lg">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 bg-red-600 text-white flex flex-col justify-center px-8 py-12 relative">
        {/* Orange Bar */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-orange-500"></div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">Coaching</h2>
        <p className="mb-6 text-sm md:text-base">
          World class coaching program to meet your needs
        </p>

        {/* Coaching Buttons Grid */}
        <div className="grid grid-cols-2 gap-3">
          {coachingPrograms.map((program, index) => (
            <button
              key={index}
              className="border border-white px-4 py-2 text-sm rounded-md hover:bg-white hover:text-blue-700 transition"
            >
              {program}
            </button>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Coaching--.webp"
          alt="Coaching"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CoachingBanner;
