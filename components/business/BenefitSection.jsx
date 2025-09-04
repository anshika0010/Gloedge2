import { Globe, DollarSign, Building, Heart, Network } from "lucide-react";
import React from "react";

const BenefitSection = () => {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Expand Markets",
      description: "Access new international markets and customer bases",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Tax Advantages",
      description: "Optimize your tax structure with international planning",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Residency Rights",
      description: "Secure long-term residency and potential citizenship",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family Relocation",
      description: "Bring your family to live and study in your chosen country",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Global Networking",
      description: "Connect with international business communities",
    },
  ];
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
