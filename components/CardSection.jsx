import React from "react";

const CardSection = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://apexvisas.com/wp-content/uploads/2025/01/canada_monuments.jpg",
      title: "Canada",
      description:
        "Discover breathtaking mountain landscapes and embark on unforgettable hiking adventures through pristine wilderness.",
    },
    {
      id: 2,
      image:
        "https://apexvisas.com/wp-content/uploads/2025/01/Australia-Monuments.jpg",
      title: "Australia",
      description:
        "Experience the calming beauty of crystal-clear waters and endless horizons that stretch beyond imagination.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
      title: "America",
      description:
        "Immerse yourself in the tranquil atmosphere of ancient forests filled with towering trees and wildlife.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      title: "Desert Mysteries",
      description:
        "Explore the enigmatic beauty of vast desert landscapes painted with golden sands and starlit skies.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop&crop=center",
      title: "City Lights",
      description:
        "Experience the vibrant energy of metropolitan life with stunning skylines and bustling urban adventures.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop&crop=center",
      title: "Lakeside Peace",
      description:
        "Find perfect tranquility beside pristine lakes surrounded by rolling hills and peaceful nature sounds.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Explore Amazing Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            COUNTRIES WE OFFER Trending Visas From{" "}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 ease-out overflow-hidden border border-gray-100"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">
                  Featured
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title} 
                </h3>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Explore Now
                </button>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
