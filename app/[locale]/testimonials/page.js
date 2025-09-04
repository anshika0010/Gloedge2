"use client";
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const page = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Canada PR Visa",
      description:
        "Y-Axis helped me navigate through the complex immigration process with ease. Their expert guidance made my dream of moving to Canada a reality.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoThumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Patel",
      country: "Australia Work Visa",
      description:
        "From document preparation to visa approval, Y-Axis provided exceptional service throughout my journey.",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      videoThumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      country: "UK Study Visa",
      description:
        "The Y-Axis team made my study abroad dreams come true. Excellent service and support!",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      videoThumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      country: "Canada PR Visa",
      description:
        "Y-Axis helped me navigate through the complex immigration process with ease. Their expert guidance made my dream of moving to Canada a reality.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoThumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 5,
      name: "Rajesh Patel",
      country: "Australia Work Visa",
      description:
        "From document preparation to visa approval, Y-Axis provided exceptional service throughout my journey.",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      videoThumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      country: "UK Study Visa",
      description:
        "The Y-Axis team made my study abroad dreams come true. Excellent service and support!",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      videoThumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
  ];

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  const closeModal = () => {
    setPlayingVideo(null);
  };

  return (
    <>
    <Navbar/>
        <section className="bg-gray-50 py-16 px-4 mb-10 mt-35">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE - Testimonials */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Thousands of clients trust us to fulfill their immigration dreams.
            Here are some of their inspiring stories.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden group">
                  <img
                    src={testimonial.videoThumbnail}
                    alt={`${testimonial.name} testimonial`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayVideo(testimonial.id)}
                      className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-transform duration-300 transform group-hover:scale-110 shadow-lg"
                    >
                      <Play className="w-8 h-8 text-white fill-current" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-red-600 font-medium text-sm">
                    {testimonial.country}
                  </p>
                  <p className="text-gray-600 leading-relaxed line-clamp-2">
                    {testimonial.description}
                  </p>
                  <button className="text-red-500 font-semibold hover:text-gray-500 transition-colors duration-200 mt-1">
                    Read More...
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Sidebar */}
        <aside className="bg-white rounded-2xl shadow-lg p-6 space-y-8 lg:sticky lg:top-20 self-start">
          {/* Banner */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
              alt="Immigration Banner"
              className="w-full h-40 object-cover"
            />
          </div>

          {/* Sidebar Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              With 25+ years of experience, Y-Axis has transformed thousands of
              lives by helping them achieve global opportunities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Trusted by 1M+ clients</li>
              <li>✅ 25+ years of excellence</li>
              <li>✅ Global offices in 10+ countries</li>
              <li>✅ Personalized immigration guidance</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 shadow-lg transition-all duration-300 inline-block"
            >
              Book a Free Consultation
            </Link>
          </div>
        </aside>
      </div>

      {/* Video Popup */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-lg overflow-hidden relative w-full max-w-3xl aspect-video">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-red-600 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={
                testimonials.find((t) => t.id === playingVideo).videoUrl +
                "?autoplay=1"
              }
              title="Client Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
    <Footer/>
    </>
  );
};

export default page;
