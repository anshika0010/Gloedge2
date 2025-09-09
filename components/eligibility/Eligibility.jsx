"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, FileCheck2, AlertTriangle } from "lucide-react";
import visa2 from "../../images/visa2.jpg";

export default function Eligibility() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-8xl mx-auto space-y-16">
        {/* Section 1 - Why an Eligibility Evaluation Matters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why an Eligibility Evaluation Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eligibility checks help you assess whether your profile qualifies
            for migration, saving both time and effort before applying. Many
            countries—such as Australia, Canada, the UK, and Germany—employ
            points-based systems, where your age, education, work experience,
            language skills, and more are scored. Understanding your eligibility
            early helps you make informed decisions.
          </p>
        </motion.div>

        {/* Section 2 - Why Use the Tool */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 hover:shadow-2xl transition duration-300"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="text-red-600 w-6 h-6" /> Why Use the GloEdge
              Eligibility Tool?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span> Instant
                Results – Get your eligibility check in minutes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>{" "}
                Country-Specific Assessment – Tailored checks for the UK,
                Canada, Australia, Germany & more
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span> Transparent
                Guidance – See what’s working for you and what needs improvement
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span> Expert Support
                – Connect with seasoned immigration advisors for a detailed
                action plan
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={visa2}
              alt="Eligibility Tool"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              width={400} // set appropriate width
              height={300} // set appropriate height
            />
          </div>
        </motion.div>

        {/* Section 3 - What You’ll Get */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Straightforward Result",
              desc: "Yes, you qualify / No, you don’t qualify",
              icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
            },
            {
              title: "If You Qualify",
              desc: "Guidance on application steps, documents, and timelines",
              icon: <FileCheck2 className="w-10 h-10 text-blue-600" />,
            },
            {
              title: "If You Don’t Qualify",
              desc: "Suggestions to improve (language test, more work years, or alternative visa options)",
              icon: <AlertTriangle className="w-10 h-10 text-yellow-600" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Section 4 - Why an Eligibility Check Matters */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-6">
            Why an Eligibility Check Matters
          </h3>
          <ul className="space-y-3 text-base">
            <li>✔ Filtering whether you meet the minimum requirements</li>
            <li>✔ Preventing rejected applications</li>
            <li>✔ Helping you focus only on realistic visa options</li>
            <li>✔ Giving you a clear direction before you invest further</li>
          </ul>
        </motion.div>

        {/* Section 5 - Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md"
        >
          <h4 className="text-lg font-semibold text-yellow-800 mb-2">
            ⚠️ Disclaimer
          </h4>
          <p className="text-yellow-700">
            This tool provides a basic qualification check based on the
            information you share. Final results depend on official immigration
            authorities. For an in-depth assessment, consult our licensed visa
            experts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
