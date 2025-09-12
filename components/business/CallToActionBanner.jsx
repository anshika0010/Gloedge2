"use client";

import { Mail, Briefcase } from "lucide-react";

export default function CallToActionBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white py-12 px-6 rounded-2xl shadow-lg overflow-hidden">
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Ready to start?</h2>
        <p className="mt-4 text-lg opacity-90">
          Book a free consultation with our visa specialists — we'll evaluate
          your options and recommend the fastest, safest pathway.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-lg hover:bg-white/20 transition">
            <Mail className="w-5 h-5" />
            Request Callback
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-white/20 px-6 py-3 rounded-lg text-lg hover:bg-white/30 transition">
            <Briefcase className="w-5 h-5" />
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
}
