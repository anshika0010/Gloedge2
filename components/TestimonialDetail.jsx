"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/common/Heading";
import tvisa from "@/images/t-visa.png";
import Link from "next/link";
import Navbar from "./common/Header";
import Footer from "./common/Footer";

const testimonial = {
  id: 1,
  name: "Pooja Gupta",
  country: "Tourist Visa",
  image:
    tvisa,
  description:
    "I recently applied for my Tourist Visa through GloEdge Visas, and I must say the experience was absolutely smooth and stress-free. The team guided me step by step—from documentation to submission—making the entire process very clear and simple. What I appreciated the most was their transparency and timely updates. They were always available to answer my queries and ensured that I was well-prepared at every stage. Thanks to their professionalism and expertise, I received my visa without any hassle. I truly recommend GloEdge Visas to anyone planning to travel abroad. Their dedication and client-focused approach make them a trusted partner for fulfilling travel dreams.",
  rating: 5,
};

const TestimonialDetail = () => {
  return (
<>
<Navbar/>
    <section className="bg-gray-50 py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="max-w-4xl mx-auto lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-64 w-full relative">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 space-y-3">
            <h3 className="text-2xl font-semibold text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-red-600 font-medium text-sm">
              {testimonial.country}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {testimonial.description}
            </p>
          </div>
        </div>
      </div>
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
    </section>
<Footer/>
</>
  );
};

export default TestimonialDetail;