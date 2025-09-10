"use client";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/motion/MotionComponents";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import ctaImg from "@/images/Start-Up Visa Canada.png";
import Image from "next/image";

const Banner = () => {
  // bg-[#da010b]
  return (
    <div className="bg-[#950b0b] raletive ">
      <div className="w-[95%] mx-auto sm:w-[90%] lg:w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col justify-center space-y-2 md:space-y-4">
            <MotionH1
              className="text-2xl md:text-3xl text-white font-bold "
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              Why Everyone’s Choosing the Canada Startup Visa!
            </MotionH1>
            <MotionP
              className="text-white text-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9 }}
            >
              When it comes to Canada PR, the Start-Up Visa has quickly become
              the most preferred pathway. With its simplified eligibility
              criteria for skilled and entrepreneurial professionals, it offers
              assured permanent residency, a secured open work permit and
              potential investment returns from a promising start-up project.
              <span>
                This program has even revived the halted journeys of many
                aspirants toward Canada! The quota is limited, and the number of
                applicants is rising rapidly.
              </span>
            </MotionP>
            <Link
              href={"/contact-us"}
              className="inline-flex items-center px-8 py-2 bg-white text-[#da010b] w-[fit-content] font-semibold  shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Contact Us</span>
            </Link>
          </div>
          <MotionDiv
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <Image
              src={ctaImg}
              width={300}
              height={400}
              alt="cta"
              className="mt-8 md:mt-0 ml-6 md:ml-auto w-[auto] h-[300px] md:h-[auto] md:w-full md:max-w-[350px]"
            />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default Banner;