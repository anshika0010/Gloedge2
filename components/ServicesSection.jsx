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
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
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
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    {
      title: "USA",
      img: usa,
      points: [
        "  Green Card",
        "Study Visa",
        "Work Permit",
        "Spouse/Family Visas",
        "Business & Investor Visas",
        "Visit/ Tourist Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
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
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
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
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
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
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    // {
    //   title: "New Zealand",
    //   img: newzealend,
    //   points: [
    //     "PR Visa",
    //     "Study Visas",
    //     "Student Visa",
    //     "Express Entry Program",
    //     "PNP",
    //     "Business Visa",
    //     "Visit Visa",
    //     "Digital Nomad Visa",
    //   ],
    //   color: "bg-gradient-to-br from-gray-700 to-gray-500",
    // },
    // {
    //   title: "United Kingdom",
    //   img: unitedkingdom,
    //   points: [
    //     "PR Visa",
    //     "Study Visas",
    //     "Student Visa",
    //     "Express Entry Program",
    //     "PNP",
    //     "Business Visa",
    //     "Visit Visa",
    //     "Digital Nomad Visa",
    //   ],
    //   color: "bg-gradient-to-br from-gray-700 to-gray-500",
    // },

    // {
    //   title: "Portugal",
    //   img:portugal,
    //   points: [
    //     "PR Visa",
    //     "Study Visas",
    //     "Student Visa",
    //     "Express Entry Program",
    //     "PNP",
    //     "Business Visa",
    //     "Visit Visa",
    //     "Digital Nomad Visa",
    //   ],
    //   color: "bg-gradient-to-br from-gray-700 to-gray-500",
    // },
  ];

  const [firstFlipped, setFirstFlipped] = useState(true);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-6 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8  md:sticky top-30">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What can we do for you today?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose a service to explore how we can help you study, migrate,
              work, visit, or even get citizenship. Our team ensures you get
              personalized guidance at every step.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-[#da010b] text-white font-semibold  shadow-md hover:bg-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free Counselling
            </button>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const isFirst = index === 0;
                return (
                  <div
                    key={index}
                    className="group w-full h-80 cursor-pointer"
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
                      <div
                        className="absolute inset-0 w-full h-full  overflow-hidden shadow-lg"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {/* <div
                          className="absolute inset-0 bg-fit bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${service.img})` }}
                        /> */}
                        <Image
                          src={service.img}
                          width={300}
                          height={500}
                          alt={service.title}
                          className="absolute inset-0 h-[100%] bg-fit bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-3xl font-bold text-white text-center drop-shadow-lg px-4">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 w-full overflow-y-auto h-full shadow-xl flex flex-col justify-center  pt-6 pl-4 text-gray-500 rotate-y-180`}
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <h3 className="text-2xl font-bold mb-6 mt-3 drop-shadow-md">
                          {service.title}
                        </h3>

                        <div className="w-full ">
                          {service.points.map((point, idx) => (
                            <div
                              key={idx}
                              className="mb-3 flex items-center group cursor-pointer"
                            >
                              <div className="w-2.5 h-2.5 bg-white rounded-full mr-3 flex-shrink-0 shadow-sm"></div>
                              <span
                                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group-hover:text-gray-500`}
                              >
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
