import React from "react";

export default function VisaAbroadPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Type of visas to work Abroad
      </h2>

      <p className="mb-4">
        There are different types of visa for different country such as:
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Country
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Visa Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Requirements
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Visa Costs (Approximate)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Canada</td>
              <td className="border px-4 py-2 text-blue-600 underline">
                Express Entry
              </td>
              <td className="border px-4 py-2">
                Qualifications based on points system (language proficiency,
                work experience, education, and age).
              </td>
              <td className="border px-4 py-2">
                $2,300 CAD (primary applicant) + additional fees
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">USA</td>
              <td className="border px-4 py-2 text-blue-600 underline">
                H-1B Visa or L-1 Visa
              </td>
              <td className="border px-4 py-2">
                Bachelor’s degree or equivalent, job offer from U.S. employer.
              </td>
              <td className="border px-4 py-2">
                $190–$460 + $500 filing fees
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">UK</td>
              <td className="border px-4 py-2 text-blue-600 underline">
                Tier 2 (General) Visa
              </td>
              <td className="border px-4 py-2">
                Job offer from an authorized employer, proof of sponsorship,
                English language proficiency, minimum salary.
              </td>
              <td className="border px-4 py-2">£610 – £1408</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Australia</td>
              <td className="border px-4 py-2 text-blue-600 underline">
                Skilled Australian Visa
              </td>
              <td className="border px-4 py-2">
                Points-based system, occupation on skills list, English language
                proficiency.
              </td>
              <td className="border px-4 py-2">AUD 1,215 – AUD 2,645</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Germany</td>
              <td className="border px-4 py-2 text-blue-600 underline">
                EU Blue Card
              </td>
              <td className="border px-4 py-2">
                Recognized university qualification, job offer with minimum
                salary.
              </td>
              <td className="border px-4 py-2">
                Varies depending on duration & type of visa
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Switzerland</td>
              <td className="border px-4 py-2 text-blue-600 underline">
                Singapore work permit
              </td>
              <td className="border px-4 py-2">
                Recognized qualification, employment in shortage occupation.
              </td>
              <td className="border px-4 py-2">
                Varies depending on duration & type of visa
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Benefits */}
      <h3 className="text-xl font-bold mt-10 mb-4">
        Benefits of working abroad as an engineering professional in Abroad:
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Shifting abroad for jobs can be a boon as:</li>
        <li>It improves communication skills.</li>
        <li>Develops professional skills.</li>
        <li>Gain insight into other cultures.</li>
        <li>Earn far beyond your current salary.</li>
        <li>Traveling opportunity.</li>
        <li>Financial development.</li>
        <li>Work-life balance.</li>
      </ul>
      <p className="text-sm mt-2 text-gray-600">
        *Want job specific guidance? Talk to X-Advisors for further guidance.
      </p>

      {/* Famous Engineers */}
      <h3 className="text-xl font-bold mt-10 mb-4">
        Names of famous immigrant Engineer professional:
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>
          Elon Musk (born 1971), investor, engineer, owner of SpaceX, Tesla
          Motors, and SolarCity, founder of X Corp.
        </li>
        <li>
          David Baszucki (born 1963), entrepreneur, engineer, inventor, and
          co-founder and CEO of Roblox Corporation.
        </li>
        <li>
          Thomas Edison (1847–1931), scientist, businessman, and inventor
          especially notable for inventing and patenting the first practical
          telephones.
        </li>
        <li>
          Alexander Graham Bell (1847–1922), Scottish-born scientist, inventor
          and innovator, especially known for inventing the first practical
          telephone.
        </li>
        <li>
          Nikola Tesla (1856–1943), Serbian-American engineer, inventor, and
          physicist.
        </li>
      </ul>

      {/* Indian Community Insights */}
      <h3 className="text-xl font-bold mt-10 mb-4">
        Indian Community Insights for Engineer Professional:
      </h3>
      <p className="mb-4">
        In Canada, the term “engineering society” often refers to the society of
        engineering students. The Canadian Federation of Engineering Students
        consists of engineering students from across Canada.
      </p>

      <h4 className="text-lg font-semibold mb-2">Cultural Integration</h4>
      <p className="mb-4">
        Moving to a new country can be like driving into an unknown world.
        Living abroad can be exciting and scary as the journey is unique.
        Understand the cultural nuances before shifting.
      </p>

      <h4 className="text-lg font-semibold mb-2">Four steps to follow when in Abroad:</h4>
      <ul className="list-decimal list-inside space-y-1 text-gray-700 mb-6">
        <li>Prepare yourself with finances that are needed to survive.</li>
        <li>Always look for accommodation near your future place of work.</li>
        <li>
          Explore transportation convenience and communication tips for
          accessing integration.
        </li>
        <li>
          Engage with expat communities and organizations for smoother
          settlement.
        </li>
      </ul>

      {/* Final Button */}
      <div className="text-center mt-10">
        <button className="bg-red-600 text-white px-6 py-3 font-semibold rounded-md hover:bg-red-700 transition">
          Apply now
        </button>
      </div>
    </div>
  );
}
