"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroImage from "@/images/study-hero.jpg";
import Footer from "../common/Footer";
import Heading from "../common/Heading";

export default function StudyHeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "Andhra Pradesh",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row container mx-auto min-h-[400px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={HeroImage}
            alt="Study Abroad"
            width={500}
            height={600}
            className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-full rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 relative flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
          {/* Red Accent Bar (only on desktop for style) */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-2 h-72 bg-red-600 rounded-r-md"></div>

          {/* Heading */}
          <Heading
            text={"Study Abroad With Gloedge-Visas"}
            className={
              "text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 hover:text-red-500 transition-colors duration-300"
            }
          />
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Value packed career counseling, college admissions, student visa and
            coaching solutions.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm sm:text-base"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />

            {/* Phone */}
            <div className="grid grid-cols-3 gap-4">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>IND (+91)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="col-span-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* State Dropdown */}
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
            </select>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-relaxed cursor-pointer hover:text-gray-800"
              >
                I accept all terms & privacy policy
              </label>
            </div>

            {/* Simple Captcha */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">What is 2 + 2 =</span>
              <input
                type="text"
                placeholder="?"
                className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
