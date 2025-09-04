"use client"
import Heading from "../common/Heading";
import React,{ useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function MigrateOpportunity() {
  const countryList = [
    "Migrate to Australia",
    "Migrate to Canada",
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".animated-opportunity");

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
  const prVisas = [
    "Australia Permanent Resident Visa",
    "Canada Permanent Resident Visa",
  ];

  const workVisas = [
    "Germany Opportunity Card",
    "UK Skilled Worker Visa",
    "USA H-1B",
    "Canada Work Visa",
    "Australia Work Visa",
    "Portugal Job Seeker Visa",
    "Sweden Residence Permit",
    // add more if needed
  ];

  return (
    <section className="bg-white container mx-auto border border-gray-300 my-3 p-6 md:p-10">
      <div className="" ref={containerRef}>
        
        <Heading text={"Migrate Opportunity"} className={"pb-2 text-center text-2xl md:text-3xl font-bold mb-8 flex justify-center"}/>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Country */}
          <div className="animated-opportunity border border-gray-300 p-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Country
              <span className="absolute left-0 -bottom-1 h-1 w-8 bg-red-500"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              {countryList.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-800 hover:text-red-500 cursor-pointer"
                >
                  {item}
                  <span className="text-red-500">...</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PR Visas */}
          <div className="animated-opportunity border border-gray-300 p-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              PR Visas
              <span className="absolute left-0 -bottom-1 h-1 w-8 bg-red-500"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              {prVisas.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 hover:text-red-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Work Visas (Scrollable) */}
          <div className="animated-opportunity border border-gray-300 p-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Work Visas
              <span className="absolute left-0 -bottom-1 h-1 w-8 bg-red-500"></span>
            </h3>
            <ul className="space-y-3 mt-6 max-h-64 overflow-y-auto pr-2">
              {workVisas.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 hover:text-red-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
