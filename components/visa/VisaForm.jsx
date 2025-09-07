import React from "react";
import Image from "next/image";
import image from "@/images/visagirl.png";
const VisaForm = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="relative w-full h-[600px]">
          <Image
            src={image}
            alt="Visa Expert"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          {/* Section Heading */}
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            Contact Information
          </h3>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
            Connect with Our Visa Experts Today
          </h2>

          {/* FORM */}
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First & Last Name */}
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full"
            />

            {/* Country Code + Phone */}
            <div className="flex">
              <select className="border border-gray-300 rounded-l px-3 py-3 w-28 bg-white">
                <option>IND (+91)</option>
                <option>USA (+1)</option>
                <option>UK (+44)</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 focus:outline-none rounded-r px-4 py-3 w-full"
              />
            </div>

            {/* Email + Age */}
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full"
            />
            <input
              type="number"
              placeholder="Your Age"
              className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full"
            />

            {/* Prior Refusal + Co-Applicant */}
            <select className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full bg-white">
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <input
              type="number"
              placeholder="Number of Co-Applicants"
              className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full"
            />

            {/* Country of Interest + Visa Category */}
            <select className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full bg-white">
              <option>Select Country</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>USA</option>
            </select>
            <select className="border border-gray-300 focus:outline-none rounded px-4 py-3 w-full bg-white">
              <option>Select Visa Type</option>
              <option>Work Visa</option>
              <option>Study Visa</option>
              <option>Tourist Visa</option>
            </select>

            {/* Submit Button (Full Width) */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-400 transition"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VisaForm;
