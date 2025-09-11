"use client";
import React from "react";
import { CheckCircle, FileText, Award, Send } from "lucide-react";

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Check your Eligibility and Get a Self Assessment Done",
      icon: <CheckCircle className="w-8 h-8" />,
      details: [
        " Review the qualifying requirement of a country specific business and investment pathway such as investment amount, net worth, language, age, etc..",
        "Use points calculators where applicable (Australia or Canada PNP)",
        " Check if your business idea or funds qualify for the business program or pathway you are applying for.",
      ],
    },
    {
      id: 2,
      title: "Accumulate all the Necessary Documents before Submission",
      icon: <FileText className="w-8 h-8" />,
      details: [
        "Birth certificate, marriage certificate, proof of funds and valid passport",
        "Source of funds evidence such as auditor/CA reports, or proof of ownership of business.",
        "Bank statements, tax returns, or other financial documents demonstrating you have sufficient funds to cover your expenses during the trip",
        "Police clearance certificates and medical examination results",
        "Letter of invitation or sponsorship from the host country's company",
        "Draft or prepare business plans where it is needed.",
      ],
    },
    {
      id: 3,
      title: " If Applicable, Secure a Nomination or Endorsement",
      icon: <Award className="w-8 h-8" />,
      details: [
        " For Canada Start-up Visa obtain a Letter of Support from a designated incubator,Venture Capital or Angel investor.",
        " For Provincial Nominee Programs (PNP) you need to apply to the province business stream for nomination.",
        " For an Australia Business Innovation visa seek the state/territory nomination you are applying to.",
        " For UK Global Talent or Scale-Up get an endorsement from an approved body or employer.",
      ],
    },
    {
      id: 4,
      title: "Submit Application Online",
      icon: <Send className="w-8 h-8" />,
      details: [
        "With the expert support and guidance of GloEdge Visas, your submission is perfect and complete, which ensures your invitation to apply a sureshot success.",
        " At GloEdgem we fill out all the details of the application form in a precise manner and upload all the documents submitted by you. In case you have left any documents our visa officers ensure to remind you to submit them at the earliest.",
        " All you need to do is provide your biometrics like photographs and fingerprints.",
        "You are required to attend interviews. We prepare you in advance with all the possible interview questions they can ask about your business plan, investment intent, or background.",
      ],
    },
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
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start"
                  >
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
