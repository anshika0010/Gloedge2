"use client"
import React from "react";
import { CheckCircle } from "lucide-react"; // for green check icons
import Heading from "../common/Heading";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SuperSaverPackage = () => {
  // 
    const containerRef = useRef(null);

 useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".study-abroad-points");
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
    <div className="w-full bg-white py-10">
      <div className="container mx-auto border border-gray-300 rounded-sm shadow-sm p-8 text-center">
        {/* Heading */}
        
        <Heading text={"Study Abroad Super Saver Package"} className="flex justify-center text-2xl md:text-3xl font-bold text-gray-900"/>
        <p className="mt-2 text-gray-600">
          Get all the services mentioned above for a discounted price.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8" ref={containerRef}>
          {[
            "Expert counseling",
            "Course selection",
            "Admissions services",
            "Student visa services",
            "Statement of purpose",
            "Letters of Recommendation",
            "Any one coaching solution",
            "Dedicated support",
          ].map((service, index) => (
            <div key={index} className="flex items-center gap-2 study-abroad-points">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-800">{service}</span>
            </div>
          ))}
        </div>

        {/* Chat Button */}
        <div className="mt-8">
          <a 
          href="https://api.whatsapp.com/send/?phone=918878887841&amp;text=I+would+like+to+talk+to+a+Gloedge+Expert.&amp;type=phone_number&amp;app_absent=0"
          className="max-w-[fit-content] relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 flex items-center gap-2 mx-auto shadow-md">
            Chat with us <span className="text-lg">→</span>
            <span className="absolute right-0 top-0 h-full w-1 bg-red-600"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuperSaverPackage;