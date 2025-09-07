import Image from "next/image";
import React from "react";
import visahero from "@/images/visahero.png";

const HeroSection = () => {
  return (
    <section className="bg-red-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE TEXT */}
        <div>
          <span className="inline-block bg-red-600 text-white text-sm font-medium px-4 py-2 rounded">
            YOUR PATH TO NEW BEGINNINGS
          </span>

          <h1 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Visas Done Right. The First Time. <br /> Every Time.
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Trusted by millions, Y-Axis ensures a smooth, accurate, and end-to-end
            visa process for every journey.
          </p>

          <button className="mt-4 px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-[#e14c2e] transition">
            Apply Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[500px] lg:h-[600px]">
          <Image
            src={visahero}
            alt="Work Visa"
            fill
            className="object-contain lg:object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
