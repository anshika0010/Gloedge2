import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa";
import diduknow from "@/images/Didyouknow.webp";
import Heading from "../common/Heading";
export default function DidYouKnow() {
  const updates = [
    "Canada Immigration Updates",
    "Australia Immigration Updates",
    "USA Immigration Updates",
    "UK Immigration Updates",
    "Schengen Immigration Updates",
  ];

  return (
    <section className="bg-white border border-gray-300 my-3 p-6 md:p-10 container mx-auto">
      <div className=" grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          {/* Icon */}
          <div className="text-4xl text-black mb-4">
            <FaRegLightbulb />
          </div>

          {/* Heading */}
          <Heading text={"Did you know?"} className={"text-2xl md:text-3xl font-bold mb-4"}/>

          {/* Paragraph */}
          <p className="text-gray-700 mb-6">
            The number of international migrants has grown by 49% since 2000,
            currently there are 281 million international migrants around the
            world.
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            {updates.map((update, index) => (
              <button
                key={index}
                className="w-full text-left border border-gray-300 px-4 py-3 font-medium hover:bg-red-600 hover:text-white transition"
              >
                {update}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content (Image with vertical red bar) */}
        <div className="relative flex items-center">
          {/* Red Bar */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-24 bg-red-500"></div>

          {/* Image */}
          <div className="pl-6 w-full">
            <Image
              src={diduknow}
              alt="Did you know"
              width={600}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
