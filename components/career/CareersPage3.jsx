import React from "react";
import {
  Briefcase,
  Calendar,
  Clock,
  Home,
  Umbrella,
  Dumbbell,
} from "lucide-react";
import Image from "next/image";
import career4 from "../../images/career4.jpg";
export default function CareersPage3() {
  return (
    <div className="w-full font-sans">
      {/* Section 7: Meritocracy */}
      <section className="px-6 md:px-16 py-12 bg-gray-50">
        <h3 className="text-xl md:text-2xl font-bold mb-4">7. Meritocracy</h3>
        <p className="text-gray-700">
          We hire, reward, and promote talent purely based on merit. You are
          judged solely by your efforts, skills, abilities, and performance,
          regardless of gender, race, class, national origin, or sexual
          orientation.
        </p>
      </section>

      {/* Section 8: Work Life Balance */}
      <section className="px-6 md:px-16 py-12 bg-white text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          8. Work Life Balance
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          We believe it is critical to manage your work and the rest of your
          life in order to create meaning for yourself. Our policies allow for
          flexibility to include your family, your preferred timings and your
          health goals.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">
          <div className="flex flex-col items-center">
            <Briefcase className="h-8 w-8 text-purple-700 mb-2" />
            <p>Day jobs</p>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="h-8 w-8 text-purple-700 mb-2" />
            <p>Fixed schedules</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 text-purple-700 mb-2" />
            <p>Flexible shifts</p>
          </div>
          <div className="flex flex-col items-center">
            <Home className="h-8 w-8 text-purple-700 mb-2" />
            <p>Work in the office closest to you</p>
          </div>
          <div className="flex flex-col items-center">
            <Umbrella className="h-8 w-8 text-purple-700 mb-2" />
            <p>Paid leave</p>
          </div>
          <div className="flex flex-col items-center">
            <Dumbbell className="h-8 w-8 text-purple-700 mb-2" />
            <p>On-site fitness classes</p>
          </div>
        </div>
      </section>

      {/* Section 9: Safe place to work */}
      <section className=" flex px-6 md:px-16 py-12 bg-gray-50">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            9. Safe place to work
          </h3>
          <p className="text-gray-700 mb-6">
            We take the safety & security of our staff very seriously. We have
            invested in several physical security measures at all our offices to
            ensure you are safe at all times. Our policies reflect our
            commitment to creating a secure work environment you enjoy coming
            to.
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
            <li>All our offices are centrally located</li>
            <li>Access card, CCTV and on-site security at offices</li>
            <li>
              49% of our workforce are women who appreciate our women-friendly
              policies
            </li>
            <li>Women are never assigned night shifts</li>
          </ul>
        </div>
        <div className="w-1/2">
          <Image
            src={career4}
            width={0}
            height={0}
            alt="Safe workplace 1"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section 10: Honest Employer */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          10. Honest taxpayer & ethical employer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Y-Axis is a good citizen who pays 100% of all the taxes due.
            </li>
            <li>
              We comply with every regulation with every statutory authority.
            </li>
            <li>
              We are privately held and have negligible debt allowing us to
              operate at the highest values without compromise.
            </li>
            <li>We will never do anything that you would not be proud of.</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We have written counselling notes and clear contracts with our
              clients.
            </li>
            <li>
              Our prices have integrity and don’t change based on the client.
            </li>
            <li>
              We have accountability internally as all transactions are
              digitized.
            </li>
            <li>
              Student Counsellors: Our counselling has more integrity as we are
              not biased by any universities. We work for you.
            </li>
          </ul>
        </div>
      </section>

      {/* Snapshot */}
      <section className="px-6 md:px-16 py-12 bg-gray-50 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-10">Y-Axis snapshot</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-purple-700 font-bold text-2xl">
          <div>
            <p>100K+</p>
            <span className="block text-gray-700 text-sm mt-2">
              Clients served
            </span>
          </div>
          <div>
            <p>1500+</p>
            <span className="block text-gray-700 text-sm mt-2">Employees</span>
          </div>
          <div>
            <p>25Y+</p>
            <span className="block text-gray-700 text-sm mt-2">
              Years of service
            </span>
          </div>
          <div>
            <p>50+</p>
            <span className="block text-gray-700 text-sm mt-2">
              Offices worldwide
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
