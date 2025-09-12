import Careers from "@/components/career/Careers";
import CareersPage from "@/components/career/CareersPage";
import CareersPage3 from "@/components/career/CareersPage3";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 overflow-x-hidden ">
        <CareersPage />
     <Careers/>
     <CareersPage3/>
      </div>
      <Footer />
    </div>
  );
};

export default page;
