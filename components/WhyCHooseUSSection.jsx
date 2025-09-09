import React from "react";
import { Users, Award, Calendar, Building } from "lucide-react";
import whychoose from "@/images/portrait-pretty-woman-looking-camera.png";
import Image from "next/image";
import Heading from "./common/Heading";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <Heading
                text={"You are rightly choosing US!"}
                className={"py-4 text-4xl font-bold text-gray-900 mb-6"}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Years of Expertise */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Calendar className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">25 Years</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    of legacy Expertise
                  </p>
                </div>
              </div>

              {/* Successful Approvals */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">50+ years</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    Visas-All category
                  </p>
                </div>
              </div>

              {/* Global Partners */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    Presence Accross the globe
                  </p>
                </div>
              </div>

              {/* Visa Programs */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Building className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">1000s</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    of Successful PR & Visa Approvals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={whychoose}
              alt="Professional woman in yellow sweater"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
