import Image from "next/image";
import React from "react";
import career from "../../images/career1.jpg";
import career2 from "../../images/career2.jpg";
import career3 from "../../images/career3.jpg";
export default function CareersPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-purple-900 flex flex-col md:flex-row min-h-[500px]">
        {/* Left side full cover image */}
        <div className="relative md:w-1/2 w-full h-64 md:h-auto">
          <Image
            src={career}
            alt="Career Hero"
            fill
            className="object-cover shadow-lg"
            priority
          />
        </div>

        {/* Right side content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-purple-700 text-white p-8 rounded-lg md:rounded-l-none">
          <h2 className="text-4xl md:text-5xl font-bold">Careers at Gloedge</h2>
          <p className="mt-2 text-xl md:text-base">
            Build a Rewarding Career Doing Meaningful Work
          </p>
          <button className="mt-6 w-[400px] bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-purple-300">
            Apply Now →
          </button>
        </div>
      </section>

      {/* Browse Openings */}
      <section className="py-10 px-6 md:px-16 text-center">
        <h3 className="text-3xl font-semibold">Browse openings by function</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {[
            "Sales",
            "Process",
            "HR",
            "Technology",
            "Training",
            "Support",
            "Global Indian",
            "Staffing",
          ].map((role, idx) => (
            <button
              key={idx}
              className="border-3 border-black py-2 px-4 rounded hover:bg-purple-700 hover:text-white transition"
            >
              {role}
            </button>
          ))}
        </div>
      </section>

      {/* Section 1: Secure */}
      <section className="px-6 md:px-16 py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Gloedge | Where ordinary people do extraordinary work. Join us.
            </h2>
            <h3 className="text-3xl font-semibold mb-4">1. Secure</h3>
            <p className="text-gray-700 mb-4">
              Gloedge is the market leader in an industry where demand for
              international opportunities outstrips the supply. We have been
              growing year after year by maintaining our market position through
              stellar service and continuous marketing.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Huge demand for Indian professionals who want to go abroad
              </li>
              <li>
                Indian passport holders face complex visa challenges which we
                help navigate
              </li>
              <li>
                Gloedge offers a stable job with clear cut roles and well
                defined growth paths. Your merit will take you places
              </li>
              <li>
                We are fast growing, recession-proof and an established brand
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 ">
            <Image
              src={career2}
              alt="Career"
              width={0}
              height={0}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Meaningful Work */}
      <section className="px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <Image
              src={career3}
              alt="Career3"
              width={0}
              height={0}
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">
              2. Meaningful & purposeful work
            </h3>
            <p className="text-gray-700 mb-4">
              Gloedge offers you the unique opportunity to leave a lasting
              impact on an entire family, and maybe even generations to come.
              Every aspect of your work is in service to the goal of changing
              someone’s life for the better. Your efforts will lead to a
              continued learning and an uncapped salary coupled with recognition
              among your peers.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Enriching job that turns you into a people person & hones your
                skills
              </li>
              <li>
                Energizing work that will revitalise your zeal to contribute
              </li>
              <li>
                Create an impact on your society through your knowledge & values
              </li>
              <li>Gain recognition as an expert who can transform lives</li>
              <li>
                Our merit driven policies mean you can go as far as your skills
                take you
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
