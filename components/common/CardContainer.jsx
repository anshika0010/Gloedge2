"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardimg from "@/images/blogcard.jpg"
import BlogCard from "./BlogCard";
import { ArrowRight, Calendar, User, Share2, Bookmark } from "lucide-react";
import { useLocale } from "next-intl";


gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCardContainer({}) {
 const language = useLocale();
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".animated-card");

    gsap.set(cards, { y: 50, opacity: 0 }); 

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Countries for Student Visa Applications in 2024",
      company: "Visa Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "Aug 20, 2024",
      readTime: "5 min read",
      category: "Education",
      views: "2.4k",
      likes: 156,
      excerpt:
        "Discover the most popular destinations for international students and learn about their visa requirements...",
    },
    {
      id: 2,
      title: "Complete Guide to Start-up Visa Requirements",
      company: "Business Immigration Co.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      author: "Michael Chen",
      date: "Aug 18, 2024",
      readTime: "7 min read",
      category: "Business",
      views: "3.1k",
      likes: 234,
      excerpt:
        "Everything you need to know about launching your startup abroad with the right visa documentation...",
    },
    {
      id: 3,
      title: "Success Stories: From Application to Approval",
      company: "Global Visa Services",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      author: "Emma Rodriguez",
      date: "Aug 15, 2024",
      readTime: "4 min read",
      category: "Success Stories",
      views: "1.8k",
      likes: 189,
      excerpt:
        "Real stories from clients who successfully navigated their visa journey with expert guidance...",
    },
    {
      id: 4,
      title: "Understanding Work Permit Processing Times",
      company: "Career Migration Ltd.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      author: "David Kumar",
      date: "Aug 12, 2024",
      readTime: "6 min read",
      category: "Work Permits",
      views: "2.9k",
      likes: 178,
      excerpt:
        "Get insights into current processing times and how to expedite your work permit application...",
    },
    {
      id: 5,
      title: "Family Reunification Visa: Step by Step Process",
      company: "Family First Immigration",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      author: "Lisa Thompson",
      date: "Aug 10, 2024",
      readTime: "8 min read",
      category: "Family",
      views: "2.2k",
      likes: 145,
      excerpt:
        "A comprehensive guide to bringing your loved ones closer through family reunification programs...",
    },
    {
      id: 6,
      title: "Digital Nomad Visas: The Future of Remote Work",
      company: "Remote Work Solutions",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop",
      author: "Alex Parker",
      date: "Aug 8, 2024",
      readTime: "5 min read",
      category: "Remote Work",
      views: "4.5k",
      likes: 312,
      excerpt:
        "Explore the growing trend of digital nomad visas and find the perfect destination for remote work...",
    },
  ];


  return (
    <section ref={containerRef} className="pr-2">
     
          <div className="">
      {/* Main Blog Section */}
      <div className="md:col-span-9 bg-white shadow p-6 w-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16 relative overflow-hidden">
        <div className="mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-semibold">
                Latest Updates
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black  mb-4">
              Insights & Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay ahead with expert advice, inspiring success stories, and the
              latest immigration trends from industry professionals
            </p>
          </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((card,index) => (
          <div key={index} className="animated-card">
            <BlogCard post={card} language={language}/>
          </div>
        ))}
      </div>
          {/* Load More */}

        </div>
      </div>

      {/* Sidebar */}
      
    </div>
    </section>
  );
}