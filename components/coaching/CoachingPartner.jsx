import React from "react";

const CoachingPartner = () => {
  return (
    <div className="container mx-auto bg-white border border-gray-300 p-8 rounded-md">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-2">
        Why choose Y-Axis as your Coaching Partner
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We want to transform you to become a Global Indian
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {/* Coaching Material */}
        <div>
          <div className="flex justify-center mb-3">
            <img
              src="https://img.icons8.com/ios-filled/50/fa314a/book.png"
              alt="Coaching Material"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-semibold mb-2">Coaching Material</h3>
          <p className="text-gray-600 text-sm">
            World class coaching material from sources like British Council &
            Pearson.
          </p>
        </div>

        {/* Partnership */}
        <div>
          <div className="flex justify-center mb-3">
            <img
              src="https://img.icons8.com/ios-filled/50/fa314a/conference-call.png"
              alt="Partnership"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-semibold mb-2">Partnership</h3>
          <p className="text-gray-600 text-sm">
            Platinum partner with British Council & IDP
          </p>
        </div>

        {/* Multiple Ways to Learn */}
        <div>
          <div className="flex justify-center mb-3">
            <img
              src="https://img.icons8.com/ios-filled/50/fa314a/training.png"
              alt="Multiple way to learn"
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-semibold mb-2">Multiple way to learn</h3>
          <p className="text-gray-600 text-sm">
            Multiple ways to learn - online in-class, live stream and private
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-6 py-2 rounded-sm font-medium hover:bg-red-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CoachingPartner;
