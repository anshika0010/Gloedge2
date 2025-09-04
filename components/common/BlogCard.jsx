"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User, Share2, Bookmark } from "lucide-react";



export default function BlogCard({post,
  language
}) {
  // for interactive tilt + glare
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useMotionTemplate`${y}deg`;
  const rY = useMotionTemplate`${x}deg`;

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    // map cursor to small tilt range
    const tiltX = ((relX / rect.width) - 0.5) * 6; // -3deg to +3deg
    const tiltY = ((relY / rect.height) - 0.5) * -6; // -3deg to +3deg

    x.set(tiltX.toFixed(2));
    y.set(tiltY.toFixed(2));
  }

  function resetTilt() {
    x.set(0);
    y.set(0);
  }

    

  return (
    <Link
      href={`/${language}/blog/detail`}
      className={`relative overflow-hidden `}
      aria-label={post.title}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX: rX,
          rotateY: rY,
          transformStyle: "preserve-3d",
        }}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden border border-gray-100 hover:border-red-200"
      >
                   
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                 

                  {/* Actions */}
                </div>

                {/* Company Banner */}
                <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-4 py-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <p className="text-xs font-bold truncate">{post.company}</p>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  {/* Read More */}
                  <button className="inline-flex text-red-600 hover:text-black items-center px-3 py-2 text-xs rounded-full transition-all duration-300 transform hover:scale-105">
                    <span className="mr-1 font-medium">Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </motion.div>
      
    </Link>
  );
}
