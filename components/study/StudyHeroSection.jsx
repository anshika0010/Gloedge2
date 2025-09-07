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
  
    <div className="flex container mx-auto flex-col lg:flex-row min-h-[500px] bg-white  border border-gray-200 overflow-hidden ">
      <div className="lg:w-1/2 bg-white ">
        <Image
          src={HeroImage}
          alt="Study Abroad"
          width={500}
          height={600}
          className="object-contain w-full h-full rounded-lg"
          priority
        />
      </div>

      <div className="lg:w-1/2 bg-white  relative  flex flex-col justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-72 bg-red-600"></div>

        <div className="max-w-md mx-auto">
          <div className="mb-4 ">
            <Heading text={"Study Abroad With"} className={"text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-orange-500 transition-colors duration-300"}/>
            <Heading text={"Gloedge-Visas"} className={"text-3xl lg:text-4xl font-bold text-gray-900 mb-4 hover:text-orange-500 transition-colors duration-300"}/>
            <p className="text-gray-600 leading-relaxed">
              Value packed career counseling, college admissions, student visa
              and coaching solutions.
            </p>
          </div>

          <div className="py-4 space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 group-hover:border-orange-300"
                />
              </div>
              <div className="group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 group-hover:border-orange-300"
                />
              </div>
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 group-hover:border-orange-300"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="group">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 group-hover:border-orange-300">
                  <option>IND (+91)</option>
                </select>
              </div>
              <div className="col-span-2 group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 group-hover:border-orange-300"
                />
              </div>
            </div>

            <div className="group">
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 group-hover:border-orange-300"
              >
                <option>Andhra Pradesh</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
              </select>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 transition-colors duration-300"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300 cursor-pointer"
              >
                I accept all terms & privacy policy
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">What is 2 + 2 =</span>
              <input
                type="text"
                placeholder="?"
                className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full Allbtn text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </>
  );
}