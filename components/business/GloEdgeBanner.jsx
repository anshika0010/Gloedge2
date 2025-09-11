"use client";
import { CheckCircle, Mail, Briefcase } from "lucide-react";
import visaapplication from "../../images/visaapplication.jpg";
import Image from "next/image";
export default function GloEdgeBanner() {
  return (
    <section className="relative bg-gradient-to-r from-rose-500 to-orange-400 text-white rounded-2xl shadow-lg overflow-hidden my-12">
      <div className="grid md:grid-cols-2 items-center">
        {/* Left Side - Image */}
        <div className="h-64 md:h-full">
          <Image
            src={visaapplication}
            width={0}
            hight={0}
            alt="GloEdge Visas"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="p-8 md:p-12">
          <h4 className="text-2xl font-bold">
            Why is GloEdge Visas your Best Choice for Business and Investment
            Visas?
          </h4>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-none" />
              <span>
                <strong>Expertise:</strong> Immigration laws are complex and
                change often. We ensure you apply under the right stream and get
                your business visa at the earliest time possible.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-none" />
              <span>
                <strong>Time-savers:</strong> All the complex paperwork is
                managed by our team of professionals, freeing you to focus on
                business.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-1 flex-none" />
              <span>
                <strong>Reduces Risk to Minimum:</strong> Even a slightest
                mistake can cause delays or refusals. Avoid costly mistakes with
                our specialised professionals ensuring no room for errors.
              </span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-lg hover:bg-white/20 transition">
              <Mail className="w-4 h-4 text-white" />
              Request Callback
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-lg hover:bg-white/30 transition">
              <Briefcase className="w-4 h-4 text-white" />
              Start Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
