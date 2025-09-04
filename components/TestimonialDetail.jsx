"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/common/Heading";

const testimonial = {
  id: 1,
  name: "Pooja Gupta",
  country: "Tourist Visa",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  description:
    "I recently applied for my Tourist Visa through GloEdge Visas, and I must say the experience was absolutely smooth and stress-free. The team guided me step by step—from documentation to submission—making the entire process very clear and simple. What I appreciated the most was their transparency and timely updates. They were always available to answer my queries and ensured that I was well-prepared at every stage. Thanks to their professionalism and expertise, I received my visa without any hassle. I truly recommend GloEdge Visas to anyone planning to travel abroad. Their dedication and client-focused approach make them a trusted partner for fulfilling travel dreams.",
  rating: 5,
};

const TestimonialDetail = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <Heading
            text="Client Testimonial"
            className="text-4xl font-bold text-gray-900 mb-4"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read how our clients achieved their immigration dreams with GloEdge.
          </p>
        </div>

        {/* Single Testimonial Card */}
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
    </section>
  );
};

export default TestimonialDetail;
