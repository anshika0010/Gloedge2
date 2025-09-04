import React from "react";
import { DollarSign, Building, Heart, Network } from "lucide-react";
const IndustriesExpert = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Industry Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technology</h3>
              <p className="text-gray-600 text-sm">
                Startups, SaaS, AI, and emerging tech companies expanding
                globally
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Finance</h3>
              <p className="text-gray-600 text-sm">
                Investment firms, fintech, and financial services expansion
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Medical devices, pharmaceuticals, and healthcare innovation
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Network className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Industrial, automotive, and sustainable manufacturing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesExpert;
