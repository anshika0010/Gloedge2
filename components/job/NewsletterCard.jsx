"use client";
import { useState } from "react";

const NewsletterCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const newsletters = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop&crop=center",
      title: "Tech Weekly Digest",
      description:
        "Stay ahead of the curve with the latest technology trends, breakthrough innovations, and industry insights delivered straight to your inbox every week.",
      category: "Technology",
      readTime: "5 min read",
      date: "Aug 25, 2025",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop&crop=center",
      title: "Design Inspiration Hub",
      description:
        "Discover stunning design concepts, creative processes, and visual storytelling techniques from industry-leading designers and creative agencies.",
      category: "Design",
      readTime: "7 min read",
      date: "Aug 24, 2025",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=240&fit=crop&crop=center",
      title: "Business Growth Insights",
      description:
        "Unlock your entrepreneurial potential with actionable strategies, market analysis, and success stories from thriving businesses worldwide.",
      category: "Business",
      readTime: "6 min read",
      date: "Aug 23, 2025",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=240&fit=crop&crop=center",
      title: "Health & Wellness Guide",
      description:
        "Transform your lifestyle with evidence-based health tips, wellness practices, and nutritional guidance for a balanced and fulfilling life.",
      category: "Wellness",
      readTime: "4 min read",
      date: "Aug 22, 2025",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=240&fit=crop&crop=center",
      title: "Travel Explorer",
      description:
        "Embark on extraordinary adventures with insider travel tips, hidden destinations, and cultural experiences from around the globe.",
      category: "Travel",
      readTime: "8 min read",
      date: "Aug 21, 2025",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&crop=center",
      title: "Marketing Mastery",
      description:
        "Master the art of modern marketing with cutting-edge strategies, campaign analysis, and consumer psychology insights.",
      category: "Marketing",
      readTime: "6 min read",
      date: "Aug 20, 2025",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      Design: "bg-purple-100 text-purple-800",
      Business: "bg-green-100 text-green-800",
      Wellness: "bg-pink-100 text-pink-800",
      Travel: "bg-orange-100 text-orange-800",
      Marketing: "bg-indigo-100 text-indigo-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
            <div className="block mb-3">
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-semibold">
                Latest Updates
              </span>
            </div>
          <div className="inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Newsletter Collection
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of premium newsletters designed to
            inspire, educate, and keep you ahead of the curve
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                hoveredCard === newsletter.id ? "rotate-1" : ""
              }`}
              onMouseEnter={() => setHoveredCard(newsletter.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{newsletter.date}</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {newsletter.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {newsletter.title}
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {newsletter.description}
                </p>

                {/* Read More Button */}
                <div className="">
                  <button className="w-full flex justify-center group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden">
                    <span className="relative z-10">Read More</span>
                    <svg
                      className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterCards;