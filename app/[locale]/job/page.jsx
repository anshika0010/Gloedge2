import React from "react";
import WorkOpportunity from "@/components/job/WorkOpportunity";
import WorkIn from "@/components/job/WorkIn";
import WorkVisaFees from "@/components/job/WorkVisaFees";
import VisaForm from "@/components/job/VisaForm";
// import FAQ from "../../components/work/FAQ";
import TestimonialSection from "@/components/TestimonialSection";
import CareerChangePage from "@/components/job/CareerChange";
import WorkPermitVisaPage from "@/components/common/WorkPermitVisa";
import JobSearchPage from "@/components/job/JobSearchPage";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-35 max-w-7xl mx-auto">
      <VisaForm />
      <WorkOpportunity />
      <div className="mx-auto bg-[#009bad] px-6 py-12 mb-6 mt-4">
        <h3 className="text-center text-4xl font-bold text-white ">
          What Are You Worth
        </h3>
        <h1 className="text-center text-xl font-semibold py-4 text-white m-3">
          Choose desired profession and find average salary range in different
          countries.
        </h1>
        <div className="flex flex-col md:flex-row gap-7 justify-center items-center mb-4">
          <select className="w-full md:w-1/3 border border-gray-300 bg-white p-3 px-6  rounded focus:outline-none">
            <option> Job Tittle</option>
            <option>USA</option>
            <option>Germany</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>UK</option>
            <option>Dubai</option>
          </select>
          <select className="w-full md:w-1/3 border border-gray-300 bg-white p-3 px-6 rounded focus:outline-none">
            <option>Job Location</option>
            <option>USA</option>
            <option>Germany</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>UK</option>
            <option>Dubai</option>
          </select>
          <button className="bg-red-500 text-white px-12 py-3 rounded font-semibold hover:bg-red-700 transition">
            Search
          </button>
        </div>
      </div>
      <JobSearchPage />
      <CareerChangePage />
      <WorkPermitVisaPage />
      <WorkIn />
      <WorkVisaFees />
      <TestimonialSection />
      {/* <FAQ /> */}
    </div>
    <Footer/>
    </>
  );
};

export default page;