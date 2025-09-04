import React from "react";

export default function ReferralReward() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Left Card - Reward Structure */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2">
            Reward Structure – Referral Bonus by Product Value
          </h2>
          <p className="text-gray-600 mb-4">
            Y-Axis offers a tiered cashback structure based on the value of the
            visa product purchased:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-red-50">
                  <th className="px-4 py-3 text-red-600 font-semibold border rounded-l-lg">
                    Product Value (₹)
                  </th>
                  <th className="px-4 py-3 text-red-600 font-semibold border rounded-r-lg">
                    Referral Reward (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border">5,000 – 14,999</td>
                  <td className="px-4 py-3 border">₹750</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">15,000 – 29,999</td>
                  <td className="px-4 py-3 border">₹1,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">30,000 – 49,999</td>
                  <td className="px-4 py-3 border">₹1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">50,000 – 99,999</td>
                  <td className="px-4 py-3 border">₹2,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">100,000 – 199,999</td>
                  <td className="px-4 py-3 border">₹3,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border">200,000 and above</td>
                  <td className="px-4 py-3 border">₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Card - How It Works */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 relative">
            How the Referral Program Works?
            <span className="absolute left-0 -bottom-1 w-16 h-0.5 bg-red-500"></span>
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-bold text-red-500">1. Sign Up:</span> First,
              you need to register for the Y-Axis Referral Program.
            </li>
            <li>
              <span className="font-bold text-red-500">
                2. Invite a Friend:
              </span>{" "}
              Share your referral link with someone who registers with Y-Axis
              using it.
            </li>
            <li>
              <span className="font-bold text-red-500">3. Purchase:</span> When
              that person buys an eligible visa product or service from Y-Axis,
              the value of the referral is determined.
            </li>
            <li>
              <span className="font-bold text-red-500">
                4. Receive Your Reward:
              </span>{" "}
              Once the purchase is confirmed as valid, you automatically receive
              a cashback reward in Indian rupees.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
