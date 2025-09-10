"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    message: "",
  });

  const faqs = [
    {
      id: 1,
      question:
        "What is a points-based immigration system, and which countries use it?",
      answer:
        "A points-based system evaluates immigration applicants based on factors like age, education, work experience, and language skills. Countries like Canada, Australia, New Zealand, and the UK use this system to prioritize skilled migrants who meet economic needs.",
    },
    {
      id: 2,
      question: "How can I improve my eligibility for immigration?",
      answer:
        "To boost eligibility, enhance your language proficiency, gain relevant work experience, pursue higher education, or secure a job offer. Consulting our experts can help identify specific pathways and optimize your application.",
    },
    {
      id: 3,
      question:
        "What are the minimum points required for Canada’s Express Entry?",
      answer:
        "You need at least 67 points out of 100 on the CRS system to be eligible. Higher scores improve your chances of receiving an Invitation to Apply (ITA).",
    },
    {
      id: 4,
      question:
        "How many points do I need for Australia’s SkillSelect program?",
      answer:
        "A minimum of 65 points is required to submit an Expression of Interest (EOI). Higher scores increase your likelihood of receiving a visa invitation.",
    },
    {
      id: 5,
      question:
        "Do I need a job offer to be eligible for Australian skilled migration?",
      answer:
        "No, a job offer is not mandatory, but having one can add points to your SkillSelect EOI and improve your chances.",
    },
    {
      id: 6,
      question:
        "What are the eligibility requirements for a UK Skilled Worker visa?",
      answer:
        "You need 70 points including a job offer from an approved UK sponsor, a job at the required skill level, and English proficiency.",
    },
    {
      id: 7,
      question: "Is English proficiency mandatory for UK immigration?",
      answer:
        "Yes, you must demonstrate English proficiency at the required level (e.g., B1 CEFR) to earn points and meet criteria.",
    },
    {
      id: 8,
      question: "What are the eligibility criteria for a US H-1B visa?",
      answer:
        "You need a US job offer in a specialty occupation, a bachelor’s degree or equivalent, and a sponsoring employer. Annual caps apply.",
    },
    {
      id: 9,
      question: "Can I apply for a US Green Card without a job offer?",
      answer:
        "Yes, through pathways like the EB-2 National Interest Waiver or family-based sponsorship, if you meet specific criteria.",
    },
    {
      id: 10,
      question: "Is a job offer required for New Zealand skilled migration?",
      answer:
        "No, but it significantly boosts your points (50–70 additional) and improves your chances of selection.",
    },
    {
      id: 11,
      question: "What are the eligibility requirements for the EU Blue Card?",
      answer:
        "It requires a job offer in an EU country with a minimum salary, a recognized degree, and relevant professional experience.",
    },
    {
      id: 12,
      question:
        "Can I apply for permanent residency in Europe without living there first?",
      answer:
        "Most countries require prior residence (e.g., 5 years). Exceptions exist for certain investment-based residency programs.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Have Any Questions?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Get in touch with our immigration experts or browse through our
            frequently asked questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Inquiry Form */}
          <div className="bg-gray-50 rounded-2xl p-8 h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Free Consultation
              </h3>
              <p className="text-gray-600">
                Fill out the form below and our experts will get back to you
                within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Country</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="newzealand">New Zealand</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Type
                </label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select Visa Type</option>
                  <option value="pr">Permanent Residence</option>
                  <option value="study">Study Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="visit">Visit/Tourist Visa</option>
                  <option value="business">Business Visa</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your immigration goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 transition-colors duration-200"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right Side - FAQs */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>

            {/* Scrollable FAQ list */}
            <div className="flex-1 overflow-y-auto pr-2 max-h-[700px]">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </button>

                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4 bg-gray-50">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Help */}
            <div className="bg-red-50 border border-red-200 p-6 mt-6 flex-shrink-0">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Still have questions?
              </h4>
              <p className="text-gray-700 mb-4">
                Our immigration experts are here to help you with personalized
                guidance.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 transition-colors duration-200">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
