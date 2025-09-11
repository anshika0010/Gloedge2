"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Briefcase,
  MapPin,
  ChevronDown,
  CheckCircle,
  Award,
} from "lucide-react";

export default function BusinessInvestorVisas() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const countries = [
    {
      name: "Canada",
      programs: [
        "Canada Start-Up visa",
        "Canada Business Visitor Visa",
        "Provincial Nominee Programs (PNPs) – Entrepreneur Streams",
        "Self-Employed Persons Program",
      ],
    },
    {
      name: "Australia",
      programs: [
        "National Innovation Visa (Subclass 858)",
        "Business Innovation & Investment Program (BIIP) – Subclasses 188 & 888",
        "Subclass 188 (Provisional)",
        "Subclass 888 (Permanent)",
        "Business Talent Permanent Visa (Subclass 132)",
        "Temporary Activity Visa (Subclass 408 – Invited Participants Stream)",
      ],
    },
    {
      name: "UK",
      programs: [
        "Global Talent Visa",
        "Innovator Founder Visa",
        "UK Expansion Worker visa",
      ],
    },
    {
      name: "USA",
      programs: [
        "EB-5 Immigrant Investor Program",
        "EB-1 Visa (Employment-Based, First Preference)",
        "L-1 Intra-company Transferee Visa",
        "B-1 Business Visitor Visa",
      ],
    },
    {
      name: "New Zealand",
      programs: ["Business Investor Visa (BIV)", "Active Investor Plus Visa"],
    },
    {
      name: "Dubai",
      programs: ["UAE Golden Visa", "Dubai Investor Visa"],
    },
    {
      name: "Europe",
      programs: [
        "Portugal Golden Visa",
        "Greece Golden Visa",
        "Malta Permanent Residence Programme (MPRP)",
        "Estonia Startup Visa",
        "Netherlands Startup Visa",
      ],
    },
  ];

  const topChoices = [
    "Canada Start-Up visa",
    "USA EB-5 Immigrant Investor Program",
    "New Zealand Business Investor Visa",
    "UAE Golden Visa",
    "Portugal Golden Visa",
  ];

  const benefits = [
    "Easy and definite route to Permanent Residency and Citizenship in top abroad business nations.",
    "International mobility: Access to international markets and multiple countries visa-free.",
    "Benefits for Family: Free Universal Healthcare and treatments, world class education for children below 18, and along with a clean and safe environment.",
    "Investing in stable economies helps you build a safe and secure future for yourself and your family.",
    "Overseas access to skilled workers and resources.",
    "Shows serious business intent and builds professional credibility.",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">
          What is a Business/Investor Visa?
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          A business or investor visa permits individuals who wish to migrate by
          investment or starting a business an opportunity. You can move to top
          business destinations like Canada, Australia, UK, USA, New Zealand,
          Europe and establish your business. These visas are particularly
          designed for entrepreneurs, investors, and high-net-worth individuals
          who wish to expand businesses, gain permanent residency status , and
          secure a future for their near and dear in any one of these overseas
          business hubs.
        </p>
      </motion.div>

      {/* Countries + Top Choices in Split Layout */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 border border-gray-300 px-8 py-4">
        {/* Countries Accordion (takes 2/3 width) */}
        <div className="space-y-4 md:col-span-2">
          {countries.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow border border-orange-200"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold">{c.name}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                    {c.programs.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Top Visa Choices (takes 1/3 width, stacked) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            Top Visa Choices of 2025
          </h2>
          <div className="space-y-4">
            {topChoices.map((choice, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 text-white rounded-xl shadow p-4 text-center font-medium"
              >
                {choice}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow border border-slate-200 p-6"
      >
        <h2 className="text-2xl font-bold mb-6">
          Why Choose Business/Investment Visas?
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-none" />
              <span>{b}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
