"use client"
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StudyAbroadSection = () => {
  const containerRef = useRef(null);

 useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".study-broad-section");
    gsap.set(cards, { y: 50, opacity: 0 }); 
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="container mx-auto py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        India’s Most Trusted Study Abroad Consultants
      </h2>
      <p className="text-center text-gray-800 max-w-3xl mx-auto mb-10">
        Y-Axis helps students like you find and apply to in-demand courses in
        international universities that lead to a rewarding career. Our{" "}
        <span className="font-semibold text-black">
          Right Course, Right Path
        </span>{" "}
        methodology ensures you don’t just get an education but global mobility
        and a successful future.
      </p>

      {/* Two Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={containerRef}>
        {/* Left Card */}
        <div className="study-broad-section border border-gray-200 relative h-80 px-6 overflow-y-auto rounded-sm custom-scrollbar">
          <h3 className="font-semibold text-xl mb-4 p-5 sticky top-0 bg-white w-full">
            Study abroad by country
          </h3>
          <ul className="space-y-3">
            {[
              "Study in Canada",
              "Study in Australia",
              "Study in Germany",
              "Study in UK",
              "Study in USA",
              "Study in Europe",
              "Study in Korea",
              "Study in Finland",
              "Study in Singapore",
              "Study in Japan",
              "Study in France",
              "Study in Italy",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-800 hover:text-black cursor-pointer"
              >
                {item}
                <span className="text-red-600 font-bold">...</span>
              </li>
            ))}
          </ul>
          {/* Red underline */}
          {/* <div className="absolute bottom-0 left-6 w-8 h-2 bg-red-600"></div> */}
        </div>

        {/* Right Card */}
        <div className="study-broad-section border border-gray-200 relative h-80 px-6 overflow-y-auto rounded-lg custom-scrollbar">
          <h3 className="font-semibold text-xl mb-4 p-5 sticky top-0 bg-white w-full">Study by degree</h3>

          <ul className="space-y-3">
            {["Masters", "MBA", "B.TECH", "Bachelors", "PhD", "Diploma"].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-800 hover:text-black cursor-pointer"
                >
                  {item}
                  <span className="text-red-600 font-bold">...</span>
                </li>
              )
            )}
          </ul>
          {/* Red underline */}
          <div className="absolute bottom-0 left-36 w-20 h-3 bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadSection;