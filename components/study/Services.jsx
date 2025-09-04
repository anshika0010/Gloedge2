import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";
import expertImg from "@/images/banner-expert.jpg";
import bannerCourseImg from "@/images/banner-course-selection.jpg"
import purposeImg from "@/images/banner-purpose.jpg";
import coachingImg from "@/images/banner-coaching.jpg";
import recommendationImg from "@/images/banner-recommendation.jpg";

const services = [
  {
    title: "Admission Services",
    description: "Make your admission application stand out",
    points: [
      "Customized applications",
      "Deadline management",
      "Phased preparation",
    ],
    img: expertImg,
  },
  {
    title: "Admission Services",
    description: "Make your admission application stand out",
    points: [
      "Customized applications",
      "Deadline management",
      "Phased preparation",
    ],
    img: purposeImg,
  },
  {
    title: "Course selection services",
    description: "The right course will lead you to the right path",
    points: [
      "Student driven results",
      "Expert assisted search",
      "Unbiased recommendations",
    ],
    img: bannerCourseImg,
  },
  {
    title: "Student visa services",
    description: "Get your visa right the first time",
    points: [
      "Visa counseling & mock interviews",
      "Complete documentation assistance",
      "Interview slot booking",
    ],
    img: coachingImg,
  },
  {
    title: "Statement of Purpose",
    description: "SOPs crafted to create a compelling narrative",
    points: [
      "Clear and focused",
      "Personalized narratives",
      "Crafted & reviewed by experts",
    ],
    img: purposeImg,
  },
  {
    title: "Letters of Recommendation",
    description: "Powerful recommendations that elevate your application",
    points: [
      "Personalised to your strengths ",
      "Advice on the best sources of referees",
      "Crafted & reviewed by experts",
    ],
    img: recommendationImg,
  },
];

const Services = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto space-y-10 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 border border-gray-300 rounded-sm overflow-hidden shadow-sm"
          >
            {/* Conditional Layout */}
            {index % 2 === 1 ? (
              <>
                {/* Image Left */}
                <div className="h-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Right */}
                <div className="relative p-8 flex flex-col justify-center">
                  {/* Always inside content left side middle */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-20 bg-red-600"></div>
                  <Heading text={service.title} className={"text-2xl md:text-3xl font-bold text-gray-900"}/>
                  <p className="mt-2 text-gray-700">{service.description}</p>

                  <ul className="mt-5 space-y-2 text-gray-800">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 flex items-center gap-2 w-fit shadow-md">
                    Chat with us <span className="text-lg">→</span>
                    <span className="absolute right-0 top-0 h-full w-1 bg-red-600"></span>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Content Left */}
                <div className="relative p-8 flex flex-col justify-center order-2 md:order-1">
                  {/* Always inside content left side middle */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-20 bg-red-600"></div>
                  <Heading text={service.title} className="text-2xl md:text-3xl font-bold text-gray-900"/>
                  <p className="mt-2 text-gray-700">{service.description}</p>

                  <ul className="mt-5 space-y-2 text-gray-800">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-4 h-[2px] bg-red-600 mt-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 flex items-center gap-2 w-fit shadow-md">
                    Chat with us <span className="text-lg">→</span>
                    <span className="absolute right-0 top-0 h-full w-1 bg-red-600"></span>
                  </button>
                </div>

                {/* Image Right */}
                <div className="h-full order-1 md:order-2">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;