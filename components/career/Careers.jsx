import React from "react";
import career5 from "../../images/career5.jpg";
import Image from "next/image";
export default function Careers() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      {/* Section 3: Growth Mindset */}
      <section className="px-6 md:px-16 py-12 bg-gray-50">
        <h3 className="text-3xl md:text-3xl font-semibold mb-4">
          3. Growth Mindset- Not Yet
        </h3>
        <p className="text-purple-700 font-medium mb-4">
          Platform | Learning | Open to change | Transparency | Meritocracy
        </p>
        <p className="text-gray-700">
          Since 1999 Gloedge has fostered a culture of growth through our
          philosophy of "Not Yet". Our aim is to continually learn and grow in
          order to prepare for the challenges ahead. Our openness to change, our
          investments in technology, our cutting-edge knowledge systems, our
          focus on merit, and our integrity, have made us the employer of choice
          for dynamic individuals seeking growth.
        </p>
      </section>

      {/* Section 4: Earn More */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <h3 className="text-3xl md:text-3xl font-semibold mb-4">
          4. Earn more
        </h3>
        <p className="text-gray-700 mb-6">
          Know what? We share nearly 12% of our Gross Sales with our Teams
          instantly. That is nearly 25% of our profits. More than 46% of our
          Sales Consultants earn more than 100% of their salary in incentives
          and commissions alone. 38% take home between 90%-50% of their salary
          in incentives and commissions and rest at least 25%. This is in
          addition to their monthly salary. You can take home 2x of your salary
          in incentives alone, every month.
        </p>
      </section>

      {/* Compensation & Benefits */}
      <section className="py-10 px-6 md:px-16 bg-purple-700 text-white text-center">
        <h4 className="text-3xl font-semibold mb-8">
          Great Compensation & Benefits
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
          {[
            "Competitive Salaries",
            "Statutory Benefits",
            "Medical Insurance",
            "Paid Leaves",
            "Generous Incentives",
            "Uncapped commissions",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center py-3 px-4 border-3 border-white rounded"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Learn & Grow */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          5. Opportunities to Learn & Grow
        </h3>
        <p className="text-purple-700 font-medium mb-4">
          Life Long Learning | Great Training | Grow in Responsibilities
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Our exceptional learning systems offer you the opportunity to
          continuously grow in knowledge and skills. We believe that each
          Y-Axian is a learner for a lifetime and reward those who apply these
          learnings to demonstrate their growth in their career. Our streamlined
          growth tracks allow you to explore opportunities in your areas of
          interest.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Y-Manager's Track",
              img:career5,
            },
            {
              title: "Y-Specialist Track",
              img: career5,
            },
            {
              title: "Y-Global Track",
              img: career5,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-800">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Cutting Edge Technology */}
      <section className="px-6 md:px-16 py-12 bg-gray-50">
        <h3 className="text-3xl md:text-2xl font-semibold mb-4">
          6. Cutting edge technology
        </h3>
        <p className="text-gray-700 mb-6">
          Gloedge is a 100% digital company. We use cutting-edge technologies
          like Salesforce CRM, Genesys Call Center Solutions and O365 to run our
          global operations. We are amongst the largest users of Salesforce.
        </p>
        <p className="text-gray-700 mb-6">
          Our extensive technical infrastructure collects data from across our
          systems and displays it on an intuitive dashboard. This level of
          sophistication allows us to be transparent, responsive, and create a
          culture of merit that rewards performers immediately.
        </p>

        <div className="flex gap-8 items-center mt-6">
          <img
            src="https://www.y-axis.com/lp/careers1/images/genesys-logo.svg"
            alt="Salesforce"
            className="h-10"
          />
          <img
            src="https://www.y-axis.com/lp/careers1/images/salesforce-logo.svg"
            alt="Genesys"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="h-10"
          />
        </div>
      </section>
    </div>
  );
}
