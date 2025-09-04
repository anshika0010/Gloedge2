import React from "react";
import { ArrowRight } from "lucide-react";
const VisaProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Free initial consultation to assess your business goals and visa options.",
    },
    {
      step: "02",
      title: "Eligibility Check",
      description:
        "Comprehensive evaluation of your qualifications and investment capacity.",
    },
    {
      step: "03",
      title: "Documentation",
      description:
        "Professional preparation of all required documents and business plans.",
    },
    {
      step: "04",
      title: "Application",
      description:
        "Submit your application with ongoing support and status updates.",
    },
    {
      step: "05",
      title: "Approval",
      description:
        "Receive your visa and begin your international business journey.",
    },
  ];
  return (
    <div>
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Proven Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-blue-300 absolute top-8 -right-4 transform" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaProcess;
