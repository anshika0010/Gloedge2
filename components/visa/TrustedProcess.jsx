import React from "react";
import image from "@/images/referal.png";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
const TrustedProcess = () => {
  const language = useLocale()
  const steps = [
    {
      number: "01",
      title: "Consult",
      desc: "Discuss your visa requirements with our experts to create a personalized plan.",
    },
    {
      number: "02",
      title: "Apply",
      desc: "Submit your flawless application with all necessary documents, guided by our team.",
    },
    {
      number: "03",
      title: "Succeed",
      desc: "Get approved smoothly and start your journey with confidence.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <p className="text-sm text-center font-semibold text-black p-6">Process overview</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          A Trusted Process,<br></br> Refined Over Time
        </h2>

        {/* 3 Step Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md shadow-orange-300 rounded-lg p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-orange-600">
                {step.number}
              </h3>
              <h4 className="mt-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h4>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Refer a Friend Section */}
        {/* Refer a Friend Section */}
        <div className="mt-16 py-8 grid grid-cols-1 md:grid-cols-2 bg-orange-100 rounded-lg overflow-hidden">
          {/* Left Content */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900">Refer a Friend</h3>
            <p className="mt-3 text-gray-700">
              Help others achieve their dreams while earning rewards for
              yourself. Get a cash back on every friend you refer.
            </p>
            <Link
            href={`/${language}/affiliate`} className="w-[fit-content] mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition">
              Explore Gloedge Referral Program →
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-auto h-auto md:h-auto pr-8">
            <Image
              src={image}
              alt="Refer a Friend"
              width={500}
              height={500}
              className="object-contain ml-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedProcess;
