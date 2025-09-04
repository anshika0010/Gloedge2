import React from "react";

const Countries = () => {
  const countries = [
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      description:
        "Access European markets with Tier 1 Investor and Innovator visas. Strong financial sector and business-friendly environment.",
      image:
        "https://images.unsplash.com/photo-1561484930-998b6a7c7a4a?auto=format&fit=crop&w=800&q=80", // London
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      description:
        "Gateway to Asia-Pacific with Business Innovation and Investment visas. Growing economy and excellent quality of life.",
      image:
        "https://images.unsplash.com/photo-1506976785307-8732e854ad05?auto=format&fit=crop&w=800&q=80", // Sydney Opera House
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description:
        "Start-up and Self-employed Person programs. Diverse economy, multicultural society, and proximity to US markets.",
      image:
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60b?auto=format&fit=crop&w=800&q=80", // Toronto
    },
    {
      name: "United States",
      flag: "🇺🇸",
      description:
        "EB-5 and E-2 investor visas for the world's largest economy. Unmatched business opportunities and innovation ecosystem.",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80", // NYC
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      description:
        "EU Residence Permit for investors. Europe's economic powerhouse with strong manufacturing and technology sectors.",
      image:
        "https://images.unsplash.com/photo-1543349689-9a4d426a64d6?auto=format&fit=crop&w=800&q=80", // Berlin
    },
  ];

  return (
    <>
      {/* Top Countries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Top Business Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition duration-500 hover:scale-105"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${country.image})` }}
                ></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/40 transition duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center text-white h-full">
                  <div className="text-6xl mb-3">{country.flag}</div>
                  <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                  <p className="text-sm leading-relaxed">
                    {country.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Countries;
