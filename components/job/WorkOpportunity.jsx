"use client"
import React from "react";
import Heading from "../common/Heading";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "next-intl";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const WorkOpportunity = () => {
  const language = useLocale()
   const containerRef = useRef(null);

 useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".work-opportunity");
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
    <div className=" mx-auto border border-gray-300  mt-4 bg-white">
      <div className="bg-gray-200 p-6 mb-6">
        <Heading text={"Work Opportunity"} className={" flex justify-center text-center text-4xl font-bold text-black mb-6"}/>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-7 justify-center items-center mb-4">
          <input
            type="text"
            placeholder="Search Careers"
            className="w-full md:w-1/3 border border-gray-300 bg-white py-3  px-6 rounded focus:outline-none"
          />
          <select className="w-full md:w-1/3 border border-gray-300 bg-white p-3 px-6 rounded focus:outline-none">
            <option>Select Country</option>
            <option>USA</option>
            <option>Germany</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>UK</option>
            <option>Dubai</option>
          </select>
          <button className="bg-[#009bad] text-white px-12 py-3 rounded font-semibold hover:bg-text-[#004a52] transition">
            Search
          </button>
        </div>

        {/* Resume Note */}
        <p className="text-center text-gray-600 mb-6">
          Post your Resume -{" "}
          <span className="text-black font-semibold">
            Your overseas job search starts here.
          </span>
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-3" ref={containerRef}>
        {/* By Country */}
        <div className="border border-gray-300 p-4 flex flex-col h-80 work-opportunity">
          <h3 className="font-bold text-lg text-gray-800 mb-2  bg-white sticky top-0 py-2 z-10">
            By Country
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900 overflow-y-auto custom-scrollbar">
            <li>
              <Link href={`/${language}/detail/okok`} className="flex justify-between">
              <span>Jobs in USA</span>{" "}
              <span className="text-red-600 text-3xl font-semibold">...</span>
            </Link>
            </li>
            <li >
              <Link href={`/${language}/detail/okok`} className="flex justify-between">
              <span>Jobs in Germany</span>{" "}
              <span className="text-red-600 text-3xl font-semibold">...</span>
            </Link>
            </li>
            <li >
              <Link href={`/${language}/detail/okok`} className="flex justify-between">
              <span>Jobs in Canada</span>{" "}
              <span className="text-red-600 text-3xl font-semibold">...</span>
            </Link>
              
            </li>
            <li >
               <Link href={`/${language}/detail/okok`} className="flex justify-between">
              <span>Jobs in Canada</span>{" "}
              <span className="text-red-600 text-3xl font-semibold">...</span>
            </Link>
            </li>
            <li >
               <Link href={`/${language}/detail/okok`} className="flex justify-between">
              <span>Jobs in Canada</span>{" "}
              <span className="text-red-600 text-3xl font-semibold">...</span>
            </Link>
            </li>
            <li >
              <Link href={`/${language}/detail/okok`} className="flex justify-between">
              <span>Jobs in Canada</span>{" "}
              <span className="text-red-600 text-3xl font-semibold">...</span>
            </Link>
            </li>
          </ul>
        </div>

        {/* By Profession */}
        <div className="border border-gray-300 p-4 flex flex-col h-80 work-opportunity">
          <h3 className="font-bold text-lg text-gray-800 mb-2  bg-white sticky top-0 py-2 z-10">
            By Profession
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900 overflow-y-auto custom-scrollbar">
            <li><Link href={`/${language}/detail/okok`}>
              IT
            </Link></li>
            <li><Link href={`/${language}/detail/okok`}>
              Engineering
            </Link></li>
            <li><Link href={`/${language}/detail/ok`}>Marketing and Sales</Link></li>
            <li><Link href={`/${language}/detail/ok`}>HR</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Healthcare</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Teachers</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Accountants</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Nursing</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Hospitality</Link></li>
          </ul>
        </div>

        {/* By Visa */}
        <div className="border border-gray-300 p-4 flex flex-col h-80 work-opportunity">
          <h3 className="font-bold text-lg text-gray-800 mb-2  bg-white sticky top-0 py-2 z-10">
            By Visa
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900 overflow-y-auto custom-scrollbar">
            <li><Link href={`/${language}/detail/ok`}>Australia Work Visa</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Canada Work Visa</Link></li>
            <li><Link href={`/${language}/detail/ok`}>UK Skilled Worker Visa</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Germany Opportunity Card</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Sweden Residence Permit</Link></li>
            <li><Link href={`/${language}/detail/ok`}>Portugal Jobseeker Visa</Link></li>
          </ul>
        </div>

        {/* By Services */}
        <div className="border border-gray-300 p-4 flex flex-col h-80 work-opportunity">
          <h3 className="font-bold text-lg text-gray-800 mb-2  bg-white sticky top-0 py-2 z-10">
            By Services
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900 overflow-y-auto custom-scrollbar">
            <li>Search Overseas Jobs</li>
            <li>Post Resume</li>
            <li>Job Search Services</li>
            <li>Resume Writing</li>
            <li>LinkedIn Optimization</li>
            <li>Resume Marketing</li>
            <li>Post a Job</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkOpportunity;