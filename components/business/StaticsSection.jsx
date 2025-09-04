import React from "react";
import { Globe, Shield, Users, CheckCircle } from "lucide-react";
const StaticsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Track Record
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-yellow-400 mb-4">
                <CheckCircle className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-green-400 mb-4">
                <Users className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                2,500+
              </div>
              <div className="text-blue-200">Clients Served</div>
            </div>
          </div>
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-blue-400 mb-4">
                <Globe className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-blue-200">Countries</div>
            </div>
          </div>
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-purple-400 mb-4">
                <Shield className="w-12 h-12 mx-auto" />
              </div>
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticsSection;
