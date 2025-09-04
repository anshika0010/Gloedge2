import React from "react";
import {
  FaRegFileAlt,
  FaUniversity,
  FaGlobe,
  FaComments,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUniversity size={40} className="text-[#e95420]" />,
    title: "Visa Consultation",
    desc: "Expert guidance to help you choose the right visa and ensure a smooth application process.",
  },
  {
    icon: <FaRegFileAlt size={40} className="text-[#e95420]" />,
    title: "Visa Review",
    desc: "Ensure all your documents are accurate and complete to avoid delays and rejections.",
  },
  {
    icon: <FaGlobe size={40} className="text-[#e95420]" />,
    title: "Application Assistance",
    desc: "Step-by-step support to complete and submit your application with precision and confidence.",
  },
  {
    icon: <FaComments size={40} className="text-[#e95420]" />,
    title: "Interview Preparation",
    desc: "Prepare for visa interviews with tailored tips and mock sessions to boost your confidence.",
  },
  {
    icon: <FaCalendarAlt size={40} className="text-[#e95420]" />,
    title: "Submission Support",
    desc: "Stay informed and supported throughout the waiting process, with updates and advice if needed.",
  },
];

const ExpertVisaServices = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase">
            Our Services
          </h4>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Expert Visa Services <br /> for a Smooth Journey
          </h2>
          <button className="mt-6 bg-[#e95420] text-white px-6 py-3 rounded font-semibold hover:bg-[#d64615] transition">
            View Packages →
          </button>
        </div>

        {/* RIGHT GRID OF SERVICES */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-lg transition bg-white"
            >
              <div className="flex items-center justify-center w-16 h-16 border rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
              <a
                href="#"
                className="mt-3 inline-block text-[#e95420] font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVisaServices;
