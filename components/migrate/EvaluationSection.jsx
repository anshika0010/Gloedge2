import {
  FaEnvelope,
  FaCog,
  FaUsers,
  FaFileAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function EvaluationSection() {
  const items = [
    { icon: <FaEnvelope size={40} />, label: "Score Card" },
    { icon: <FaCog size={40} />, label: "Country Profile" },
    { icon: <FaUsers size={40} />, label: "Occupation Profile" },
    { icon: <FaFileAlt size={40} />, label: "Documentation List" },
    { icon: <FaMoneyCheckAlt size={40} />, label: "Cost & Time Estimation" },
  ];

  return (
    <section className="bg-[#6E2A8F] container mx-auto text-white py-16 px-6">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Yourself Evaluated
        </h2>
        <p className="mb-12 text-lg max-w-3xl mx-auto">
          Migration is a simple technical procedure. Our specialists assess your
          profile to guide you in making a knowledgeable choice. The report
          provides details on your eligibility evaluation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-lg py-8 flex flex-col items-center justify-center hover:bg-red-500 transition"
            >
              <div className="text-white mb-4">{item.icon}</div>
              <p className="font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-purple-700 transition">
          Get Evaluated →
        </button>
      </div>
    </section>
  );
}
