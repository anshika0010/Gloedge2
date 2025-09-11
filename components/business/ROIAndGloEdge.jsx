"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Home,
  Globe,
  ShieldCheck,
  Briefcase,
  FileText,
  CheckCircle,
  Star,
  Mail,
} from "lucide-react";

export default function ROIAndGloEdge() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">Return on Investment (ROI) & Benefits</h1>
        <p className="mt-3 text-slate-600 max-w-prose">Key returns and advantages from business and investment visas.</p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <article className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow border border-white/30">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-none" />
              <span className="text-slate-700">The major Return on Investment is permanent residency for you and your family</span>
            </li>

            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-sky-500 mt-1 flex-none" />
              <span className="text-slate-700">Free education till class 12, Universal free health coverage and insurance along with pension, disability and maternity perks.</span>
            </li>

            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-violet-500 mt-1 flex-none" />
              <span className="text-slate-700">Pathway to Citizenship</span>
            </li>

            <li className="flex items-start gap-3">
              <Home className="w-5 h-5 text-amber-500 mt-1 flex-none" />
              <span className="text-slate-700">Lifelong benefits because of permanent resident card</span>
            </li>

            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-600 mt-1 flex-none" />
              <span className="text-slate-700">Profits and dividends from your business</span>
            </li>

            <li className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-rose-500 mt-1 flex-none" />
              <span className="text-slate-700">With Real estate-based visas like Golden Visas of Portugal and Greece) you receive ROI through rental income and property appreciation.</span>
            </li>

            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-500 mt-1 flex-none" />
              <span className="text-slate-700">Opportunity to start or expand your business in a stable economy.</span>
            </li>

            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-yellow-500 mt-1 flex-none" />
              <span className="text-slate-700">Favorable tax regimes in countries like Dubai via their UAE Golden Visa</span>
            </li>

            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-slate-700 mt-1 flex-none" />
              <span className="text-slate-700">High and Quality Standard of living with top class education, healthcare, air and environment.</span>
            </li>

            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-sky-500 mt-1 flex-none" />
              <span className="text-slate-700">Majority of these passports visa free travel</span>
            </li>

            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-violet-500 mt-1 flex-none" />
              <span className="text-slate-700">Enhancement of global business reputation when you become a resident of a developed nation.</span>
            </li>
          </ul>
        </article>

        <aside className="space-y-4">
          <article className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow border border-white/30">
            <h3 className="text-lg font-semibold">How can GloEdge Help?</h3>

            <h4 className="mt-4 font-medium">End to End Application Support</h4>
            <p className="mt-2 text-slate-700">We at GloEdge Visas pride ourselves with document collection like financial records, tax papers, business proof, and police/medical clearances</p>
            <p className="mt-2 text-slate-700">Draft and review your business plan tailored to visa requirements.</p>
            <p className="mt-2 text-slate-700">Ensure compliance with immigration rules so your application is not rejected for minor errors.</p>

            <h4 className="mt-4 font-medium">World Class Professional Guidance</h4>
            <p className="mt-2 text-slate-700">Our team of expert professionals at GloEdge Visas, help you in choosing the right business visa by evaluating your profile, net worth and long term business goals. We match you with the best business visa pathway.</p>
            <p className="mt-2 text-slate-700">Not to forget we even provide a country wise comparison to help you invest or start business in a nation with maximum benefits and long term return on investment for you and your family.</p>

            <h4 className="mt-4 font-medium">Investment & Business Setup Assistance</h4>
            <p className="mt-2 text-slate-700">We create a bridge for you with the topmost designated venture capital firms or incubators for business visas like the Canada Start-up Visa.</p>
          </article>

          {/* <article className="bg-gradient-to-r from-rose-500 to-orange-400 text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-lg font-semibold">Why is GloEdge Visas your Best Choice for Business and Investment Visas?</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-none" />
                <span>Expertise: Immigration laws are complex and change often. We ensure you apply under the right stream and get your business visa at the earliest time possible.</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-none" />
                <span>Time-savers: All the complex paperwork is managed by our team of professionals, freeing you to focus on business.</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-none" />
                <span>Reduces Risk to Minimum : Even a slightest mistake can cost you an application delay or simply a refusal. Avoid costly mistakes or refusals with our specialised professionals ensuring no room for errors.</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                <Mail className="w-4 h-4 text-white" />
                Request Callback
              </button>
              <button className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Briefcase className="w-4 h-4 text-white" />
                Start Application
              </button>
            </div>
          </article> */}
        </aside>
      </motion.div>
    </section>
  );
}
