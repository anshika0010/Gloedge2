"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Briefcase,
  Users,
  BarChart2,
  MapPin,
  Archive,
  CheckCircle,
  Mail,
} from "lucide-react";

export default function InvestorVisaOverview() {
  const destinations = [
    {
      title: "USA",
      subtitle: "EB-5 / E-2",
      text: "EB-5: USD 800k–1.05M (approx). E-2 for treaty investors.",
      icon: MapPin,
      color: "from-red-400 to-rose-500",
    },
    {
      title: "Canada",
      subtitle: "Start-Up / PNP",
      text: "Start-Up Visa & Provincial nominee investor/business streams.",
      icon: Globe,
      color: "from-sky-400 to-blue-500",
    },
    {
      title: "UK",
      subtitle: "Innovator Founder",
      text: "Visa for entrepreneurs with innovative business ideas.",
      icon: Briefcase,
      color: "from-violet-400 to-indigo-500",
    },
    {
      title: "Australia",
      subtitle: "BIIP",
      text: "Business Innovation & Investment Program — multiple streams.",
      icon: BarChart2,
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Europe",
      subtitle: "Golden Visas",
      text: "Portugal, Greece, Spain, Malta: real-estate or fund routes.",
      icon: Users,
      color: "from-amber-400 to-orange-500",
    },
  ];

  const types = [
    "Direct Investment Visas — large capital placements (e.g., EB-5)",
    "Entrepreneur / Start-up Visas — innovators with business plans",
    "Golden Visas — real estate or fund-based residency (Portugal, Greece)",
    "Passive Income Options — bonds, deposits, or regional programs",
    "Australia BIIP — Business Innovation, Investor and Significant Investor streams",
  ];

  const eligibility = [
    {
      text: "Proof of minimum investment in the form of stocks, bonds, bank statements, or debentures.",
      detail:
        "Example: USA EB-5 requires USD 800,000–1,050,000; Canada Start-Up requires investment from a designated fund; Portugal Golden Visa requires EUR 250,000–500,000.",
    },
    { text: "A detailed business plan." },
    {
      text: "Liquid funds like cash or assets that can be legally transferred.",
    },
    {
      text: "Job creation: Hiring local skilled people and contributing to the economic development of the destination country.",
    },
    {
      text: "Business purpose: The trip should be connected with a genuine business activity.",
    },
    {
      text: "Sufficient funds to cover travel expenses, living costs, and business operations abroad.",
    },
    {
      text: "Enterprise criteria compliance: The business or enterprise receiving the investment must meet the specific standards defined by the destination country.",
    },
    {
      text: "Proven business experience: Demonstrable record of owning, managing, or investing in businesses.",
    },
    {
      text: "Innovative business plan that shows uniqueness and growth potential.",
    },
    {
      text: "Language proficiency: English or French skills proven through a designated language test.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center mb-8"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Business & Investment Visa — Overview
          </h1>
          <p className="mt-3 text-slate-600 max-w-prose">
            Why investors choose overseas visas, top destinations, visa types,
            and simple eligibility guidance — designed for a clean client
            presentation or product page.
          </p>

          <ul className="mt-6 grid gap-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-none" />
              <div>
                <div className="font-medium">Path to PR & Citizenship</div>
                <div className="text-sm text-slate-600">
                  Fast, definite routes in top countries
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-sky-500 mt-1 flex-none" />
              <div>
                <div className="font-medium">International Mobility</div>
                <div className="text-sm text-slate-600">
                  Access global markets and visa-free travel
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-violet-500 mt-1 flex-none" />
              <div>
                <div className="font-medium">Family Benefits</div>
                <div className="text-sm text-slate-600">
                  Healthcare, education and safer environment
                </div>
              </div>
            </li>
          </ul>

          {/* <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow">
              <Mail className="w-4 h-4" />
              Get a Free Consultation
            </button>
            <button className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl bg-white/70">
              <Archive className="w-4 h-4" />
              Download Brochure
            </button>
          </div> */}
        </div>

        {/* Quick Snapshot */}
        <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/30">
          <h3 className="text-lg font-semibold">Quick Snapshot</h3>
          <dl className="mt-4 grid gap-3">
            <div>
              <div className="text-sm text-slate-500">Top destinations</div>
              <div className="font-medium">
                USA · Canada · UK · Australia · Europe
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Investment ranges</div>
              <div className="font-medium">
                USD 250k → 5M+ (depends on program)
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Family benefits</div>
              <div className="font-medium">
                Healthcare, education, social security
              </div>
            </div>
          </dl>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <section className="lg:col-span-2 space-y-6">
          {/* Destinations */}
          <article className="grid sm:grid-cols-2 gap-4">
            {destinations.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="relative bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow border border-white/30"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-none w-12 h-12 rounded-lg bg-gradient-to-br ${d.color} grid place-items-center text-white`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{d.title}</h4>
                      <div className="text-sm text-slate-600">{d.subtitle}</div>
                      <p className="mt-3 text-sm text-slate-700">{d.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </article>

          {/* Visa Types */}
          <article className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow border border-white/30">
            <h3 className="text-lg font-semibold">Types of Investor Visas</h3>
            <div className="mt-4 grid gap-2">
              {types.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-none" />
                  <span className="text-sm text-slate-800">{t}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Why Choose */}
          <article className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow border border-white/30">
            <h3 className="text-lg font-semibold">
              Why Choose Business / Investment Visas
            </h3>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-slate-700">
              <li>
                Easy and definite route to Permanent Residency and Citizenship.
              </li>
              <li>
                International mobility — access to markets and visa-free travel.
              </li>
              <li>
                Family benefits — healthcare, education, safe environment.
              </li>
              <li>Investing in stable economies builds a secure future.</li>
              <li>Access to overseas skilled workers and resources.</li>
              <li>Signals serious business intent and builds credibility.</li>
            </ol>
          </article>
        </section>

        {/* Right Column (Aside) */}
        <aside className="space-y-6">
          {/* Eligibility */}
          <article className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow border border-white/30">
            <h3 className="text-lg font-semibold">Eligibility Requirements</h3>
            <ul className="mt-4 space-y-4">
              {eligibility.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-none" />
                  <div>
                    <p className="text-sm text-slate-700">{e.text}</p>
                    {e.detail && (
                      <p className="text-xs text-slate-500 mt-1">{e.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Call to Action */}
          <article className="bg-gradient-to-r from-rose-500 to-orange-400 text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-lg font-semibold">Ready to start?</h4>
            <p className="mt-2 text-sm opacity-90">
              Book a free consultation with our visa specialists — we'll
              evaluate your options and recommend the fastest, safest pathway.
            </p>
            <div className="mt-4 grid gap-2">
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                <Mail className="w-4 h-4" />
                Request Callback
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Briefcase className="w-4 h-4" />
                Start Application
              </button>
            </div>
          </article>

          {/* Timelines */}
          <article className="bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow border border-white/30 text-sm">
            <div className="font-medium">Estimated timelines</div>
            <p className="mt-2 text-slate-600">
              Nomination/endorsement, interviews and processing may add weeks —
              timelines depend on the program and country.
            </p>
          </article>
        </aside>
      </main>
    </section>
  );
}
