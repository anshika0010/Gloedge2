import React from "react";

const CareerSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto grid md:grid-cols-2 border border-gray-300 rounded-sm overflow-hidden shadow-sm">
        <div className="h-full">
          <img
            src="https://www.y-axis.com/lp/study/images/banner-career.jpg"
            alt="Career"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative p-8 flex flex-col justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-20 bg-red-600"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Join us & build your career
          </h2>
          <p className="mt-3 text-gray-700">
            Y-Axis Study Overseas is one of the most trusted names in the
            overseas education market. Join us and build a career for a
            lifetime.
          </p>

          {/* Bullet Points */}
          <ul className="mt-5 space-y-2 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-4 h-[2px] bg-red-600 mt-2"></span>A fulfilling
              career where you create positive impact
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
              National and international opportunities in Y-Axis offices
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
              Competitive salaries & great incentives
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 relative Allbtn font-semibold px-6 py-2 flex items-center gap-2 w-fit shadow-md">
            View Openings <span className="text-lg">→</span>
            {/* small red bar */}
            <span className="absolute right-0 top-0 h-full w-1 bg-yellow-400"></span>
          </button>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-5xl mx-auto text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div>
            <p className="text-3xl md:text-3xl font-bold text-gray-900">1M</p>
            <p className="text-gray-900">Successful applicants</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              1500+
            </p>
            <p className="text-gray-600">Experienced counselors</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">25Y+</p>
            <p className="text-gray-600">Expertise</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">50+</p>
            <p className="text-gray-600">Offices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
