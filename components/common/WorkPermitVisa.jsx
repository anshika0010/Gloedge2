import React from "react";

export default function WorkPermitVisaPage() {
  return (
    <div className="font-sans  py-12 text-gray-800">
      {/* Comparison Section */}
      <h2 className="text-2xl font-bold mb-6">
        What is the difference between a Work permit and a Work Visa?
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-3">Factor</th>
              <th className="border px-4 py-3">Work Permit</th>
              <th className="border px-4 py-3">Work Visa</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Definition", "Permission to work in a specific job/employer", "Entry clearance to live and work abroad"],
              ["Issuing Body", "Labor/immigration authorities", "Embassy/consulate of destination country"],
              ["Requirements", "Employer sponsorship, job offer", "Proof of eligibility may include sponsorship"],
              ["Scope", "Tied to one role/employer", "Broader but depends on the visa category"],
              ["Validity", "Matches job contract or set by labor regulations", "Determined by immigration laws, often renewable"],
              ["Renewability", "Needs approval from authorities", "Typically renewable if conditions are met"],
              ["Employer Change", "Usually requires a new permit", "May need a new or amended visa"],
              ["Processing Time", "Varies by local rules and bureaucracy", "Often longer due to visa processing requirements"],
              ["Fees", "Mostly paid by employer or shared", "Usually paid by the applicant"],
            ].map(([factor, permit, visa], i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="border px-4 py-3 font-medium">{factor}</td>
                <td className="border px-4 py-3">{permit}</td>
                <td className="border px-4 py-3">{visa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Types Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Types of Work Permits or Visas</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Temporary work permit/Visa:</span>{" "}
            Allows you to work in the country for 2 to 4 years.
          </li>
          <li>
            <span className="font-semibold">Permanent work permit/Visa:</span>{" "}
            Allows you to work permanently for 5 years, along with a PR visa.
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition w-full md:w-1/2 text-center">
            <h4 className="text-lg font-bold text-blue-700">Temporary Work Permit</h4>
            <p className="mt-2 text-gray-600">
              Allows work for 2 to 4 years, suitable for short-term assignments.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition w-full md:w-1/2 text-center">
            <h4 className="text-lg font-bold text-green-700">Permanent Work Permit</h4>
            <p className="mt-2 text-gray-600">
              Allows permanent work and includes a PR visa, ideal for long-term relocation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-4">
          What are the benefits of abroad working visa?
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Grow your career and have international mobility</li>
          <li>Earn dollar salaries leading to higher saving</li>
          <li>Live in well-developed countries</li>
          <li>Have access to world-class education & healthcare</li>
          <li>Gain access to citizen benefits</li>
          <li>Get a powerful passport that facilitates international travel</li>
          <li>Transform your family’s life</li>
        </ul>
      </section>

      {/* Work Permit Status */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Know your Work Permit Status</h3>
        <p className="text-gray-700 mb-4">
          Do you want to build a career and settle life abroad? Y-Axis has helped thousands of individuals and families 
          settle in the world’s most liveable countries as one of the world’s leading overseas career specialists and 
          leading work visa agency. We’ve seen firsthand how moving abroad can dramatically improve not just the migrant’s 
          life but that of their family and parents. Our comprehensive{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            overseas career solutions
          </a>{" "}
          make us the #1 choice for professionals seeking to work abroad.
        </p>
      </section>

      {/* Services */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Our Job Search Services Include the following:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Job Search Strategy Report:</span> 
            With the help of experts, we create a comprehensive report based on your profile and 
            decide on positioning it in your target country.
          </li>
          <li>
            <span className="font-semibold">Job Applications:</span> 
            Best countries for you, available jobs and postings, and even apply on your behalf.
          </li>
        </ul>
      </section>
    </div>
  );
}