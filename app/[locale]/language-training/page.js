import CoachingBanner from "@/components/coaching/CoachingBanner";
import CoachingCenters from "@/components/coaching/CoachingCenters";
import CoachingInfo from "@/components/coaching/CoachingInfo";
import CoachingPartner from "@/components/coaching/CoachingPartner";
import HeroSection from "@/components/coaching/HeroSection";
import LearningSolutions from "@/components/coaching/LearningSolutions";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import Faq from "@/components/Detailpage/Faq";
import FAQInquirySection from "@/components/FAQInquirySection";
import TestimonialSection from "@/components/TestimonialSection";
import React from "react";

const page = () => {
  return (
    <>
    <Navbar/>
        <div className="mx-4">
      <HeroSection />
      <CoachingBanner />
      <LearningSolutions />
      <CoachingPartner />
      <CoachingInfo />
      <CoachingCenters />
      <TestimonialSection />
      {/* <Faq /> */}
       <FAQInquirySection/>
    </div>
    <Footer/>
    </>
  );
};

export default page;
