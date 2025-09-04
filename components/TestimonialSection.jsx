"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Heading from "./common/Heading";
import { useLocale } from "next-intl";

const TestimonialSection = () => {
  const language = useLocale();
  const swiperRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Pooja Gupta",
      country: "Tourist Visa",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      description:
        "I recently applied for my Tourist Visa through GloEdge Visas, and I must say the experience was absolutely smooth and stress-free. The team guided me step by step—from documentation to submission—making the entire process very clear and simple. What I appreciated the most was their transparency and timely updates. They were always available to answer my queries and ensured that I was well-prepared at every stage. Thanks to their professionalism and expertise, I received my visa without any hassle. I truly recommend GloEdge Visas to anyone planning to travel abroad. Their dedication and client-focused approach make them a trusted partner for fulfilling travel dreams.",
      rating: 5,
    },
    {
      id: 2,
      name: "Nikunj Chaddha",
      country: "Canada PR",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
      description:
        "I recently started my Canada PR process through Skilled PR Visa with GloEdge Visas, and I feel very confident about my decision. Their knowledge and experience in immigration services gave me peace of mind. I would highly recommend GloEdge. The team has been extremely professional, supportive, and transparent. Every step was explained in detail, and they made sure I was well-prepared with the right documents and timelines. I truly appreciate the way Prabhjout Ji and the GloEdge team handled my case with personal attention and care. Their knowledge and experience in immigration services gave me peace of mind. I would highly recommend GloEdge Visas to anyone looking to apply for Canada PR through the skilled migration pathway.",
      rating: 5,
    },
    {
      id: 3,
      name: "Megha Gautam",
      country: "Canada PR",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
      description:
        "I am extremely happy to share that I received my Canada PR through Spouse Sponsorship with the guidance of GloEdge Visas. From the very beginning, Prabhjot Singh was a great support patiently guiding me, answering all my queries, and making sure my documentation was handled perfectly. The entire process felt smooth and stress-free because of their professionalism and genuine care. I am truly grateful to Prabhjot Ji and the GloEdge team for helping me achieve this big milestone in my life. I would highly recommend GloEdge Visas to anyone planning their immigration journey.",
      rating: 5,
    },
  ];

  const handleToggle = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
      swiperRef.current?.autoplay?.start();
    } else {
      setExpandedId(id);
      swiperRef.current?.autoplay?.stop();
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left">
            <Heading
              text={"What Our Clients Say"}
              className="text-4xl font-bold text-gray-900 mb-4 md:mb-0"
            />
            <p className="text-lg text-gray-600 max-w-2xl">
              Hear success stories from clients who achieved their immigration
              dreams with GloEdge
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href={`/${language}/testimonials`}
              className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md inline-block"
            >
              View All Testimonials
            </Link>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={800}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 }, // mobile
                640: { slidesPerView: 1 }, // sm
                768: { slidesPerView: 2 }, // md
                1024: { slidesPerView: 3 }, // lg+
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="bg-white my-6 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-red-600 font-medium text-sm">
                        {testimonial.country}
                      </p>
                    </div>

                    <p
                      className={`text-gray-600 leading-relaxed ${
                        expandedId === testimonial.id ? "" : "line-clamp-2"
                      }`}
                    >
                      {testimonial.description}
                    </p>

                    <button
                      className="text-red-500 font-semibold hover:text-gray-600 transition-colors duration-200 text-sm"
                      onClick={() => handleToggle(testimonial.id)}
                    >
                      {expandedId === testimonial.id
                        ? "Read Less..."
                        : "Read More..."}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button
              className="custom-prev absolute left-[-50px] top-1/2 z-10 -translate-y-1/2 transform bg-black/30 text-white p-2 rounded-full hover:bg-red-500"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="custom-next absolute right-[-50px] top-1/2 z-10 -translate-y-1/2 transform bg-black/30 text-white p-2 rounded-full hover:bg-red-500"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
