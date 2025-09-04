export default function ImmigrationInfo() {
  return (
    <section className="bg-white px-6 md:px-16 py-10 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Migrate Overseas to Build a Better Future
      </h2>

      {/* Benefits List */}
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li>High standards of living</li>
        <li>Excellent work-life balance</li>
        <li>Earn 5x more income than your current salary</li>
        <li>Millions of job opportunities in various sectors</li>
        <li>Better career prospects</li>
        <li>FREE education for your children</li>
        <li>Healthcare &amp; social benefits</li>
        <li>Retirement benefits</li>
        <li>Apply for citizenship based on your eligibility</li>
      </ul>

      <p className="text-gray-700 mb-8">
        According to the United Nations Department of Economic and Social Affairs (UNDESA), 
        there were an estimated 232 million international migrants globally.
      </p>

      {/* Reasons for Immigration */}
      <h3 className="text-xl md:text-2xl font-bold mb-4">
        What are the reasons for immigration?
      </h3>
      <p className="text-gray-700 mb-4">
        The reasons for moving abroad differ from person to person. Still, the primary motive to 
        migrate can be either for employment, studies, a better quality of life, or just to expand 
        one’s horizons.
      </p>
      <p className="text-gray-700 mb-4">
        Generally, the top three reasons believed to be the motivating factors for migrating overseas are –
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li>Increased earning potential,</li>
        <li>More job opportunities,</li>
        <li>Better healthcare and education.</li>
      </ul>
      <p className="text-gray-700 mb-8">
        An international migrant is a person living outside the country that they were born in. 
        Crossing borders in search of work, education, and new horizons, a migrant is primarily driven 
        by the search for new opportunities and better livelihood.
      </p>

      {/* Countries Section */}
      <h3 className="text-xl md:text-2xl font-bold mb-4">
        Which countries do Y-Axis help you to immigrate to?
      </h3>
      <p className="text-gray-700 mb-4">
        We help you immigrate to top destinations where Indians thrive and build successful futures. 
        With over 18 million Indians abroad, the diaspora is the world’s largest, and migration is a 
        well-trodden path to better opportunities.
      </p>
      <p className="text-gray-700 mb-6">We help you to immigrate to:</p>
      <ul className="list-disc list-inside text-blue-600 space-y-2 mb-8">
        <li>
          <a href="#" className="hover:underline">
            Australia – Secure your future with a PR Visa
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Canada – Settle permanently with a PR Visa
          </a>
        </li>
      </ul>

      {/* First Step Section */}
      <h3 className="text-xl md:text-2xl font-bold mb-4">
        What is the first step to Immigrate?
      </h3>
      <p className="text-gray-700 mb-4">
        <strong>Get evaluated:</strong> Check your eligibility to migrate abroad instantly for FREE 
        through the{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Y-Axis eligibility points calculator
        </a>.
      </p>
      <p className="text-gray-700 mb-6">
        Generally, the eligibility criteria for migrating overseas includes meeting the –
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li>Age</li>
        <li>Education</li>
        <li>Language requirements</li>
        <li>Work Experience</li>
        <li>Arranged Employment</li>
        <li>Adaptability</li>
      </ul>
      <p className="text-gray-700 mb-8">
        The specific requirements will vary from program to program and country to country.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Country</th>
              <th className="border border-gray-300 px-4 py-2">Minimum points required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                Canada immigration points
              </td>
              <td className="border border-gray-300 px-4 py-2">67</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                Australia immigration points
              </td>
              <td className="border border-gray-300 px-4 py-2">65</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
