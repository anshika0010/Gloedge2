import React from "react";
import { FaExclamationCircle, FaCalculator, FaMoneyBillWave } from "react-icons/fa";

const ErrorFreeVisas = () => {
  const cards = [
    {
      icon: <FaMoneyBillWave size={28} />,
      title: "Avoid Costly Mistakes",
      desc: "Incorrect applications can lead to wasted time, money, and missed opportunities. Y-Axis ensures your visa application is precise, so you don't face unnecessary delays or costs.",
    },
    {
      icon: <FaCalculator size={28} />,
      title: "Skip the Hassle of Rejections",
      desc: "Rejections and appeals can be challenging, but with our expert guidance, we help you avoid common pitfalls, ensuring a seamless experience from start to finish.",
    },
    {
      icon: <FaExclamationCircle size={28} />,
      title: "Prevent First-Time Mistakes",
      desc: "With Y-Axis, you'll get it right from the start, minimizing the risk of errors and ensuring a smoother visa approval process.",
    },
  ];

  const stats = [
    { number: "1M+", label: "Applicants" },
    { number: "10M+", label: "Counselled" },
    { number: "50+", label: "Offices" },
    { number: "1500+", label: "Visa Experts" },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h4 className="text-sm font-semibold text-gray-600 flex justify-center items-center gap-2 uppercase">
          <span role="img" aria-label="doc">📑</span> ERROR FREE VISAS
        </h4>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          Ensure spotless visas — Do it right the first time
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#e95420] text-white rounded-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 bg-red-100 rounded-lg py-6 mx-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErrorFreeVisas;
