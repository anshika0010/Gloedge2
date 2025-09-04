import React from "react";

const ClientTestimonial = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="ml-4">
                <h4 className="font-bold">John Davidson</h4>
                <p className="text-sm text-gray-500">
                  CEO, Davidson Enterprises
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The team made our Australian Business Innovation visa application
              seamless. Their expertise saved us months of delays and potential
              rejections."
            </p>
            <div className="flex text-yellow-500 mt-4">{"★".repeat(5)}</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                AL
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Anna Lopez</h4>
                <p className="text-sm text-gray-500">
                  Founder, GreenTech Solutions
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Outstanding service for our German residence permit. They handled
              everything from business plan review to final approval. Highly
              recommended!"
            </p>
            <div className="flex text-yellow-500 mt-4">{"★".repeat(5)}</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                RK
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Raj Kumar</h4>
                <p className="text-sm text-gray-500">
                  Director, Kumar Industries
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Professional, reliable, and results-driven. They secured our UK
              Tier 1 visa when other consultants said it wasn't possible.
              Exceptional service!"
            </p>
            <div className="flex text-yellow-500 mt-4">{"★".repeat(5)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
