"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "@/images/gloedge-home-page-banner.png";

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
    <section className="w-full  overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-300 rounded-xl p-2 lg:p-3">
        {/* Left: Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex justify-center"
        >
          <Image
            src={banner}
            alt="banner"
            className="w-full  rounded-lg"
            priority
          />
        </motion.div>

        {/* Right: Services */}
        <div className="w-full lg:w-2/5">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              What can we do for you today?
            </h1>

            {/* Service Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 px-2 sm:px-4">
              {[
                { label: "Eligibility Check", color: "red" },
                { label: "Study", color: "yellow" },
                { label: "Job", color: "blue" },
                { label: "Skilled Migration", color: "purple" },
                { label: "Business & Investment", color: "green" },
                { label: "Language Training", color: "pink" },
              ].map((service, idx) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx}
                  className={`${
                    serviceColors[service.color]
                  } text-white text-sm sm:text-base lg:text-lg font-semibold py-3 px-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  {service.label}
                </motion.button>
              ))}
            </div>

            {/* Counselling Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
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
