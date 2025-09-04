import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Apply for Your Business Visa Today
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Don't let complex immigration processes hold back your business
          expansion. Start your journey to global success today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Schedule Free Consultation
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
            Download Visa Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
