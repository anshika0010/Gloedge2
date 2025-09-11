"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  UserCheck,
  Send,
  Globe,
  ShieldCheck,
  Calendar,
  Clock,
  Mail,
} from "lucide-react";

const steps = [
  {
    title: "Check Eligibility & Self Assessment",
    icon: Globe,
    bullets: [
      "Review country-specific requirements (investment, net worth, language, age)",
      "Use points calculators (e.g., Australia, Canada PNP)",
      "Validate business idea and source of funds",
    ],
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Collect Necessary Documents",
    icon: FileText,
    bullets: [
      "Birth, marriage certificates, passport",
      "Proof of funds (bank statements, tax returns, CA/auditor reports)",
      "Police clearance, medicals, invitation/sponsorship",
    ],
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "Secure Nomination / Endorsement",
    icon: UserCheck,
    bullets: [
      "Canada Start-up: Letter of Support from designated body",
      "PNP: Apply to province business stream",
      "Australia BI: Seek state/territory nomination",
    ],
    color: "from-violet-400 to-indigo-500",
  },
  {
    title: "Submit Application Online",
    icon: Send,
    bullets: [
      "We help fill forms, review and upload your documents",
      "Provide biometrics (photo, fingerprints) and attend interviews",
      "Pre-interview preparation for business and investment questions",
    ],
    color: "from-orange-400 to-rose-500",
  },
];

const Card = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/30"
      aria-labelledby={`step-${index}-title`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-none w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} grid place-items-center text-white shadow-lg`}
        >
          <Icon className="w-7 h-7" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 id={`step-${index}-title`} className="text-lg font-semibold">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-slate-700/90">{`Step ${
            index + 1
          }`}</p>
          <ul className="mt-4 grid gap-2">
            {step.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-none" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute -right-3 -top-3">
        <div className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium shadow">{`0${
          index + 1
        }`}</div>
      </div>
    </motion.article>
  );
};

export default function StepByStepVisaProcess() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Step-by-step Application Process
          </h1>
          <p className="mt-2 text-slate-600 max-w-xl">
            Clear, guided steps for business and investment visa pathways —
            attractive, mobile-friendly UI to present to clients or embed in
            your product site.
          </p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {steps.map((s, i) => (
            <Card key={i} step={s} index={i} />
          ))}
        </div>

        <aside className="rounded-2xl p-6 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-md shadow-inner border border-white/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold">What we need from you</h2>
            <p className="mt-2 text-sm text-slate-600">
              Provide accurate documents so we can prepare, review and submit on
              your behalf — this speeds up approval and reduces revision cycles.
            </p>

            <ul className="mt-4 grid gap-3">
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 mt-1 text-slate-700/90" />
                <div>
                  <div className="font-medium">Core documents</div>
                  <div className="text-sm text-slate-600">
                    Passport, birth, marriage, police clearance
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 mt-1 text-slate-700/90" />
                <div>
                  <div className="font-medium">Financial evidence</div>
                  <div className="text-sm text-slate-600">
                    Bank statements, tax returns, CA/auditor reports
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-slate-700/90" />
                <div>
                  <div className="font-medium">Timelines</div>
                  <div className="text-sm text-slate-600">
                    Nomination, endorsement and interviews may add weeks
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 border-t pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">
                    Estimated support
                  </div>
                  <div className="text-lg font-semibold">
                    Dedicated visa officer
                  </div>
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-white/80 text-slate-700">
                  Included
                </div>
              </div>

              <button className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-orange-400 text-white px-4 py-2 rounded-lg shadow">
                <Mail className="w-4 h-4" />
                Start Your Application
              </button>
            </div>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}
