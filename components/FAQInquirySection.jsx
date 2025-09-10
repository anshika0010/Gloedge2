"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQInquirySection = () => {
  const [goal, setGoal] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState([]);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question:
        "What makes GloEdge Visas different from other immigration consultants?",
      answer:
        "At GloEdge, we bring a unique combination of 25+ years in immigration and 17+ years in global outsourcing and IT recruitment. This allows us to offer a holistic approach, from visa processing to job search assistance and business setup.",
    },
    {
      id: 2,
      question: "How long does the immigration process take?",
      answer:
        "The timeline varies depending on the country and visa category. A skilled migration visa can take anywhere from 6 to 18 months, while study visas are typically processed faster. We provide a personalized timeline during your initial consultation.",
    },
    {
      id: 3,
      question: "Can I apply for a visa on my own?",
      answer:
        "While it's possible to apply on your own, the immigration process is complex and constantly changing. A small mistake can lead to delays or even a refusal. Our expertise ensures your application is accurate, complete, and optimized for success.",
    },
    {
      id: 4,
      question: "What are the costs involved in the immigration process?",
      answer:
        "The costs include government application fees, medical exams, language tests, and our professional fees. We provide a transparent breakdown of all costs upfront, so there are no surprises.",
    },
    {
      id: 5,
      question: "Do you help with job placements?",
      answer:
        "Yes, our strong global network of recruiters and our background in IT recruitment allow us to provide job search assistance for our clients in select categories.",
    },
    {
      id: 6,
      question: "What is a Startup Visa, and how can I qualify?",
      answer:
        "A Startup Visa is designed for entrepreneurs with innovative business ideas. To qualify, you typically need a viable business plan, a letter of support from a designated organization (like an incubator or venture capital fund), and proof of funds. We specialize in helping entrepreneurs navigate this process.",
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Inquiry Form */}
        <section
          className="relative bg-cover bg-center rounded-2xl bg-no-repeat py-12 px-6"
          style={{
            backgroundImage:
              "url('https://st5.depositphotos.com/62628780/65651/i/450/depositphotos_656518412-stock-photo-team-startup-group-high-five.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#da010b] rounded-2xl bg-opacity-20"></div>

          <div className="relative max-w-xl mx-auto text-white">
            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Ready to Make the World Your Home?
              </h2>
              <p className="mt-3 text-base text-gray-200">
                Don&apos;t guess your chances. Get a clear, data-driven
                assessment from the experts. Fill out the form below for a free
                consultation.
              </p>
            </div>

            {/* Form */}
            <form className="bg-white text-gray-900 rounded-xl shadow-lg p-6 space-y-6">
              {/* Step 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Step 1: Tell Us About Yourself
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (with country code)"
                    className="w-full md:col-span-2 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Step 2: Immigration Goal
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    "Permanent Residency (PR) via Skilled Migration",
                    "Launch or Expand a Business (Startup/Entrepreneur Visa)",
                    "Citizenship or Residency by Investment",
                    "Study at a Top Global University (Study Visa)",
                    "Work Abroad with a Job Offer",
                    "Other / Not Sure Yet",
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="goal"
                        value={option}
                        onChange={(e) => setGoal(e.target.value)}
                        className="text-[#da010b]0 focus:ring-red-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Step 3: Preferred Country
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Canada",
                    "Australia",
                    "New Zealand",
                    "United Kingdom / Europe",
                    "USA",
                    "GCC (e.g., UAE)",
                  ].map((country) => (
                    <label key={country} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="country"
                        value={country}
                        className="text-[#da010b] focus:ring-red-500"
                      />
                      <span>{country}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Conditional Fields for PR */}
              {goal.includes("Permanent Residency") && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Extra Details for PR Applicants
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500">
                      <option value="">Highest Education</option>
                      <option value="phd">PhD</option>
                      <option value="masters">Master&apos;s</option>
                      <option value="bachelors">Bachelor&apos;s</option>
                      <option value="diploma">Diploma</option>
                      <option value="highschool">High School</option>
                    </select>

                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500">
                      <option value="">Work Experience</option>
                      <option value="1-2">1–2 Years</option>
                      <option value="3-5">3–5 Years</option>
                      <option value="5-8">5–8 Years</option>
                      <option value="8+">8+ Years</option>
                    </select>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center space-y-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-[#da010b] text-white font-semibold text-sm rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                >
                  YES, ASSESS MY PROFILE NOW!
                </button>
                <p className="text-xs text-gray-500">
                  Your information is confidential and only used for assessment.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Right Side - FAQs (Sticky) */}
        <div className="space-y-6 sticky top-20 self-start">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900 pr-4 text-sm">
                    {faq.question}
                  </span>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-red-600 flex-shrink-0" />
                  )}
                </button>

                {expandedFAQ === faq.id && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="bg-red-50 border border-red-200 p-4 mt-6 rounded-lg">
            <h4 className="text-base font-semibold text-gray-900 mb-1">
              Still have questions?
            </h4>
            <p className="text-gray-700 text-sm mb-3">
              Our immigration experts are here to help you.
            </p>
            <button className="bg-[#da010b] hover:bg-red-700 text-white font-semibold py-2 px-4 text-sm rounded">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQInquirySection;
