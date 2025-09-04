"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const ReelsOfTheWeek = () => {
   const swiperRef = useRef(null);
   
  const reels = [
    {
      id: 1,
      title: "Coming Soon",
      subtitle: "",
      year: "",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
      textColor: "text-white",
      image:
        "/reel/5.png",
    },
    {
      id: 2,
      title: "Coming Soon",
      subtitle: "",
      description: "",
      bgColor: "bg-gradient-to-br from-gray-900 to-red-900",
      textColor: "text-white",
      image:
        "/reel/1.png",
    },
    {
      id: 3,
      title: "Coming Soon",
      location: "",
      highlight: "",
      bgColor: "bg-gradient-to-br from-gray-900 to-red-900",
      textColor: "text-white",
      image:
        "/reel/2.png",
    },
    {
      id: 4,
      title: "Coming Soon",
      location: "",
      highlight: "",
      bgColor: "bg-gradient-to-br from-green-200 to-yellow-200",
      textColor: "text-white",
      image:
        "/reel/3.png",
    },
    {
      id: 5,
      title: "Coming Soon",
      subtitle: "",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
      textColor: "text-white",
      image:
        "/reel/4.png",
    },
    {
      id: 6,
      title: "Coming Soon",
      subtitle: "",
      year: "",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
      textColor: "text-white",
      image:
        "/reel/6.png",
    },
    {
      id: 7,
      title: "Coming Soon",
      subtitle: "",
      description: "",
      bgColor: "bg-gradient-to-br from-gray-900 to-red-900",
      textColor: "text-white",
      image:
        "/reel/7.png",
    },
    {
      id: 8,
      title: "Coming Soon",
      location: "",
      highlight: "",
      bgColor: "bg-gradient-to-br from-gray-900 to-red-900",
      textColor: "text-white",
      image:
        "/reel/8.png",
    },
    {
      id: 9,
      title: "Coming Soon",
      location: "",
      highlight: "",
      bgColor: "bg-gradient-to-br from-green-200 to-yellow-200",
      textColor: "text-white",
      image:
       "/reel/9.png",
    },
    {
      id: 10,
      title: "Coming Soon",
      subtitle: "",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
      textColor: "text-white",
      image:
       "/reel/10.png",
    },
  ];


  return (
    <div className="w-full py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Heading text={"Reels Of The Week"} className="text-red-600 flex justify-center text-4xl font-bold text-gray-900 mb-2 " />
        </div>

        <div className="relative">
          {/* Reels Container */}
          <div className="container mx-auto px-10">
         <div className="relative ">
           <Swiper
modules={[Navigation, Autoplay]} 
              spaceBetween={30}
              slidesPerView={5}
              autoplay={{
                delay: 2000, 
                disableOnInteraction: false,
              }}
               navigation={{
          nextEl: '.next-reel',
          prevEl: '.reel-prev',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
              speed={1000}
              loop={true}
             
              className=""
    >
     
{reels.map((reel,index) => (
      <SwiperSlide key={index}>
              <div
                
                className="flex-shrink-0 w-50 h-80  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div
                  className={`relative w-full h-full ${reel.bgColor} p-6 flex flex-col justify-between`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${reel.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  
                  {/* Content */}
                  <div className="relative z-10">
                    
                    <div className={`${reel.textColor} space-y-2`}>
                      {reel.title && (
                        <h3 className="text-xl font-bold leading-tight">
                          {reel.title}
                        </h3>
                      )}
                      {reel.subtitle && (
                        <p className="text-lg opacity-90">{reel.subtitle}</p>
                      )}
                      {reel.year && (
                        <p className="text-xl font-semibold">{reel.year}</p>
                      )}
                      {reel.location && (
                        <p className="text-lg opacity-90">{reel.location}</p>
                      )}
                      {reel.description && (
                        <p className="text-base opacity-80 mt-2">
                          {reel.description}
                        </p>
                      )}
                    </div>
                  </div>

                 

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
      </SwiperSlide>
            ))}
    </Swiper>
        <button 
        className="reel-prev absolute left-[-50px] top-1/2 z-10 -translate-y-1/2 transform bg-black/30 text-white p-2 rounded-full hover:bg-red-500"
        aria-label="Previous Reel"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <button 
        className="next-reel absolute right-[-50px] top-1/2 z-10 -translate-y-1/2 transform bg-black/30 text-white p-2 rounded-full hover:bg-red-500"
        aria-label="Next Reel"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
         </div>
         </div>
        </div>
      </div>

      
    </div>
  );
};

export default ReelsOfTheWeek;