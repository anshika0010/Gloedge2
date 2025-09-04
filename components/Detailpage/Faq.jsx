"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the best countries for engineers to work abroad?",
      answer:
        "Some of the top countries for engineers include Germany, Canada, Australia, the United States, and the United Kingdom due to strong demand, competitive salaries, and high living standards.",
    },
    {
      question: "Do I need IELTS to work abroad?",
      answer:
        "Yes, in most cases IELTS or another English proficiency test is required for visas, work permits, or immigration purposes.",
    },
    {
      question: "How long does it take to process a work visa?",
      answer:
        "Work visa processing time varies by country but typically takes between 2 to 6 months.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
            >
              <span className="font-semibold text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-700" />
              ) : (
                <Plus className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
