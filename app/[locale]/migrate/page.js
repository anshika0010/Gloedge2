import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import FAQInquirySection from "@/components/FAQInquirySection";
import DidYouKnow from "@/components/migrate/DidYouKnow";
import EligibilityBanner from "@/components/migrate/EligibilityBanner";
import EvaluationSection from "@/components/migrate/EvaluationSection";
import HeroSection from "@/components/migrate/HeroSection";
import ImmigrationInfo from "@/components/migrate/ImmigrationInfo";
import ImmigrationInfoo from "@/components/migrate/ImmigrationInfoo";
import MigrateOpportunity from "@/components/migrate/MigrateOpportunity";
import MigrateProcess from "@/components/migrate/MigrateProcess";
import TestimonialSection from "@/components/TestimonialSection";
import React from "react";

const page = () => {
  return (
<>
<Navbar/>
    <div className="mx-4">
      <HeroSection />
      <MigrateOpportunity/>
      <EligibilityBanner/>
      <MigrateProcess />
      {/* <EvaluationSection /> */}
      <DidYouKnow />
      <ImmigrationInfo/>
      <ImmigrationInfoo/>
      <TestimonialSection/>
      <FAQInquirySection/>
    </div>
    <Footer/>
    </>
  );
};

export default page;
