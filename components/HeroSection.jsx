"use client";

import { useState, useEffect } from "react";
import hero1 from "../images/new/hero1.jpeg";
import hero2 from "../images/new/hero2.jpeg";
import hero3 from "../images/new/hero3.jpeg";
export default function HeroSection() {
  const serviceColors = {
    yellow: "bg-green-600 hover:bg-green-400",
    purple: "bg-blue-400 hover:bg-blue-600",
    blue: "bg-[#009bad] hover:bg-[#009bad]",
    green: "bg-yellow-400 hover:bg-yellow-600",
    pink: "bg-blue-800 hover:bg-blue-600",
    red: "bg-green-800 hover:bg-green-600",
  };
  const tours = [
    {
      img: hero1,
    },
    {
      img: hero2,
    },
    {
      img: hero3,
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % tours.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + tours.length) % tours.length);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % tours.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tours.length]);

  return (
    <div
      className="relative bg-gray-900 text-white flex flex-col min-h-[500px] lg:flex-row bg-fit  bg-center  transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${tours[slideIndex].img.src})`,
      }}
    >
      {/* Overlay */}
      {/* Left Hero Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-12 md:py-20 text-center lg:text-left">
        {/* Navigation */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4">
          <button
            onClick={prevSlide}
            className="w-7 h-7 sm:w-8 sm:h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black"
          >
            ←
          </button>
          <div className="flex gap-1 sm:gap-2">
            {tours.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
                  idx === slideIndex ? "bg-yellow-400" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-7 h-7 sm:w-8 sm:h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black"
          >
            →
          </button>
        </div>
      </div>{" "}
      {/* Right Tours List */}
      <div className="relative z-10 w-full lg:w-1/3 shadow-2xl my-6 lg:my-12 lg:mr-6 rounded-2xl backdrop-blur-xl bg-black/10 p-7 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center  mix-blend-difference lg:text-left">
          <span className="text-red-600 font-semibold mix-blend-difference">
            GlOEDGE–
          </span>{" "}
          Guiding You Beyond Borders.
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Study", color: "yellow" },
            { label: "Migrate", color: "purple" },
            { label: "Work", color: "blue" },
            { label: "Visit", color: "green" },
            { label: "Language", color: "pink" },
            { label: "Citizenship", color: "red" },
          ].map((service, idx) => (
            <button
              key={idx}
              className={`flex items-center cursor-pointer justify-center text-center px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                serviceColors[service.color]
              } text-white`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-6">
          <button className="Allbtn px-10 py-4">Get Free Guidence Now</button>
        </div>
      </div>
    </div>
  );
}
