'use client';
import Image from "next/image";
import { useState } from "react";
import image from "@/images/invest.jpg";
export default function InvestForm() {
  const [isWhatsapp, setIsWhatsapp] = useState(true);

  return (
    <div className="container mx-auto bg-white border border-gray-200 p-4 flex flex-col md:flex-row gap-6">
      {/* Left Image */}
      <div className="md:w-1/2 flex items-center justify-center bg-green-500">
        <Image
          src={image}
          alt="Person"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Invest</h1>
        <p className="text-gray-700">
          Apply for Overseas Investor Visa programs through Y-Axis
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              I am
            </label>
            <input
              type="text"
              placeholder="Name"
              className="mt-1 w-full border-b border-gray-400 focus:outline-none focus:border-black"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              wanted to invest in
            </label>
            <select className="mt-1 w-full border-b border-gray-400 focus:outline-none focus:border-black">
              <option>Select Country</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              you can contact me at
            </label>
            <div className="flex gap-2 mt-1">
              <select className="border-b border-gray-400 focus:outline-none focus:border-black">
                <option>IN +91</option>
                <option>US +1</option>
                <option>UK +44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone No."
                className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black"
              />
            </div>

            {/* Toggle */}
            <div className="flex items-center mt-3 gap-2">
              <button
                type="button"
                onClick={() => setIsWhatsapp(!isWhatsapp)}
                className={`w-10 h-5 rounded-full ${
                  isWhatsapp ? "bg-green-500" : "bg-gray-300"
                } flex items-center p-1`}
              >
                <span
                  className={`w-4 h-4 bg-white rounded-full transform transition ${
                    isWhatsapp ? "translate-x-5" : "translate-x-0"
                  }`}
                ></span>
              </button>
              <span className="text-gray-700 text-sm">
                Use this as Whatsapp number
              </span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              and email
            </label>
            <input
              type="email"
              placeholder="Email ID"
              className="mt-1 w-full border-b border-gray-400 focus:outline-none focus:border-black"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4" />
            <span className="text-sm text-gray-700">
              I accept the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-medium py-2 rounded-none hover:bg-green-600"
          >
            Submit
          </button>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-sm mt-4">
          <span className="text-gray-700">Don't know what to do</span>
          <a href="#" className="text-red-500 font-medium">
            Get free Counselling
          </a>
        </div>
      </div>
    </div>
  );
}
