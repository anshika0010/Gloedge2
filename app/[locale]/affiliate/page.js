import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import HeroSection from "@/components/refer/HeroSection";
import ReferralBenefits from "@/components/refer/ReferralBenefits";
import ReferralNotes from "@/components/refer/ReferralNotes";
import ReferralReward from "@/components/refer/ReferralReward";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-b from-red-50 via-white to-red-100">
        <HeroSection />
        {/* <ReferralReward /> */}
        <ReferralBenefits />
        {/* <ReferralNotes /> */}
      </div>
      <Footer />
    </>
  );
};

export default page;
