import React from "react";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaUserTie,
  FaSun,
  FaMoon,
  FaUsers,
} from "react-icons/fa";

const LearningSolutions = () => {
  const solutions = [
    {
      icon: <FaChalkboardTeacher size={30} className="text-red-500" />,
      title: "Classroom Training",
    },
    {
      icon: <FaVideo size={30} className="text-red-500" />,
      title: "Live Classes",
    },
    {
      icon: <FaUserTie size={30} className="text-red-500" />,
      title: "Private Tutor",
    },
    {
      icon: <FaSun size={30} className="text-red-500" />,
      title: "Morning Classes",
    },
    {
      icon: <FaMoon size={30} className="text-red-500" />,
      title: "Night Classes",
    },
    {
      icon: <FaUsers size={30} className="text-red-500" />,
      title: "1 to 1 Session",
    },
  ];

  return (
    <div className="container mx-auto my-4 px-6 border border-gray-300 py-12 bg-white">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Learning solution to meet your need
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Y-Axis Coaching offers world-class coaching services designed to ace
          your scores, boosting your chances of achieving your abroad goals.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center border border-gray-200 p-6 rounded-lg hover:shadow-md transition bg-white"
          >
            {/* Icon */}
            <div className="mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-gray-800 font-medium">{item.title}</h3>

            {/* Red Vertical Bar (right side) */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-red-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSolutions;
