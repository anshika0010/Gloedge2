"use client";

import { useState, useEffect } from "react";
import hero1 from "../images/new/hero1.jpeg";
import hero2 from "../images/new/hero2.jpeg";
import hero3 from "../images/new/hero3.jpeg";

export default function HeroSection() {
  const serviceColors = {
    yellow: "bg-green-600 hover:bg-green-400",
    purple: "bg-blue-400 hover:bg-blue-600",
    blue: "bg-[#009bad] hover:bg-[#008a99]",
    green: "bg-yellow-400 hover:bg-yellow-600",
    pink: "bg-blue-800 hover:bg-blue-600",
    red: "bg-green-800 hover:bg-green-600",
  };

  const tours = [{ img: hero1 }, { img: hero2 }, { img: hero3 }];

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
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between text-white transition-all duration-700 ease-in-out bg-cover bg-center"
      style={{
        backgroundImage: `url(${tours[slideIndex].img.src})`,
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 md:py-20 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
          <span className="text-red-600">GlOEDGE –</span> Guiding You Beyond
          Borders
        </h1>
        <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
          Explore opportunities to{" "}
          <span className="font-semibold">Study, Work, Migrate, or Travel</span>{" "}
          abroad with expert guidance tailored for you.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="Allbtn px-8 sm:px-10 py-3 sm:py-4">
            Get Free Guidance Now
          </button>
        </div>
      </div>

      {/* Right Services Card */}
      <div className="relative z-10 w-full lg:w-1/3 shadow-2xl my-6 lg:my-12 lg:mr-10 rounded-2xl backdrop-blur-xl bg-white/10 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center lg:text-left">
          Choose Your Path
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
              className={`flex items-center justify-center px-4 py-3 text-sm sm:text-base rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                serviceColors[service.color]
              } text-white`}
            >
              {service.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Dots + Arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black"
        >
          ←
        </button>
        <div className="flex gap-2">
          {tours.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition ${
                idx === slideIndex ? "bg-yellow-400" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black"
        >
          →
        </button>
      </div>
    </div>
  );
}
