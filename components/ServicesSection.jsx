"use client";
import { useState } from "react";
import hongkongImg from "@/images/3.png";
import australiaImg from "@/images/Australia.jpg";
import canadaImg from "@/images/1.png";
import newzealend from "@/images/newzealend.jpeg";
import unitedkingdom from "@/images/unitedkingdom.jpeg";
import usa from "@/images/2.png";
import europe from "@/images/beautiful-low-angle-photo-frauenkirche-lutheran-church-dresden-germany-night-sky.jpg";
import portugal from "@/images/ponte-de-barcelos-barcelos-medieval-bridge.jpg";
import uae from "@/images/4.png";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "USA",
      img: usa,
      points: [
        "Green Card",
        "Study Visa",
        "Work Permit",
        "Spouse/Family Visas",
        "Business & Investor Visas",
        "Visit/ Tourist Visa",
      ],
    },
    {
      title: "Canada",
      img: canadaImg,
      points: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job  Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      title: "UK",
      img: hongkongImg,
      points: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      title: "Australia",
      img: australiaImg,
      points: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Employer Nomination Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      title: "New Zealand",
      img: uae,
      points: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      title: "Europe",
      img: europe,
      points: [
        "PR Visa/EU Blue Card",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Visit/ Tourist Visa",
      ],
    },
  ];

  const [firstFlipped, setFirstFlipped] = useState(true);

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 ">
        <div className="grid lg:grid-cols-6 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 sticky top-24">
            <h2 className="text-3xl sm:text-4xl  font-extrabold text-gray-900 leading-tight">
              <span className="text-red-600 text-semibold">GLOEDGE</span>{" "}
              Guiding You Beyond Borders
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Take the first step toward studying, working, migrating, or
              settling abroad. From education to citizenship, we provide
              personalized guidance at every stage of your journey.
            </p>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#da010b] text-white font-semibold rounded-md shadow-md hover:bg-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free Guidance Now
            </button>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {services.map((service, index) => {
                const isFirst = index === 0;
                return (
                  <div
                    key={index}
                    className="group w-full h-72 sm:h-80 md:h-85 cursor-pointer"
                    style={{ perspective: "1000px" }}
                    onMouseEnter={() => {
                      if (isFirst) setFirstFlipped(false);
                    }}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-gpu ${
                        isFirst
                          ? firstFlipped
                            ? "rotate-y-180"
                            : "group-hover:rotate-y-180"
                          : "group-hover:rotate-y-180"
                      }`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front */}
                      <div
                        className="absolute inset-0 w-full h-full overflow-hidden shadow-lg rounded-lg"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <Image
                          src={service.img}
                          fill
                          alt={service.title}
                          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 rounded-lg" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center drop-shadow-lg px-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Back */}
                      <div
                        className="absolute inset-0 w-full h-full shadow-xl flex flex-col justify-start p-4 sm:p-6 bg-white rounded-lg overflow-y-auto rotate-y-180"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                          {service.title}
                        </h3>
                        <div className="w-full space-y-2 sm:space-y-3">
                          {service.points.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-center group cursor-pointer"
                            >
                              <div className="w-2 h-2 bg-[#da010b] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                              <span className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
