"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "@/images/gloedge-home-page-banner.png";
import Heading from "./common/Heading";
// import video from "../../public/myvideo.mp4";

export default function HeroSection() {
  const serviceColors = {
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    purple: "bg-[#6e298e] hover:bg-[#6e298e]",
    blue: "bg-[#009bad] hover:bg-[#009bad]",
    green: "bg-[#f55f3e] hover:bg-[#f55f3e]",
    pink: "bg-blue-700 hover:bg-blue-800",
    red: "bg-green-500 hover:bg-green-600",
  };

  return (
    <section className="w-full py-6 px-2 mt-33 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-6 border border-gray-300 ">
        {/* Left: Video (larger space) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[60%]"
        >
          {/* <video
            src="/myvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] object-cover rounded-xl shadow-lg"
          /> */}
          <Image src={banner} alt="banner" className="h-[75vh]" />
        </motion.div>

        {/* Right: Services (smaller space) */}
        <div className="w-[40%]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center md:text-left "
          >
            <h1
              className={
                "text-2xl sm:text-4xl font-bold text-gray-900 leading-snug pl-3"
              }
            >
              What can we do for you today?
            </h1>

            {/* Service buttons */}
            <div className="grid grid-cols-2 gap-3 px-4">
              {[
                { label: "Eligibility Check", color: "red" },
                { label: "Study", color: "yellow" },
                { label: "Job", color: "blue" },
                { label: "Skilled Migration", color: "purple" },

                { label: "Business and Investment ", color: "green" },
                { label: "Language Training", color: "pink" },
                // { label: "Citizenship", color: "red" },
              ].map((service, idx) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx}
                  className={`${
                    serviceColors[service.color]
                  } text-white text-xl font-semibold py-3 shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  {service.label}
                </motion.button>
              ))}
            </div>

            {/* Counselling */}
            <div className="flex text-center flex-col sm:flex-row items-center justify-center md:justify-center gap-2 text-md">
              <a
                href="#"
                className="text-red-600 font-medium hover:underline hover:scale-105 transition-transform"
              >
                Get Free Eligibility Guidance.
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
