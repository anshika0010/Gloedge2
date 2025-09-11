'use client';
import React from 'react';
import { CheckCircle, FileText, Award, Send } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Check Eligibility & Self Assessment",
      icon: <CheckCircle className="w-8 h-8" />,
      details: [
        "Review qualifying requirements of country specific business and investment pathway",
        "Use points calculators where applicable (Australia or Canada PNP)",
        "Check if your business idea or funds qualify for the program"
      ]
    },
    {
      id: 2,
      title: "Accumulate Necessary Documents",
      icon: <FileText className="w-8 h-8" />,
      details: [
        "Birth certificate, marriage certificate, proof of funds and valid passport",
        "Source of funds evidence and business ownership proof", 
        "Bank statements, tax returns, and financial documents",
        "Police clearance certificates and medical examination results",
        "Business plans where required"
      ]
    },
    {
      id: 3,
      title: "Secure Nomination or Endorsement",
      icon: <Award className="w-8 h-8" />,
      details: [
        "Canada Start-up Visa: Letter of Support from designated incubator/VC",
        "Provincial Nominee Programs: Apply to province business stream",
        "Australia Business Innovation: Seek state/territory nomination",
        "UK Global Talent: Get endorsement from approved body"
      ]
    },
    {
      id: 4,
      title: "Submit Application Online",
      icon: <Send className="w-8 h-8" />,
      details: [
        "Expert support from GloEdge Visas ensures perfect submission",
        "Complete application form filling and document upload",
        "Reminder system for missing documents",
        "Biometric data provision and interview preparation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-orange-900 mb-3">
            Business Visa Application Process
          </h1>
          <p className="text-orange-700">
            Follow these four steps to successfully apply for your business visa
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-md p-6 border border-orange-100"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full text-xl font-bold mb-4 mx-auto">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex justify-center text-orange-500 mb-4">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>
              
              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto border border-orange-100">
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-4">
              Let GloEdge Visas guide you through the process
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;