import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // For arrow icon

// Images
import businessImg from "@/images/business-visa.png";
import workImg from "@/images/working-visa.png";
import studentImg from "@/images/s-visa.png";
import touristImg from "@/images/t-visa.png";

const VisaCategory = () => {
  const visas = [
    {
      title: "Business Visa",
      desc: "Expand your business globally with the right visa to connect, collaborate, and thrive.",
      color: "bg-purple-700",
      img: businessImg,
    },
    {
      title: "Work Visa",
      desc: "Unlock new career opportunities abroad with our expert guidance on obtaining a working visa.",
      color: "bg-cyan-600",
      img: workImg,
    },
    {
      title: "Student Visa",
      desc: "Start your educational journey in top institutions worldwide with a student visa designed for success.",
      color: "bg-yellow-500",
      img: studentImg,
    },
    {
      title: "Tourist Visa",
      desc: "Discover the world with ease—get the right travel visa to explore your dream destinations.",
      color: "bg-orange-500",
      img: touristImg,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <p className="text-sm text-gray-500 font-semibold text-center uppercase tracking-wide">
          Visa Category
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mt-2">
          Discover the Right Visa for <br /> Your Journey
        </h2>

        {/* Grid of Visa Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {visas.map((visa, i) => (
            <div
              key={i}
              className={`${visa.color} rounded-lg p-6 text-white flex flex-col md:flex-row items-center gap-6 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-40 md:h-48 rounded-md overflow-hidden">
                <Image
                  src={visa.img}
                  alt={visa.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold">{visa.title}</h3>
                <p className="mt-2 text-sm text-white/90">{visa.desc}</p>

                {/* Button */}
                <button className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-md border border-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCategory;
