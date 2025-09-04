"use client";
import React from "react";
import { Users, MessageSquare, Star, Building2, Users2, Monitor } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-gray-700" />,
      title: "Applicants",
      desc: "1000s of Successful visa applications",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-gray-700" />,
      title: "Counseled",
      desc: "10 Million+ Counseled",
    },
    {
      icon: <Star className="w-10 h-10 text-gray-700" />,
      title: "Experts",
      desc: "Experienced Professionals",
    },
    {
      icon: <Building2 className="w-10 h-10 text-gray-700" />,
      title: "Offices",
      desc: "50+ Offices",
    },
    {
      icon: <Users2 className="w-10 h-10 text-gray-700" />,
      title: "Team",
      desc: "1500+",
    },
    {
      icon: <Monitor className="w-10 h-10 text-gray-700" />,
      title: "Online Services",
      desc: "Expedite your application online",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 border border-gray-200 bg-white rounded-md">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
        Why choose Y-Axis
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-sm md:text-base">
        There is a security update available for your version of Drupal. To ensure the
        security of your server, you should update immediately! See the available
        updates page for more information and to install your missing updates.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center px-3 py-4 border-r last:border-none hover:bg-gray-50 rounded-md transition-colors duration-300"
          >
            <div className="mb-2 relative">
              <span className="absolute -bottom-1 left-0 w-6 h-1 bg-red-500"></span>
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300">
          Apply now
        </button>
      </div>
    </div>
  );
}
