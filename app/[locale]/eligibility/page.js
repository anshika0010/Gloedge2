import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import Eligibility from "@/components/eligibility/Eligibility";
import { EvaluationForm } from "@/components/eligibility/evaluation-form";
import FAQ from "@/components/eligibility/FAQ";
import WelcomeHeader from "@/components/eligibility/WelcomeHeader";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <WelcomeHeader />
        <EvaluationForm />
        <Eligibility />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default page;
