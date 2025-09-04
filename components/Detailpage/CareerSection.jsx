"use client";
import React from "react";
import Image from "next/image";

// Flag images (you can replace with your own images in /public/flags folder)
import AustraliaFlag from "@/images/Australia1.png";
import CanadaFlag from "@/images/canada1.png";
import GermanyFlag from "@/images/Germany.png";
import UKFlag from "@/images/UK1.png";
import USAFlag from "@/images/USA1.png";

export default function CareerSection() {
  const countries = [
    { name: "Australia", flag: AustraliaFlag },
    { name: "Canada", flag: CanadaFlag },
    { name: "Germany", flag: GermanyFlag },
    { name: "United Kingdom", flag: UKFlag },
    { name: "USA", flag: USAFlag },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 relative inline-block">
        High Paying Careers for Engineers
        <span className="absolute left-0 -bottom-1 w-14 h-1 bg-red-600"></span>
      </h2>
      <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
        The world is looking for skilled engineers to fulfil a huge talent gap.
        As countries modernise and adapt newer technologies to build the
        infrastructure of the future, there is immense opportunity for
        professionals to capitalise on. Engineers from fields as diverse as
        chemical engineering, mechanical engineering, electrical engineering and
        computer science engineering are presented with a choice of roles in
        leading global economies. Y-Axis can help you leverage your skills and
        experience and become a globally mobile engineering professional.
      </p>

      {/* Countries Section */}
      <div className="border border-gray-300 rounded-md p-6 bg-white">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-2">
          Countries Where Your Skills are in Demand
        </h3>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Please select the country where you want to work
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {countries.map((country) => (
            <div
              key={country.name}
              className="w-32 h-32 border border-gray-200 rounded-md flex flex-col items-center justify-center bg-white 
                        shadow-sm hover:shadow-lg transition-shadow duration-300 
                        transform hover:scale-105 cursor-pointer"
            >
              <Image
                src={country.flag}
                alt={country.name}
                width={40}
                height={40}
                className="mb-3"
              />
              <span className="text-gray-800 font-medium text-sm">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
