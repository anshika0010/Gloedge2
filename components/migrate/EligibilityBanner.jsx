import React from "react";

const EligibilityBanner = () => {
  return (
    <div className="flex flex-col container mx-auto md:flex-row items-center w-full shadow-lg">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Check%20your%20eligibility.webp"
          alt="Eligibility"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full h-[100%] md:w-1/2 bg-[#6E2A8F] text-white flex flex-col justify-center items-start px-8 py-12 relative">
        {/* Orange Bar */}
        <div className="h-[100%] absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-orange-500"></div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Check your eligibility instantly
        </h2>
        <p className="mb-6 text-sm md:text-base">
          Evaluate your eligibility instantly for free!
        </p>
        <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-purple-700 transition">
          Check Eligibility →
        </button>
      </div>
    </div>
  );
};

export default EligibilityBanner;
