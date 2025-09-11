import HeroSection from "@/components/visa/HeroSection";
import VisaForm from "@/components/visa/VisaForm";
import WhyChooseUs from "@/components/visa/WhyChooseUs";
// import VisaExpertServices from "@/components/visa/ExpertVisaServices";
import React from "react";
import ErrorFreeVisas from "@/components/visa/ErrorFreeVisas";
// import TrustedProcess from "@/components/visa/TrustedProcess";
import VisaCategory from "@/components/visa/VisaCategory";
import BigVisaSection from "@/components/visa/BigVisaSection";
import Navbar from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// import CardSection from "@/components/CardSection";
import StepByStepVisaProcess from "@/components/business/StepByStepVisaProcess";
import InvestorVisaOverview from "@/components/business/InvestorVisaOverview";
import ROIAndGloEdge from "@/components/business/ROIAndGloEdge";
import BusinessInvestorVisas from "@/components/business/BusinessInvestorVisas";
import Steps from "@/components/business/Steps";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-4">
        <HeroSection />
        {/* <WhyChooseUs /> */}
        <BusinessInvestorVisas />
        <Steps/>
        <InvestorVisaOverview />
        {/* <StepByStepVisaProcess /> */}
        <ROIAndGloEdge />
        <BigVisaSection />
        <VisaCategory />

        {/* <TrustedProcess /> */}
        {/* <VisaExpertServices /> */}
        <ErrorFreeVisas />
        <VisaForm />
      </div>
      <Footer />
    </>
  );
};

export default page;
