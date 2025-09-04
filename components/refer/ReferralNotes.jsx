import React from "react";

export default function ReferralNotes() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow p-6">
        
        {/* Heading */}
        <h2 className="text-xl font-bold mb-4 relative">
          Things to Note
          <span className="absolute left-0 -bottom-1 w-24 h-0.5 bg-red-500"></span>
        </h2>

        {/* Notes List */}
        <ul className="space-y-3">
          <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
            <span className="font-bold text-red-500">Eligibility Criteria:</span>{" "}
            Referrals only count if the friend registers via your referral link
            and completes a qualified purchase.
          </li>
          <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
            <span className="font-bold text-red-500">Product Confirmations:</span>{" "}
            Only confirmed, paid purchases are eligible for rewards.
          </li>
          <li className="bg-red-50 px-4 py-3 rounded-lg text-gray-700">
            <span className="font-bold text-red-500">Referral Limits/Terms:</span>{" "}
            The exact upper limit on the number of referrals, redemption mechanism,
            payout timeline, or tax implications (if any) are not fully detailed
            on the public page. These are likely explained in the full program
            terms and conditions.
          </li>
        </ul>
      </div>
    </div>
  );
}
