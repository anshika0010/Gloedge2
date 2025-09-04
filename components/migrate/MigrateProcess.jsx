"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // for step arrows
import { User, BarChart, PieChart, FileText, TrendingUp } from "lucide-react"; // icons

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const MigrateProcess = () => {
const containerRef = useRef(null);
 useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".opportunity-progress");

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

  const steps = [
    {
      id: 1,
      title: "Inquiry",
      desc: "Welcome! Your immigration journey starts here...",
      icon: <User className="w-12 h-12 text-red-500" />,
    },
    {
      id: 2,
      title: "Expert Counselling",
      desc: "Our expert will personally guide you based on your interests and goals.",
      icon: <BarChart className="w-12 h-12 text-red-500" />,
    },
    {
      id: 3,
      title: "Eligibility",
      desc: "Check your eligibility for immigration to a specific country and sign-up for this process.",
      icon: <PieChart className="w-12 h-12 text-red-500" />,
    },
    {
      id: 4,
      title: "Documentation",
      desc: "All your documents will be compiled to create a strong application.",
      icon: <FileText className="w-12 h-12 text-red-500" />,
    },
    {
      id: 5,
      title: "Processing",
      desc: "Assists you in every step while filing the application.",
      icon: <TrendingUp className="w-12 h-12 text-red-500" />,
    },
  ];

  return (
    <section className="container border border-gray-300 mx-auto py-16 px-6 my-4 text-center">
      {/* Section Header */}
      <h2 className="text-3xl font-bold">Migrate Process</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        In recent times, migration has become a dream for everyone willing to
        settle abroad. People move abroad to study, work, or have a better
        quality of life.
      </p>

      {/* Steps */}
      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center  gap-8" ref={containerRef}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-center text-center max-w-[200px] opportunity-progress"
          >
            {/* Icon */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow">
              {step.icon}
            </div>
            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            {/* Description */}
            <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
            </div>
            {/* Arrow (for all except last step) */}
            {index !== steps.length - 1 && (
              <ArrowRight className="hidden lg:block mt-6 min-w-8 w-8 h-20 text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MigrateProcess;
