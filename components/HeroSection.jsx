"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
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
      className="relative bg-gray-900 text-white flex flex-col lg:flex-row bg-cover bg-center transition-all duration-700 ease-in-out "
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

          <a
            href={tours[slideIndex].link}
            className="inline-block mt-6 bg-red-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-red-500 transition text-sm sm:text-base"
          >
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
      <div className="relative z-10 w-full lg:w-1/4 shadow-2xl my-5 lg:my-10 lg:mr-5 rounded-2xl backdrop-blur-3xl text-gray-900 p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-6 text-white text-center lg:text-left">
          What can we do for you today?
        </h2>
        <div className="space-y-2 sm:space-y-3">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className={`flex items-center bg-gray-100 rounded-lg p-1 sm:p-2 shadow-sm hover:shadow-md transition cursor-pointer ${
                idx === slideIndex
                  ? "ring-2 ring-red-600 bg-red-100 scale-105"
                  : ""
              }`}
              onClick={() => setSlideIndex(idx)}
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-16 h-12 sm:w-20 sm:h-14 rounded-md object-cover"
              />
              <div className="ml-3 sm:ml-4 flex-1">
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">
                  {tour.title}
                </h3>
                <a
                  href={tour.link}
                  className="text-blue-600 text-xs sm:text-sm font-medium hover:underline mt-1 inline-block"
                >
                  More info →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
