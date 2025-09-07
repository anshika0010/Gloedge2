
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import Heading from "@/components/common/Heading";
import CareerSection from "@/components/study/CareerSection";
import CoachingSection from "@/components/study/CoachingSection";
import Services from "@/components/study/Services";
import StudyAbroadSection from "@/components/study/StudyAbroadSection";
import StudyHeroSection from "@/components/study/StudyHeroSection";
import SuperSaverPackage from "@/components/study/SuperSaverPackage";
import TopUniversityPlacements from "@/components/study/TopUniversityPlacements";
import TestimonialSection from "@/components/TestimonialSection";
import React from "react";

const Study = () => {
  return (
    <>
    <Navbar/>
      <div className=" mx-4">
        <StudyHeroSection />
        <StudyAbroadSection />
        <div className="w-full bg-white">
          {/* Top Section */}
          <div className="max-w-5xl mx-auto text-center py-12 px-4">
            
            <Heading text={"Supporting students since 1999"} className={"flex justify-center text-5xl md:text-4xl font-bold text-gray-900"}/>
            <p className="mt-4 text-gray-900 max-w-2xl mx-auto">
              Y-Axis is one of the most trusted names in the education space. We
              have the skills, experience, and network to help students like you
              unlock their potential by gaining an admission to their dream
              university.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-6 font-medium text-gray-900">
              <button className="hover:text-yellow-600 flex items-center text-bold text-xl gap-1">
                Our values <span className="font-bold">+</span>
              </button>
              <button className="hover:text-yellow-600 flex items-center text-bold text-xl gap-1">
                Our methodology <span className="font-bold">+</span>
              </button>
              <button className="hover:text-yellow-600 flex items-center text-bold text-xl gap-1">
                Why choose Y-Axis <span className="font-bold">+</span>
              </button>
            </div>
          </div>
        </div>
        <Services />
        <CoachingSection />
        <SuperSaverPackage />
        <TopUniversityPlacements />
        <TestimonialSection />
        <CareerSection />
      </div>
      <Footer/>
    </>
  );
};

export default Study;