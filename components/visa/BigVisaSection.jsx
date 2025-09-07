"use client";
import React, { useState } from "react";
import Image from "next/image";

import canadaImg from "@/images/canada.png";
import australiaImg from "@/images/australia.png";
import ukImg from "@/images/uk.png";
import usaImg from "@/images/us.png";
import europeImg from "@/images/europe.png";

const BigVisaSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visas = [
    {
      title: "Canada",
      desc: "Live, work, or study in Canada—vibrant cities, PR visa benefits, and a high standard of living await you.",
      img: canadaImg,
    },
    {
      title: "Australia",
      desc: "Explore career opportunities or higher education in Australia’s welcoming, English-speaking environment.",
      img: australiaImg,
    },
    {
      title: "United Kingdom",
      desc: "Study or work in the UK, home to world-class universities, rich culture, and diverse opportunities.",
      img: ukImg,
    },
    {
      title: "United States",
      desc: "Experience global opportunities in the US—education, business, and career growth at the highest level.",
      img: usaImg,
    },
    {
      title: "Europe",
      desc: "Unlock travel and work opportunities across the EU with simplified visa processes and endless cultural experiences.",
      img: europeImg,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#f5e8d8] to-[#d6bfa6]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <p className="text-sm text-gray-700 font-semibold text-center uppercase tracking-wide">
          Y-Axis Global Passport
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mt-2">
          Specialised Visa Services <br /> for the Big 5 Visas
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
          {visas.map((visa, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={visa.img}
                alt={visa.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white transition-opacity duration-500 ${
                  activeIndex === i
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h3 className="text-lg font-bold">{visa.title}</h3>
                <p className="text-sm mt-1">{visa.desc}</p>
                <button className="mt-3 Allbtn rounded-full hover:bg-gray-200 transition">
                  Apply now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigVisaSection;
