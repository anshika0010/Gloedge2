import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🧠",
      text: "Smarter Visa Applications with Human Expertise + AI Accuracy",
    },
    {
      icon: "♟️",
      text: "Proven Visa Strategies for the World's toughest Approvals",
    },
    {
      icon: "👨‍🔬",
      text: "Visa Workflow backed by 25 years of experience",
    },
    {
      icon: "💻",
      text: "Accurate guidance backed by real time updates",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Small Heading */}
        <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
          Why Choose Us
        </p>

        {/* Main Heading */}
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Your Complete Visa Solution for <br className="hidden md:block" /> Top
          Destinations.
        </h2>

        {/* Sub Text */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From expert consultation and application assistance to interview prep
          and ongoing support, Y-Axis ensures a smooth and stress-free visa
          journey.
        </p>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-8 border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <p className="text-gray-800 text-base">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-[#f55f3e] text-white font-semibold rounded hover:bg-[#e14c2e] transition">
            Speak to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
