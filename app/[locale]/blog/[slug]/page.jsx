import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";
import React from "react";
import blog1 from "@/images/blog1.jpg";
import blogicon from "@/images/meddle-icon.png";
import HeaderForm from "@/components/common/HeaderForm";
import Heading from "@/components/common/Heading";
import cardimg from "@/images/blogcard.jpg";
import blogdetail from "@/images/blogdetal.webp";
import VisaExtras from "@/components/BlogDetailRight";
// import Breadcrumb from '@/components/common/Breadcrumb';

const page = ({ params }) => {
  return (
    <>
      <Header />
      {/* <Breadcrumb linkname={"Blogs"} link={`/${params.locale}/blogs`} name={`${params?.slug}`}/> */}
      <div className="container mx-auto relative ">
        <Image
          src={blogicon}
          alt="icon"
          className="h-[80px] w-auto absolute right-[0px] "
        />
        <div className="flex">
          <div className="min-w-[65%]">
            <Image src={blogdetail} alt="blog header" className="" />
          </div>
          <div>
            <HeaderForm />
          </div>
        </div>
      </div>
      <section className="py-8 md:py-16 px-2 sm:px-10  bg-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 items-start">
          <div className="lg:w-3/1 space-y-6">
            {/* <VisaExtras/> */}
            <section className="">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 items-start">
                <div className="lg:w-3/1 space-y-6 bg-white">
                  <div className="max-w-4xl mx-auto px-4 py-10 ">
                    <p className="text-sm text-gray-500">
                      Posted on April 09 2025
                    </p>
                    <h1 className="text-2xl font-bold text-gray-900 mt-2">
                      Can I apply directly for the 191 visa?
                    </h1>
                    <p className="text-gray-600 mt-1">
                      By{" "}
                      <span className="font-semibold">
                        Anshul Singhal, Editor
                      </span>{" "}
                      <br />
                      Updated April 09 2025
                    </p>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                      No, you cannot directly apply for the 191 visa. To be
                      eligible, you must have a valid regional provisional visa
                      and hold it for at least three years. The 191 visa is the
                      two-step process to permanent residency in Australia.
                      First, you must obtain a regional provisional visa that
                      needs a subclass 491 (Skilled Work Regional) or 494
                      (Skilled Employer Sponsored Regional).
                    </p>

                    <div className="my-6 flex justify-center">
                      <img
                        src="https://www.y-axis.com/assets/cms/2025-04/Path%20to%20191%20Visa.webp" // replace with actual image
                        alt="Path to 191 Visa"
                        className="rounded-lg shadow-md"
                      />
                    </div>

                    <p className="italic text-sm text-gray-600">
                      *Want to guidance to apply for Australia PR? X-Axis is
                      here to offer you comprehensive support with the process.*
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                      What is a 191 visa?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The Permanent Residence (Skilled Regional) visa (subclass
                      191), also known as the 191 visa, is a pathway to
                      Australia for individuals who have lived and worked in
                      Australia's regional areas through a provisional visa,
                      such as a 491 or 494 visa, for at least three years.
                    </p>
                    <p className="mt-2 text-gray-700">
                      *Looking for guidance to apply for Australian PR?{" "}
                      <a href="#" className="text-blue-600 underline">
                        Sign up with X-Axis
                      </a>{" "}
                      for guidance with every step of the process.*
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                      Eligibility for the 191 visa
                    </h2>
                    <p className="text-gray-700">
                      To be eligible for the 191 visa, you must fulfill the
                      conditions given below. You must:
                    </p>

                    <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                      <li>Hold a qualifying visa</li>
                      <li>
                        Provide assessment-based notices authorized by the
                        Australian Taxation Office for 3 income years of 5 years
                        validity of your qualifying visa
                      </li>
                      <li>Have been in condition of your qualifying visa</li>
                      <li>Meet good health and character requirements</li>
                      <li>Have a good character certificate</li>
                      <li>Comply with Australian government laws</li>
                      <li>
                        Pay back debts to the Government of Australia (if any)
                      </li>
                      <li>
                        Not have visa cancellation or refusal of application
                        earlier
                      </li>
                    </ul>

                    <div className="my-6 flex justify-center">
                      <img
                        src="https://www.y-axis.com/assets/cms/2025-04/191%20Visa%20Eligibility%20Breakdown.webp" // replace with actual image
                        alt="Visa Eligibility Breakdown"
                        className="rounded-lg shadow-md"
                      />
                    </div>

                    <p className="italic text-sm text-gray-600">
                      *Looking for assistance to apply for 191 in Australia?
                      X-Axis is here to offer complete guidance.*
                    </p>
                  </div>
                  <div className="max-w-3xl mx-auto p-6 text-gray-800">
                    <h2 className="text-2xl font-bold mb-2">
                      Eligibility for a 491 visa
                    </h2>
                    <p className="mb-2">
                      The eligibility conditions of the 491 visa are given
                      below. You must:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>
                        Have a nomination by a state or territory of Australia
                        agency or sponsorship by an eligible family member.
                      </li>
                      <li>
                        Be employed in an occupation listed in a relevant
                        skilled occupation list
                      </li>
                      <li>
                        Have the required skills assessment for the job role
                      </li>
                      <li>Have an invitation to apply for the 491 visa</li>
                      <li>
                        Have a score of 65 points or more in the points grid
                        system
                      </li>
                    </ul>
                    <p className="mb-6 text-blue-600 underline cursor-pointer">
                      Australia announces the new Designated Area Migration from
                      March 2025 to 2030
                    </p>

                    <h2 className="text-2xl font-bold mb-2">
                      Eligibility for the 494 visa
                    </h2>
                    <p className="mb-2">
                      The eligibility criteria for the 494 visa are given below.
                      You must:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>
                        Have nomination by an Australia-based work sponsor.
                      </li>
                      <li>
                        Be employed in an occupation listed on the relevant
                        skilled occupation list.
                      </li>
                      <li>
                        Have a favorable report for skills assessment for your
                        occupation
                      </li>
                      <li>Be below 45 years</li>
                      <li>Have the required skills in the English language</li>
                    </ul>
                    <p className="mb-6 text-blue-600 underline cursor-pointer">
                      Australia Replaces ANZSCO with OSCA for Job Classification
                    </p>

                    <h2 className="text-2xl font-bold mb-2">
                      How to apply for the 191 visa?
                    </h2>
                    <p className="mb-4">
                      The detailed procedure to apply for the 191 visa is given
                      below.
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mb-4">
                      <li>
                        Hold a valid qualifying visa to apply for the 191 visa.
                      </li>
                      <li>
                        Check if you meet the other eligibility conditions for
                        the 191 visa.
                      </li>
                      <li>
                        Ensure you include all the required documents with the
                        application.
                      </li>
                      <li>Submit the duly filled 191 visa application form.</li>
                      <li>
                        Become an Australian permanent resident with the 191
                        visa.
                      </li>
                    </ol>

                    <p className="text-sm text-gray-600 mb-6">
                      <em>
                        *Looking for assistance with{" "}
                        <span className="text-blue-600 underline cursor-pointer">
                          Australia immigration
                        </span>
                        ? Contact Y-Axis, the world’s No. 1 overseas immigration
                        company, for end-to-end support with the process.
                      </em>
                    </p>

                    <button className="Allbtn font-semibold px-6 py-2 rounded">
                      Apply Now
                    </button>
                  </div>
                  {/* <VisaExtras /> */}
                </div>
              </div>
            </section>
          </div>
          <div className="lg:w-3/3 md:sticky top-10 md:items-start ">
            <div className="border border-red-200">
              <h1
                className={
                  "text-xl justify-center md:justify-start md:text-2xl bg-[#e72727] font-bold text-white py-4 px-4"
                }
              >
                Popular Category
              </h1>
              {/* <Heading text="Popular Category"  className={"text-xl justify-center md:justify-start md:text-2xl bg-[#e72727] font-bold text-white py-4 px-4"}/> */}
              <div className="my-6 px-2 flex gap-4 flex-wrap items-center justify-center">
                <div className="py-3 px-4 border border-gray-300 text-sm">
                  Australia{" "}
                  <span
                    className="text-white bg-[#e72727] px-1 font-semibold rounded-full"
                    style={{ fontSize: "10px" }}
                  >
                    20
                  </span>
                </div>
                <div className="py-3 px-4 border border-gray-300 text-sm">
                  Canada PNP{" "}
                  <span
                    className="text-white bg-[#e72727] px-1 font-semibold rounded-full"
                    style={{ fontSize: "10px" }}
                  >
                    20
                  </span>
                </div>
                <div className="py-3 px-4 border border-gray-300 text-sm">
                  Canada{" "}
                  <span
                    className="text-white bg-[#e72727] px-1 font-semibold rounded-full"
                    style={{ fontSize: "10px" }}
                  >
                    20
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-xl justify-center md:justify-start md:text-2xl bg-[#e72727] font-bold text-white py-4 px-4">
                Recent
              </h1>
              {/* <Heading text="Recent"  /> */}
              <div>
                <div className="flex my-4">
                  <div className="h-[60px] min-w-[100px] overflow-hidden w-auto">
                    <Image alt="blog1" src={blog1} className="w-auto h-full" />
                  </div>
                  <h1 className="font-bold text-sm">
                    UK and Uttar Pradesh Partner on Chevening Scholarship for
                    Students
                  </h1>
                </div>
                <div className="flex my-4">
                  <div className="h-[60px] min-w-[100px] overflow-hidden w-auto">
                    <Image
                      alt="blog1"
                      src={cardimg}
                      className="w-auto h-full"
                    />
                  </div>
                  <h1 className="font-bold text-sm">
                    UK and Uttar Pradesh Partner on Chevening Scholarship for
                    Students
                  </h1>
                </div>
                <div className="flex my-4">
                  <div className="h-[60px] min-w-[100px] overflow-hidden w-auto">
                    <Image alt="blog1" src={blog1} className="w-auto h-full" />
                  </div>
                  <h1 className="font-bold text-sm">
                    UK and Uttar Pradesh Partner on Chevening Scholarship for
                    Students
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <Footer />
    </>
  );
};

export default page;
