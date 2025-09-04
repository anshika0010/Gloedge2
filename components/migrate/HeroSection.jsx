"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "@/images/Migrate.jpg";
import { MotionDiv } from "@/components/motion/MotionComponents";
import Heading from "@/components/common/Heading";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    countryCode: "+91",
    mobile: "",
    useWhatsapp: false,
    email: "",
    acceptTerms: false,
  });

  const countries = ["USA", "UK", "Canada", "Australia", "Germany"];
  const countryCodes = ["+91", "+1", "+44", "+61", "+49"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Please accept Terms & Conditions");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex container mx-auto flex-col lg:flex-row bg-white border border-gray-300 overflow-hidden shadow-md mt-38">
      {/* LEFT SIDE IMAGE (60%) */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-[3] h-[220px] lg:h-auto"
        >
        <Image
          src={HeroImage}
          alt="Work Visa"
          width={500}
          height={500}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          priority
        />
        </MotionDiv>

      {/* RIGHT SIDE FORM (40%) */}
      <div className="flex-[2] bg-white relative flex flex-col justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-red-600"></div>

        <div className="max-w-sm mx-auto py-6 px-4">
          <Heading text={"Secure Your Work Visa"} className={"text-xl font-bold text-gray-900 mb-1"}/>
          <Heading text={"Quickly & Easily"} className={"text-lg font-bold text-gray-900 mb-2"}/>
          <p className="text-sm text-gray-600 mb-4">
            Want to Work Overseas? Avail our Job Search Services
          </p>

          {/* Form */}
          <div className="space-y-3 text-sm">
            {/* Name and Country */}
            <div className="flex items-center space-x-1">
              <span className="text-gray-700">I am</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="flex-1 px-0 py-1 border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 outline-none bg-transparent text-sm"
              />
              <span className="text-gray-700">want to migrate in</span>
            </div>

            {/* Country Selection */}
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 outline-none bg-transparent appearance-none cursor-pointer text-sm"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {/* Contact Section */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                You can contact me at
              </h3>

              {/* Phone */}
              <div className="flex space-x-2 mb-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="px-2 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-transparent outline-none bg-white text-sm"
                >
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No."
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="flex-1 px-2 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-transparent outline-none text-sm"
                />
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  name="useWhatsapp"
                  checked={formData.useWhatsapp}
                  onChange={handleInputChange}
                  className="w-3 h-3 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                />
                <label className="text-gray-700 text-sm">
                  Use this as WhatsApp number
                </label>
              </div>

              {/* Email */}
              <div className="mb-2">
                <span className="text-gray-700 mr-1">and Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-1 border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 outline-none bg-transparent text-sm mt-1"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2 mb-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="w-3 h-3 text-teal-500 border-gray-300 rounded focus:ring-teal-500 mt-0.5"
                />
                <label className="text-xs text-gray-600">
                  I accept the{" "}
                  <span className="text-blue-500 underline cursor-pointer">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                className="w-full bg-[#6E2A8F] hover:[bg-[#b37dce] text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Get Started
              </button>

              {/* Free Consultation */}
              <div className="flex items-center justify-center mt-4 space-x-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Don&apos;t know what to do?
                  </div>
                  <div className="text-xs text-red-500 font-medium">
                    Get Free Consultation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
