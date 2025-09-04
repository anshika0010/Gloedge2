"use client";
import React, { useEffect, useRef, useState } from "react";
import { Shield } from "lucide-react";
import logo1 from "@/images/feature/Untitled-design-1-1.png"
import logo2 from "@/images/feature/The-Economics-Times-768x768.png"
import logo3 from "@/images/feature/NDTV-768x768.png"
import logo4 from "@/images/feature/Hindustan-times-1-768x768.png"
import logo5 from "@/images/feature/ANI-768x768.png"
import Image from "next/image";
import Heading from "./Heading";

const Wefeatured = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const trustedCompanies = [
    { name: "TechCorp Industries", logo: logo1 },
    { name: "Global Finance Ltd", logo: logo2 },
    { name: "Metro Solutions", logo: logo3 },
    { name: "Prime Security Systems", logo: logo4 },
    { name: "Alpha Manufacturing", logo: logo5 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-4 mb-20">
      <div className="container relative z-10 mx-auto px-6">
        {/* Client Carousel */}
        <div className="text-center">
          <Heading text={"We Featured In"} className={" flex justify-center mb-12 text-3xl font-bold text-slate-900 transition-all duration-600"}/>

          {/* <p
            className={`mb-16 text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-600 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Trusted by leading organizations across diverse industries for their
            security and manpower needs
          </p> */}

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="flex animate-scroll">
              {[...Array(3)].map((_, groupIndex) => (
                <div className="flex gap-8 px-4" key={groupIndex}>
                  {trustedCompanies.map((company, index) => (
                    <div
                      key={`${groupIndex}-${index}`}
                      className="flex h-15 w-100 flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg border border-slate-100 hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex  w-auto items-center justify-center rounded-lg  mb-3 transition-colors duration-300">
                        {company.logo ? (
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            width={500}
                            height={500}
                            className="h-15 w-auto"
                          />
                        ) : (
                          <Shield className="h-7 w-7 text-red-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Wefeatured;