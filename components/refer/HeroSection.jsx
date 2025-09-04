import React from "react";
import referImg from "@/images/Referral_gloedge.png"
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function HeroSection() {
  const language = useLocale()
  return (
    <div className=" flex items-center justify-center bg-gradient-to-r from-pink-100 to-red-500 p-8">
      {/* Left Side - Image + Phone */}
      <div className="w-full md:w-1/2 flex justify-center items-center ">
        {/* Woman Image */}
        <Image
          src={referImg}
          alt="Woman"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-white mx-10 to-red-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-2">Gloedge Rewards</h2>
        <p className="text-gray-600 text-center mb-6">Enter your details</p>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Your First Name"
              className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Your Last Name"
              className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Mobile */}
          <div className="flex">
            <select className="px-4 py-3 border rounded-l-lg focus:outline-none">
              <option>IND (+91)</option>
              <option>USA (+1)</option>
              <option>UK (+44)</option>
            </select>
            <input
              type="text"
              placeholder="Your Mobile Number"
              className="w-full px-4 py-3 border border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>
              By signing up, you agree to our{" "}
              <Link href={`/${language}/terms-and-conditions`} className="text-red-500 font-medium">
                Terms & Conditions
              </Link>
              *
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
