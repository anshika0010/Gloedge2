import React from "react";

export default function WorkVisaFees() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-16 py-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Work Visa Fees</h2>

      {/* Fees Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-semibold">
                Country
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold">
                Work Visa Fees (Approximate)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Canada</td>
              <td className="border border-gray-300 px-4 py-2">
                CAD 155 (Work Permit Fee)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">The US</td>
              <td className="border border-gray-300 px-4 py-2">
                USD 460 (H-1B Base Filing Fee)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">The UK</td>
              <td className="border border-gray-300 px-4 py-2">
                GBP 610 - 1,408 (Skilled Worker visa, depending on the duration and if it's a "shortage" or "non-shortage" occupation)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Australia</td>
              <td className="border border-gray-300 px-4 py-2">
                AUD 2,645 - 5,755 (TSS visa, depending on the stream and duration)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Germany</td>
              <td className="border border-gray-300 px-4 py-2">
                EUR 56 - 100 (Blue Card, depending on specific circumstances)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Consultancy Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Y-Axis – The best work abroad consultancy
      </h2>
      <p className="mb-4 leading-relaxed">
        Thousands of professionals approach Y-Axis yearly to help them realize
        their{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          overseas career
        </a>{" "}
        ambitions. Our suite of services includes:
      </p>

      {/* Services List */}
      <ul className="list-none mb-6">
        <li className="mb-2">
          <span className="font-bold">Resume Writing Services: </span>
          Ensure your resume meets international standards and showcases your strengths
        </li>
        <li className="mb-2">
          <span className="font-bold">LinkedIn Marketing: </span>
          Improve your chances of getting discovered online by recruiters and companies with our LinkedIn marketing solutions
        </li>
        <li className="mb-2">
          <span className="font-bold">Resume Marketing: </span>
          Be present in your target country’s job market with our Resume Marketing services that apply for jobs on your behalf through overseas job boards, classifieds & job postings
        </li>
      </ul>

      {/* Closing Paragraph */}
      <p className="mb-6 leading-relaxed">
        With Y-Axis, you discover opportunities that are best suited for you and
        get the tools and experience to help you with the highest chances of
        success. Talk to us today to begin your journey of working abroad.
      </p>

      {/* Apply Now Button */}
      <button className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 transition">
        Apply Now
      </button>
    </div>
  );
}