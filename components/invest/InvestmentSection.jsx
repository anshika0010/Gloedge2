import { FaUserFriends, FaUsers, FaFileAlt, FaFolderOpen, FaRegFile } from "react-icons/fa";

export default function InvestmentSection() {
  return (
    <div className="container mx-auto space-y-10">
      {/* Top Countries Section */}
      <div className="flex flex-col md:flex-row border border-gray-200">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="https://www.y-axis.com/assets/cms/2023-09/Top%20countries%20for%20invest%20.webp"
            alt="Investor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Green Box */}
        <div className="md:w-1/2 bg-green-500 text-white flex flex-col justify-center px-8 py-10 relative">
          {/* Red vertical bar */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-20 bg-red-500"></div>

          <h2 className="text-2xl font-bold">Top countries for invest overseas</h2>
          <p className="mt-2 text-sm">
            The leading countries offering residence through investment are:
          </p>

          {/* Countries */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {["Canada", "Australia", "UK", "Germany", "Ireland"].map((country, i) => (
              <button
                key={i}
                className={`border border-white py-2 px-4 text-center font-medium ${
                  country === "Ireland" ? "col-span-2" : ""
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Process Section */}
      <div className="border border-gray-200 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Investment Process</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Every country that offers an investment program has its own set of
          requirements and eligibility criteria.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              icon: <FaUserFriends size={40} className="mx-auto text-gray-700" />,
              title: "Inquiry",
              desc: "You're already here... Welcome!",
            },
            {
              icon: <FaUsers size={40} className="mx-auto text-gray-700" />,
              title: "Expert Counselling",
              desc: "Our expert will talk to you and guide you based on your requirements.",
            },
            {
              icon: <FaFileAlt size={40} className="mx-auto text-gray-700" />,
              title: "Eligibility",
              desc: "Sign-up with us to check your eligibility",
            },
            {
              icon: <FaFolderOpen size={40} className="mx-auto text-gray-700" />,
              title: "Documentation",
              desc: "All your documents will be compiled to create a strong application.",
            },
            {
              icon: <FaRegFile size={40} className="mx-auto text-gray-700" />,
              title: "Processing",
              desc: "Assists you in every step while filing the visa application.",
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {step.icon}
              <h3 className="font-semibold mt-3">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
