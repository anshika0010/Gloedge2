    import React from "react";

export default function WorkIn() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-16 py-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Work in Canada
      </h1>

      {/* Intro Paragraph */}
      <p className="mb-4 leading-relaxed">
        If you are planning to{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          immigrate to Canada
        </a>
        , you will need to understand the Canadian job market. Canada offers
        thousands of employment opportunities across multiple industries.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Canada Job Outlook
      </h2>
      <p className="mb-4 leading-relaxed">
        According to{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          Canada Job Bank
        </a>
        , there are more than 1 million active job vacancies in Canada.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        High Paying Jobs in Canada
      </h2>
      <p className="mb-4 leading-relaxed">
        Here is a list of some of the high-paying occupations in Canada with
        their average salaries.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-semibold">
                Occupation
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold">
                Average Salary (CAD/year)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Software Engineer</td>
              <td className="border border-gray-300 px-4 py-2">$95,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Registered Nurse</td>
              <td className="border border-gray-300 px-4 py-2">$75,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Financial Analyst</td>
              <td className="border border-gray-300 px-4 py-2">$85,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Construction Manager</td>
              <td className="border border-gray-300 px-4 py-2">$93,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How to Apply for Jobs in Canada?
      </h2>
      <p className="mb-4 leading-relaxed">
        You can apply for jobs in Canada through{" "}
        <a href="#" className="text-blue-600 underline hover:text-blue-800">
          official job portals
        </a>{" "}
        or by connecting with Canadian employers directly.
      </p>

      {/* Read More Link */}
      <a
        href="#"
        className="text-blue-600 underline hover:text-blue-800 font-medium"
      >
        Read more about working in Canada →
      </a>
    </div>
  );
}