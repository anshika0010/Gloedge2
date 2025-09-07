import React from "react";

const ImmigrationInfoo = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      {/* Requirements */}
      <h2 className="text-2xl font-bold mb-3">Requirements to migrate abroad</h2>
      <p className="mb-6">
        Each immigration program has its own eligibility requirements as per government policies.
        The required documents supporting the claims you make in your application
        will depend on the program you apply for. It is advisable to confirm your eligibility
        before applying. The government concerned usually verifies your education,
        identity, work experience, and general background.
      </p>

      {/* Steps */}
      <h2 className="text-2xl font-bold mb-3">Steps to apply for overseas immigration</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Check your eligibility</li>
        <li>
          Find out if your score meets the specific criteria of the points grid (for instance: 65 points for Australia, 67 points for Canada)
        </li>
        <li>Arrange the checklist of documents</li>
        <li>Apply for the visa</li>
        <li>Complete the visa application form and submit it</li>
        <li>Wait for the visa status</li>
        <li>Settle overseas</li>
      </ol>
      <p className="mb-6">
        We help our clients discover the best country for them and give them unbiased advice
        on the best immigration options.
      </p>

      {/* Costs */}
      <h2 className="text-2xl font-bold mb-3">Costs to consider while moving abroad</h2>
      <p className="mb-4">
        The costs involved in a PR Visa differ by country. The table below gives information related to it.
      </p>
      <table className="w-full border border-gray-300 mb-2">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Cost (approx)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Canada</td>
            <td className="border px-4 py-2">CAD 4,500</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Australia</td>
            <td className="border px-4 py-2">AUD 4,700</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mb-6">
        <strong>*Note:</strong> The visa costs differ based on the country and visa you choose to apply for.
      </p>

      {/* Processing time */}
      <h2 className="text-2xl font-bold mb-3">Processing time for Overseas Immigration</h2>
      <p className="mb-4">
        The processing times for immigration differ based on the type of country and visa you choose to apply for.
        The table below gives you complete information about the processing time of a few visas.
      </p>
      <table className="w-full border border-gray-300 mb-2">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Australia PR Visa</td>
            <td className="border px-4 py-2">6 – 8 months</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Canada PR Visa</td>
            <td className="border px-4 py-2">6 – 8 months</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mb-6">
        <strong>*Note:</strong> The processing times differ based on the country and visa you choose to apply for.
      </p>

      {/* Y-Axis Consultant */}
      <h2 className="text-2xl font-bold mb-3">
        Y-Axis – The best immigration consultant for overseas aspirants
      </h2>
      <p className="mb-4">
        Thousands of people turn to Y-Axis every year to achieve their global ambitions. Our knowledge,
        expertise, and experience in global immigration practices make us the first choice for
        individuals and families looking to build a new life abroad.
      </p>
      <h3 className="text-xl font-semibold mb-2">Professional Guidance</h3>
      <p className="mb-4">
        Get professional guidance from the best. Make an informed decision with perfect confidence.
        Optimize the chances of success of your submission by getting counseling from the leading immigration consultant who works for you.
      </p>
      <h3 className="text-xl font-semibold mb-2">Expert Counseling</h3>
      <p className="mb-4">
        Our immigration counselors work with you to determine your preferences and identify the most likely
        student countries with the best prospects for successful migration and the most optimum future prospects.
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Expert eligibility check & counseling</li>
        <li>
          Immigration process check through the Y-Axis{" "}
          <a href="#" className="text-blue-600 underline">
            immigration points calculator
          </a>
        </li>
        <li>Visa & career counseling</li>
        <li>Job Search Services</li>
        <li>Resume writing, job application assistance</li>
        <li>Immigration updates & visa updates</li>
      </ul>
      <a
        href="#"
        className="Allbtn rounded hover:bg-blue-700"
      >
        Apply Now
      </a>
    </div>
  );
};

export default ImmigrationInfoo;
