import React from "react";

const InvestmentConsultant = () => {
  return (
    <div className=" container mx-auto py-10">
      <div className="border border-gray-200 p-8 rounded-sm shadow-sm bg-white">
        <h2 className="text-2xl font-bold text-center mb-2">
          Why choose Y-Axis as investment consultant
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We want to transform you to become global Indian
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Advisory Report */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/50/brief.png"
              alt="Advisory Report"
              className="mb-3"
            />
            <h3 className="font-semibold text-lg">Advisory Report</h3>
            <p className="text-gray-600 text-sm">
              Our Entrepreneur Advisory Report that advises you on your options
            </p>
          </div>

          {/* Opportunities */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/50/opportunity.png"
              alt="Opportunities"
              className="mb-3"
            />
            <h3 className="font-semibold text-lg">Opportunities</h3>
            <p className="text-gray-600 text-sm">
              Y-Axis has the know-how of intricate procedures, policies and
              opportunities for your visa needs.
            </p>
          </div>

          {/* Investor Visa Expert */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/50/expert.png"
              alt="Investor Visa Expert"
              className="mb-3"
            />
            <h3 className="font-semibold text-lg">Investor Visa Expert</h3>
            <p className="text-gray-600 text-sm">
              An experienced Y-Axis Investor Visa expert will assist you at
              every step of the process
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
            Apply now
          </button>
        </div>
      </div>

      {/* Why Invest Overseas */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Why Invest Overseas?</h2>
        <p className="text-gray-700 mb-6">
          The top motivations that make an individual select a country for
          invest overseas include – the likelihood of getting citizenship, the
          quality of life offered, as well as the overall business environment.
        </p>
        <p className="text-gray-700">
          Permanent residency programs for investors and entrepreneurs are
          typically designed to offer individuals as well as businesses a wide
          range of benefits.
        </p>
      </div>

      {/* Settle Abroad */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Settle Abroad with Your Family</h2>
        <p className="text-gray-700 mb-4">
          Countries across the globe have created attractive permanent residency
          programs for entrepreneurs, business persons and HNWIs. With a
          favorable immigration climate now is a great time for you to explore
          your options of settling abroad with your family and setting up
          business operations. Y-Axis can help you identify the right residency
          option based on your preferences and future plans.
        </p>
        <p className="text-gray-700 mb-4">
          Many countries offer an Investment or Business Visa to encourage
          immigrants who have proven experience in running a business and are
          interested in establishing a business overseas or invest in another
          country. They could be interested in opening either a new business
          venture or buying an existing business located overseas.
        </p>
        <p className="text-gray-700 mb-4">
          Residence through investment programs are also commonly referred to as
          the golden visa programs. Recently, an increasing number of
          individuals, with the talent as well as means, have come to explore
          overseas options, deciding not to limit their business interests to a
          particular country alone.
        </p>
        <p className="text-gray-700 mb-4">
          Invest overseas allows High Net Worth Individuals (HNWIs) to relocate
          abroad, acquiring the right to work and live in their new country of
          residence.
        </p>
        <p className="text-gray-700 mb-4">
          Many also explore invest overseas options for multiple residences
          towards their international planning.
        </p>
        <p className="text-gray-700 mb-4">
          Australia and Canada have an Immigrant Investor Program which offers
          migrants the option of having an alternate residency status while
          continuing to manage already existing businesses in their home
          country.
        </p>
        <p className="text-gray-700 mb-4">
          These investor programs seek to attract potential overseas investors
          who have enough personal net worth and managerial experience.
        </p>
        <p className="text-gray-700">
          Every country that offers an investment program has its own set of
          requirements and eligibility criteria.
        </p>
      </div>

      {/* Benefits */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Benefits of Settling Abroad as an Entrepreneur
        </h2>
        <p className="text-gray-700 mb-4">
          The permanent residency programs for investors and entrepreneurs are
          typically designed to offer individual as well as business benefits.
          The best such immigration programs offer benefits like:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Access to a high standard of living</li>
          <li>Access to healthcare and education</li>
          <li>Settle with your dependents</li>
          <li>Access to international opportunities</li>
          <li>
            Tax benefits (varies and differs by country)
          </li>
          <li>Travel across nations</li>
          <li>Business-friendly policies</li>
          <li>Access benefits allow you to conduct business globally</li>
        </ul>
      </div>
    </div>
  );
};

export default InvestmentConsultant;
