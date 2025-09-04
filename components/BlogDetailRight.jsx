import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FiSmartphone, FiMail } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";

const VisaExtras = () => {
  const tags = [
    "Apply directly for the 191 visa",
    "191 visa",
    "491 visa",
    "494 visa",
    "Australia PR",
    "work in Australia",
    "191 visa requirements",
    "191 visa Points Calculator",
    "491 visa occupation list",
    "Australia PR points calculator",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Tags & Share */}
      <div className="border p-4 rounded-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <span className="font-semibold">Tags:</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share icons */}
          <div className="flex items-center gap-3 text-gray-600">
            <span className="font-semibold">Share</span>
            <FaTwitter className="cursor-pointer hover:text-blue-500" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaPinterestP className="cursor-pointer hover:text-red-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="border p-6 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Options for you by Y-Axis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-600">
            <FiSmartphone className="text-red-600 text-xl" />
            <span>Get it on your mobile</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-600">
            <FiMail className="text-red-600 text-xl" />
            <span>Get News alerts</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-600">
            <FiHeadphones className="text-red-600 text-xl" />
            <span>Contact Y-Axis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaExtras;