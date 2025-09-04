"use client";
import Image from "next/image";
import React, { useState } from "react";
import headerImage from "@/images/workabroad.webp";

// 👇 import your card images
import careerImg from "@/images/Career.webp";
import profileImg from "@/images/suitable.webp";
import resumeImg from "@/images/Resume.webp";
import marketingImg from "@/images/Marketing.webp";

const JobSearchPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const countries = [
    "USA",
    "UK",
    "UAE",
    "Australia",
    "Canada",
    "Germany",
    "Sweden",
    "Portugal",
  ];

  const ServiceCard = ({
    title,
    description,
    bulletPoints,
    imageSrc,
    isReversed = false,
    cardIndex,
  }) => {
    return (
      <div
        className={`flex ${
          isReversed ? "flex-row-reverse" : "flex-row"
        } bg-white  hover:shadow-2xl border border-gray-300  mb-8 rounded-sm overflow-hidden`}
        onMouseEnter={() => setHoveredCard(cardIndex)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Left/Right Image */}
        <div className="flex-1 relative min-h-[300px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
          />
          {/* Red accent bar */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isReversed ? "left-0" : "right-0"
            } w-4 h-32 bg-red-500 transition-all duration-300 ${
              hoveredCard === cardIndex ? "h-40" : "h-32"
            }`}
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <ul className="space-y-3 mb-8">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Sign Up Now
            </button>
            <button className="border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-500 px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
              View Sample Career Strategy Report
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Header */}
      <div className="bg-[#019CAD] shadow-md">
        <div className="flex">
          {/* Left */}
          <div className="flex-1 bg-[#019CAD] p-12 text-white relative">
            <h2 className="text-4xl font-bold mb-8">Work Abroad</h2>
            <p className="text-lg mb-8 opacity-90">
              Top countries to work abroad
            </p>

            <div className="grid grid-cols-3 gap-4">
              {countries.map((country) => (
                <button
                  key={country}
                  className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  {country}
                </button>
              ))}
              <button className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105">
                Why choose us?
              </button>
            </div>

            {/* Red accent bar */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-4 h-32 bg-red-500"></div>
          </div>

          {/* Right image */}
          <div className="flex-1 relative min-h-[500px]">
            <Image
              src={headerImage}
              alt="Work Visa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900">
          Y-Axis Job Search Services Solution
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto ">
        <ServiceCard
          title="Step 1. Get your Career Strategy"
          description="Get a comprehensive career strategy tailored to your goals."
          bulletPoints={[
            "Review your strengths, weaknesses, motivations, and values",
            "Know your advantages",
            "Research competitors on teams that most fit opportunities",
            "Develop expertise and goals",
          ]}
          imageSrc={careerImg}
          cardIndex={1}
        />

        <ServiceCard
          title="Step 2. Build your Suitable Profile"
          description="Create professional profiles that stand out to employers."
          bulletPoints={[
            "LinkedIn Profile",
            "Monster Profile",
            "Naukri Profile",
            "Seek.com.au Profile",
            "Dice Profile",
            "Indeed Profile",
            "Xing Profile",
          ]}
          imageSrc={profileImg}
          isReversed
          cardIndex={2}
        />

        <ServiceCard
          title="Step 3. Resume Writing"
          description="Professional resume writing services for international standards."
          bulletPoints={[
            "Professional industry insight Resume Writing",
            "Create a professional profile for your resume",
          ]}
          imageSrc={resumeImg}
          cardIndex={3}
        />

        <ServiceCard
          title="Step 4. Resume Marketing"
          description="Strategic marketing of your resume to potential employers."
          bulletPoints={[
            "Share your updated resume profile on career sites",
            "Professional Resume Writing",
            "Optimized LinkedIn Profile",
            "Custom Cover Letters",
            "Keyword Optimization",
            "ATS Compatibility",
          ]}
          imageSrc={marketingImg}
          isReversed
          cardIndex={4}
        />
      </div>
    </div>
  );
};

export default JobSearchPage;