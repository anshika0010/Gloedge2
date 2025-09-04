"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "@/images/work-hero.jpg";
import HeaderForm from "../common/HeaderForm";

export default function VisaForm() {
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
    <div className="flex mx-auto flex-col lg:flex-row bg-white border border-gray-300 overflow-hidden shadow-md rounded-md">
      {/* LEFT SIDE IMAGE (60%) */}
      <div className="relative flex-[3] h-[220px] lg:h-auto">
        <Image
          src={HeroImage}
          alt="Work Visa"
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* RIGHT SIDE FORM (40%) */}
      <div className="flex-[2] bg-white relative flex flex-col justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-red-600"></div>

        <HeaderForm formClass={"mr-4"} buttonClasses={"bg-[#009bad]"} popClasses={"text-[#009bad]"} />
      </div>
    </div>
  );
}