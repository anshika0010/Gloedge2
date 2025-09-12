"use client";

import React from "react";

export default function BusinessInvestorCountryCards() {
  const cards = [
    {
      id: "usa",
      title: "USA",
      content:
        "EB-5 (minimum $800,000 to $1,050,000 investment), E-2 Treaty Investor visa.",
    },
    {
      id: "canada",
      title: "Canada",
      content: "Start-Up Visa and Provincial Nominee Investor Programs.",
    },
    {
      id: "uk",
      title: "UK",
      content: "Innovator Founder Visa for entrepreneurs.",
    },
    {
      id: "australia",
      title: "Australia",
      content: "Business Innovation & Investment Program.",
    },
    {
      id: "europe",
      title: "Europe",
      content:
        "Portugal Golden Visa, Greece, Spain, Malta, offering PR with real estate or fund investments.",
    },
  ];

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl  text-orange-600 font-semibold mb-6">
        Top Destinations for Business & Investor Visas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article
            key={c.id}
            className="rounded-lg p-5 shadow-sm border border-orange-100 bg-gray-200"
          >
            <h3 className="text-lg font-medium mb-2">{c.title}</h3>
            <p className="text-sm text-slate-700">{c.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
