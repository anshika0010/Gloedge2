"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const serviceColors = {
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    red: "bg-red-500 hover:bg-red-600",
  };
  const tours = [
    {
      title: "Eligibility Check",
      desc: "Check your chances of qualifying for immigration easily.",
      img: "https://i.pinimg.com/736x/02/e6/c0/02e6c06fb4087b1e7a874869e6ede6a0.jpg",
      link: "/eligibility-check",
    },
    {
      title: "Skilled Migration",
      desc: "Explore opportunities to move abroad with skilled migration programs.",
      img: "https://i.pinimg.com/1200x/2f/6f/c3/2f6fc39117084474826749ad3e5f0417.jpg",
      link: "/skilled-migration",
    },
    {
      title: "Jobs",
      desc: "Find global job opportunities that match your skills.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      link: "/jobs",
    },
    {
      title: "Business and Investment",
      desc: "Unlock pathways through business and investment visas.",
      img: "https://i.pinimg.com/1200x/bf/e6/fd/bfe6fd81cfb210eedf4d04571389a0fa.jpg",
      link: "/business-investment",
    },
    {
      title: "Study",
      desc: "Pursue your education in top global universities.",
      img: "https://i.pinimg.com/1200x/e8/e0/b3/e8e0b3f8474647e651b8cd1d22e996f6.jpg",
      link: "/study",
    },
    {
      title: "Language Training",
      desc: "Enhance your skills with professional language training.",
      img: "https://i.pinimg.com/1200x/3c/ff/00/3cff006a9934d986ca014f7de735f7fc.jpg",
      link: "/language-training",
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
      className="relative bg-gray-900 text-white flex flex-col   lg:flex-row bg-cover bg-center transition-all duration-700 ease-in-out "
      style={{
        backgroundImage: `url(${tours[slideIndex].img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Left Hero Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-12 md:py-20 text-center lg:text-left">
        <div>
          <p className="uppercase tracking-wide text-xs sm:text-sm mb-2">
            Our Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {tours[slideIndex].title}
          </h1>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-gray-200 text-sm sm:text-base md:text-lg">
            {tours[slideIndex].desc}
          </p>

          <a href={tours[slideIndex].link} className="Allbtn">
            Get Free Eligibility Guidance →
          </a>
        </div>

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
      </div>

      {/* Right Tours List */}

      <div className="relative z-10 w-full lg:w-1/3 shadow-2xl my-6 lg:my-12 lg:mr-6 rounded-2xl backdrop-blur-xl bg-white/10 p-7 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center lg:text-left">
          What can we do for you today?
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
      </div>
    </div>
  );
}
