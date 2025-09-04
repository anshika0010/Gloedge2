"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WorkAbroadIcon from "@/images/WORKABROADicon.jpeg";
import JobSearchIcon from "@/images/JOBSEARCHicon.jpeg";
import OverseasIcon from "@/images/OVERSEASicon.jpeg";


export default function CareerChangePage() {

  return (
    <div className="font-sans">
      <section className="bg-[#019CAD] text-white text-center py-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want a Career change?
        </h2>
        <p className="mb-6 text-lg">
          Looking for a career change. We make it easy. Get in touch with us.
        </p>
        <button className="border-2 border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-teal-700 transition-all duration-300">
          Get Connected →
        </button>
      </section>

      {/* Why Choose Y-Axis */}
      <section className="bg-white border border-gray-300 mx-auto rounded-sm mt-10 p-8 text-center">
        <h3 className="text-2xl font-bold mb-10">
          Why choose Y-Axis as your Professional Partner?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
          {/* Card 1 */}
          <div
            className="flex flex-col items-center p-6 border-r md:border-r-gray-300"
          >
            <Image
              src={OverseasIcon}
              alt="Overseas Jobs"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold">OVERSEAS JOBS</h4>
            <p className="text-gray-600 mt-2">
              World’s leading overseas career consultant.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col items-center p-6 border-r md:border-r-gray-300"
          >
            <Image
              src={JobSearchIcon}
              alt="Job Search"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold">JOB SEARCH</h4>
            <p className="text-gray-600 mt-2">
              We make your profile more accessible, attractive, and engaging to
              international companies.
            </p>
            <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition-all duration-300">
              Apply Now
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-center p-6"
          >
            <Image
              src={WorkAbroadIcon}
              alt="Work Abroad"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="text-lg font-semibold">WORK ABROAD</h4>
            <p className="text-gray-600 mt-2">
              Work & settle abroad with your family
            </p>
          </div>
        </div>
      </section>

      {/* Why Apply for Work Permit */}
      <section className="px-6 md:px-16 py-10">
        <h3 className="text-2xl font-bold mb-4">
          Why apply for a Work Permit?
        </h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Rapid economic growth</li>
          <li>Excellent work-life balance</li>
          <li>5x more income than your current salary</li>
          <li>Millions of job opportunities in various sectors</li>
          <li>Professional job market is truly global</li>
          <li>Better career opportunities and prospects</li>
          <li>Develop your cultural intelligence</li>
          <li>Expand your professional network</li>
          <li>Healthcare & social benefits</li>
          <li>Retirement benefits</li>
        </ul>
      </section>

      {/* What is a Work Permit */}
      <section className="px-6 md:px-16 pb-12">
        <h3 className="text-2xl font-bold mb-4">What is a Work Permit?</h3>
        <p className="text-gray-700 mb-4">
          Working abroad can dramatically transform your life and career.
          Working in a foreign country would surely require you to acquire new
          abilities. You will learn new soft skills, such as communication and
          networking, as well as new technical skills in your new career abroad.
          After all, navigating a new location without knowing the language
          requires resourcefulness, and working in an international team will
          improve your communication skills.
        </p>
        <p className="text-gray-700 mb-4">
          Working overseas also allows you to learn a foreign language. This
          will help you in your work and make a living abroad easier. Besides
          this, your new language skills will positively impact your career.
        </p>
        <p className="text-gray-700 mb-4">
          Working in a foreign country is a fantastic way to broaden your
          personal and professional network. Working in another country exposes
          you to fresh opportunities because you will collaborate with locals
          and expats from other countries. You will also develop friendships
          with people from various walks of life, some of which will last a
          lifetime.
        </p>
        <p className="text-gray-700">
          Having an international assignment on your resume may help you find
          work in the future. Talent mobility is a hot topic in recruiting, and
          an increasing proportion of future professions will necessitate
          foreign travel. Working overseas will demonstrate your flexibility and
          independence and make your resume stand out. Additionally, any other
          talents you acquire abroad, such as language skills, will enhance your
          resume.
        </p>
      </section>
    </div>
  );
}