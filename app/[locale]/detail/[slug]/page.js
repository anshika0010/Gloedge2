import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import CareerSection from "@/components/Detailpage/CareerSection";
import EngineeringJobsAbroad from "@/components/Detailpage/EngineeringJobsAbroad";
import Faq from "@/components/Detailpage/Faq";
import VisaForm from "@/components/Detailpage/HeroSection";
import VisaAbroadPage from "@/components/Detailpage/VisaAbroadPage";
import WhyChoose from "@/components/Detailpage/WhyCoose";
import React from "react";

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-37">
      <VisaForm />
      <CareerSection />
      <EngineeringJobsAbroad />
      <VisaAbroadPage />
      <Faq />
      <WhyChoose />
    </div>
    <Footer/></>
  );
};

export default page;
