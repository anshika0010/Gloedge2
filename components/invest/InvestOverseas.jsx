import React from "react";

const InvestOverseas = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Top Countries */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Top Countries for Invest Overseas
        </h2>
        <p className="text-gray-700 mb-4">
          Countries across the globe offer attractive permanent residency
          options for HNWIs, entrepreneurs, and business persons.
        </p>
        <p className="text-gray-700 mb-4">
          Many countries offer Investment or Business Visa to encourage
          immigrants that have proven experience in running a business and are
          interested in establishing a business overseas or invest in another
          country. Such individuals could be interested in opening either a new
          business venture or buying an existing business located overseas.
        </p>
        <p className="text-gray-700 mb-4">
          The leading countries offering residence through Investment are, among
          others –
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Canada</li>
          <li>Australia</li>
          <li>Ireland</li>
          <li>The UK</li>
          <li>Germany</li>
        </ul>

        <p className="text-gray-700">
          The specific requirements vary and will depend on the country where
          you are looking to settle and the program you are applying under.
        </p>
      </div>

      {/* Citizenship by Investment */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Citizenship by Investment</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-4 py-2 w-1/3">
                  Countries
                </th>
                <th className="border border-gray-300 px-4 py-2">Highlights</th>
              </tr>
            </thead>
            <tbody>
              {/* Canada */}
              <tr>
                <td className="border px-4 py-2">Canada</td>
                <td className="border px-4 py-2 space-y-1">
                  <p>Invest CAD 350,000</p>
                  <p>Canada PR</p>
                  <p>After receiving PR, eventually qualify for Citizenship</p>
                  <p>Canadian Citizenship by Investment</p>
                  <p>Invest AUD 1.25 million</p>
                </td>
              </tr>
              {/* Australia */}
              <tr>
                <td className="border px-4 py-2">Australia</td>
                <td className="border px-4 py-2 space-y-1">
                  <p>Australia PR</p>
                  <p>After receiving PR, eventually qualify for Citizenship</p>
                  <p>Australian Citizenship by Investment</p>
                </td>
              </tr>
              {/* UK */}
              <tr>
                <td className="border px-4 py-2">UK</td>
                <td className="border px-4 py-2 space-y-1">
                  <p>Invest GBP 2 million</p>
                  <p>Investor Visa</p>
                  <p>Spend a specific amount of time in the UK</p>
                  <p>
                    After holding UK PR for years, you can apply for British
                    Citizenship
                  </p>
                </td>
              </tr>
              {/* Ireland */}
              <tr>
                <td className="border px-4 py-2">Ireland</td>
                <td className="border px-4 py-2 space-y-1">
                  <p>Invest €1 million</p>
                  <p>Ireland Residency</p>
                  <p>Citizenship after two years</p>
                  <p>Migrate along with your family</p>
                  <p>Ireland Citizenship by Investment</p>
                </td>
              </tr>
              {/* Germany */}
              <tr>
                <td className="border px-4 py-2">Germany</td>
                <td className="border px-4 py-2 space-y-1">
                  <p>Invest</p>
                  <p>Germany Citizenship</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Options for Investing Overseas */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Top options for investing overseas
        </h2>
        <p className="text-gray-700 mb-4">
          There are many residency-by-investment options available for business
          persons and entrepreneurs.
        </p>
        <p className="text-gray-700 mb-6">
          The most sought-after Investment overseas options include –
        </p>

        {/* Startup Visa */}
        <h3 className="text-xl font-semibold mb-3">Canada’s Startup Visa Program</h3>
        <p className="text-gray-700 mb-4">
          For entrepreneurs that have the skills and potential to build up
          businesses in Canada that are: (1) innovative, (2) can create jobs for
          Canadians, and can compete on an international scale.
        </p>
        <p className="text-gray-700 mb-4">
          Individuals with innovative business ideas might be able to immigrate
          to Canada through the Start-Up Visa Program. Provided, however, that
          they are able to get support for their business idea from any of the
          designated organizations (can be angel investor groups, business
          incubators, or venture capital funds).
        </p>
        <p className="text-gray-700 mb-4">
          The minimum investment required – $200,000 (if coming from a
          designated venture capital fund in Canada); $75,000 (in case of a
          designated angel investor group in Canada).
        </p>
        <p className="text-gray-700 mb-4">
          Those planning to invest in Quebec will have to go through Quebec
          Immigration programs.
        </p>
        <p className="text-gray-700 mb-4">
          If the application is approved, a Canadian permanent residence visa
          will be issued. This will include the Confirmation of Permanent
          Residence (COPR), along with an entry visa.
        </p>
        <p className="text-gray-700">
          <strong>
            Under Canada’s startup visa program, candidates can come to Canada
            on a work permit sponsored by their Canadian-based investor and then
            apply for a PR visa once their business is established in the
            country.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default InvestOverseas;
