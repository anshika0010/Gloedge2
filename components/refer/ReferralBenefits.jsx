import React from "react";

export default function ReferralBenefits() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl w-full">
        
        {/* Left Card - Eligible Products & Services */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 relative">
            Eligible Products & Services
            <span className="absolute left-0 -bottom-1 w-20 h-0.5 bg-red-500"></span>
          </h2>
          <p className="text-gray-600 mb-4">
            The Referral Program applies to a wide range of Y-Axis services across categories such as:
          </p>
          <ul className="space-y-3">
            {[
              "Visit/Tourist Visas (USA, UK, Schengen, Canada, etc.)",
              "Business Visas, Work Visas, Student Visas, Dependant Visas",
              "Coaching packages (e.g., IELTS, TOEFL, GMAT, GRE, PTE, German language)",
              "PR/Immigration consulting for countries like Canada, Australia, UK, Germany",
              "Digital Nomad, Investor, and Job-Seeker visas",
              "Essentially, the referral applies to most paid and eligible Y-Axis offerings."
            ].map((item, index) => (
              <li
                key={index}
                className="bg-red-50 px-4 py-3 rounded-lg text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card - Benefits of Participation */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 relative">
            Benefits of Participation
            <span className="absolute left-0 -bottom-1 w-20 h-0.5 bg-red-500"></span>
          </h2>
          <ul className="space-y-3">
            <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
              <span className="font-bold text-red-500">Earn Rewards Passively:</span>{" "}
              Simply by referring others who purchase qualified visa services.
            </li>
            <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
              <span className="font-bold text-red-500">Flexible Value:</span>{" "}
              The more expensive the product, the higher the referral bonus.
            </li>
            <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
              <span className="font-bold text-red-500">Leverages Y-Axis Service Range:</span>{" "}
              Suitable for referrals across multiple visa categories and destinations.
            </li>
            <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
              <span className="font-bold text-red-500">Low Effort, High Potential:</span>{" "}
              After initial sign-up and invitation, the bonus is automatically credited post-purchase confirmation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
