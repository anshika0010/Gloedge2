"use client";

import React from "react";
import hongkongImg from "@/images/3.png";
import australiaImg from "@/images/Australia.jpg";
import canadaImg from "@/images/1.png";
import usa from "@/images/2.png";
import europe from "@/images/beautiful-low-angle-photo-frauenkirche-lutheran-church-dresden-germany-night-sky.jpg";
// import portugal from "@/images/ponte-de-barcelos-barcelos-medieval-bridge.jpg";
import uae from "@/images/4.png";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function GloEdgeAffiliate() {
  const language = useLocale();
  const steps = [
    "Complete your registration with the GloEdge Affiliate program",
    "Quickly share the details of your friends and family with GloEdge visas' team",
    "Once they purchase an eligible service from GloEdge, the value of the cashback is decided",
    "Upon a successful buy from your circle, you win yourself an exclusive cashback in INR",
  ];

  const countries = [
    {
      name: "Canada",
      image: canadaImg,
      services: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      name: "Australia",
      image: australiaImg,
      services: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Employer Nomination Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      name: "USA",
      image: hongkongImg,
      services: [
        "Green Card",
        "Study Visa",
        "Work Permit",
        "Spouse/Family Visas",
        "Business & Investor Visas",
        "Visit/ Tourist Visa",
      ],
    },
    {
      name: "UK",
      image: usa,
      services: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      name: "New Zealand",
      image: uae,
      services: [
        "PR Visa",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Visit/ Tourist Visa",
      ],
    },
    {
      name: "Europe",
      image: europe,
      services: [
        "PR Visa/EU Blue Card",
        "Study Visas",
        "Work Permits",
        "Spouse/Family Visas",
        "Business/Investor Visas",
        "Job Seeker Visa",
        "Visit/ Tourist Visa",
      ],
    },
  ];

  const perks = [
    "You earn hassle free when your referral purchases any of our visa services.",
    "Higher the Purchase Value, Higher the Referral Bonus!",
    "Referral applies across all of our services (not limited to one category).",
    "Single Sign Up + Sending of Invitation opens doors to an immediate credited bonus once the purchase is confirmed.",
  ];

  const points = [
    {
      title: "Eligibility Check",
      desc: "Referrals count only when your family or friend registers via the referral link shared by you and completes a purchase.",
    },
    {
      title: "Unlock your Rewards",
      desc: "Only confirmed and paid purchases can avail the prized bonus.",
    },
    {
      title: "Terms & Conditions",
      desc: "Details on referral limits, payouts, redemptions, and taxes are listed under our terms and conditions (refer to the T&C page).",
    },
  ];

  const rewards = [
    { range: "₹5,000 – ₹14,999", reward: "₹750" },
    { range: "₹15,000 – ₹29,999", reward: "₹1,000" },
    { range: "₹30,000 – ₹49,999", reward: "₹1,500" },
    { range: "₹50,000 – ₹99,999", reward: "₹2,500" },
    { range: "₹100,000 – ₹199,999", reward: "₹3,000" },
    { range: "₹200,000 and above", reward: "₹5,000" },
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 drop-shadow-md">
              How to become a Part of the Affiliate Program?
            </h1>
            {/* <p className="mt-2 text-sm md:text-base text-red-600/80 max-w-xl">
              Join our uniquely designed affiliate program and earn cashback in
              INR when your referrals purchase any eligible visa service from
              GloEdge.
            </p> */}
          </div>
          <div className="flex gap-3">
            <Link
              href={`/${language}/terms-and-conditions`}
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-4 py-2 rounded-lg bg-white hover:bg-red-50 shadow-sm hover:scale-105 transition-transform"
            >
              Terms & Conditions
            </Link>
          </div>
        </header>

        {/* Steps */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-2xl shadow-md border border-red-100 flex flex-col gap-3 hover:scale-[1.05] transition-transform hover:shadow-xl animate-fade-up"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold shadow-md">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-red-700">Step {i + 1}</h3>
              </div>
              <p className="text-sm text-gray-700">{s}</p>
            </div>
          ))}
        </section>

        {/* Services Grid */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-red-700">
            Presenting our Diverse Range of Services
          </h2>
          <p className="mt-2 text-sm text-red-600/90 max-w-2xl">
            Applicable across country specific categories — find the category
            and share your referral link.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c) => (
              <article
                key={c.name}
                className="relative rounded-2xl shadow-md overflow-hidden group hover:scale-[1.03] transition-transform"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${c.image.src})` }}
                />
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/50 transition" />
                <div className="relative p-5 text-white z-10">
                  <h3 className="text-lg font-semibold drop-shadow-md">
                    {c.name}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {c.services.map((svc) => (
                      <li key={svc} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-white" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rewards Matrix */}
        <section className="mt-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-black">
            Affiliate Rewards Matrix
          </h2>
          <p className="mt-2 text-sm text-red-600/90">
            Bonus matching the service value — different visa services mean
            different cashback levels.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-4 py-3 text-left">Service Value (₹)</th>
                  <th className="px-4 py-3 text-left">Affiliate Reward (₹)</th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((r, idx) => (
                  <tr key={idx} className="hover:bg-red-50 transition">
                    <td className="px-4 py-3 border-b border-red-100">
                      {r.range}
                    </td>
                    <td className="px-4 py-3 border-b border-red-100 font-semibold text-red-700">
                      {r.reward}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Perks & Points */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-red-50 hover:shadow-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-red-700">
              Perks of Being in the GloEdge Affiliate Club
            </h3>
            <ol className="mt-4 space-y-3 text-gray-700">
              {perks.map((p, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-8 h-8 rounded-md bg-red-100 flex items-center justify-center font-semibold text-red-700 shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm">{p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-red-50 hover:shadow-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-red-700">
              Points to Remember
            </h3>
            <div className="mt-4 space-y-4 text-gray-700">
              {points.map((pt) => (
                <div
                  key={pt.title}
                  className="hover:translate-x-1 transition-transform"
                >
                  <h4 className="font-semibold text-red-600">{pt.title}</h4>
                  <p className="text-sm mt-1">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <footer
          id="register"
          className="mt-12 relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Background Pattern / Overlay */}
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-cover bg-center" />

          <div className="relative px-6 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Text */}
            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-2xl md:text-3xl drop-shadow">
                Ready to Start Earning?
              </h4>
              <p className="text-sm md:text-base mt-2 opacity-90">
                Sign up once and start sharing — cashback credited on confirmed
                purchases.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="border border-white/70 px-6 py-3 rounded-xl hover:bg-white hover:text-red-600 transition-all hover:scale-105">
                Contact Team
              </button>
            </div>
          </div>
        </footer>

        <p id="tnc" className="mt-6 text-xs text-gray-500">
          * For full details including referral limits, payouts, redemptions,
          and taxes please refer to the Terms &amp; Conditions page.
        </p>
      </div>
    </div>
  );
}
