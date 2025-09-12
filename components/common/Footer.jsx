"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
const Footer = () => {
  const language = useLocale();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-100 pb-2 pt-15">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  About Gloedge
                </a>
              </li>
              <li>
                <a
                  href="/en/career"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  CSR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Office Network
                </a>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Newsletter
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Success Videos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Social Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Visa Success
                </a>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Blogs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${language}/blogs`}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Immigration Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/blogs`}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Overseas Jobs
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/blogs`}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href={`/${language}/blogs`}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Visa Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Indian Languages */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Indian Languages
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Tamil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Gujarati
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Telugu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
                >
                  Marathi
                </a>
              </li>
            </ul>
          </div>

          {/* Foreign Languages */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Foreign Languages
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm"
                >
                  Arabic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm"
                >
                  French
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm"
                >
                  Chinese
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm"
                >
                  German
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 text-sm"
                >
                  Korean
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <img
                  src="https://flagcdn.com/16x12/in.png"
                  alt="India"
                  className="mt-1"
                />
                <div>
                  <p className="text-gray-900 font-medium text-sm">INDIA</p>
                  <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                    +91 8878-8878-41
                  </p>
                  <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                    Info@gloedgevisas.com
                  </p>
                  <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                    www.gloedge.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Country Offices */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pt-8 border-t border-gray-300">
          <div className="flex items-start space-x-2">
            <img
              src="https://flagcdn.com/16x12/au.png"
              alt="Australia"
              className="mt-1"
            />
            <div>
              <p className="text-gray-900 font-medium text-sm">AUSTRALIA</p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                + 61 399394818
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                australia@y-axis.com.au
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                www.y-axis.com.au
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <img
              src="https://flagcdn.com/16x12/ae.png"
              alt="UAE"
              className="mt-1"
            />
            <div>
              <p className="text-gray-900 font-medium text-sm">UAE</p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                +971 (0)42483900
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                dubai@y-axis.com
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                www.y-axis.ae
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <img
              src="https://flagcdn.com/16x12/gb.png"
              alt="UK"
              className="mt-1"
            />
            <div>
              <p className="text-gray-900 font-medium text-sm">UK</p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                +44 1253226009
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                info@y-axis.co.uk
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                www.y-axis.co.uk
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <img
              src="https://flagcdn.com/16x12/ca.png"
              alt="Canada"
              className="mt-1"
            />
            <div>
              <p className="text-gray-900 font-medium text-sm">Canada</p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                +1 226 243 2213
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                info@y-axis.ca
              </p>
              <p className="text-gray-600 text-xs hover:text-red-600 cursor-pointer transition-colors duration-300">
                www.y-axis.ca
              </p>
            </div>
          </div>
        </div> */}

        {/* Social Media & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-300">
          {/* Social Media */}
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            <span className="text-gray-900 font-medium text-sm">FOLLOW US</span>
            <div className="flex space-x-3">
              <a
                href="https://www.youtube.com/@GloEdgeVisas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded hover:bg-red-700 hover:scale-110 transform transition-all duration-300"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://x.com/GloEdgeVisas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/gloedge_visas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/gloedge-visas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.facebook.com/gloedgevisas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-2 rounded hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://share.google/mg1Ehoj857XsHreRG"
                target="_blank"
                className="bg-red-700 p-2 rounded hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 font-medium text-sm">
              SUBSCRIBE NEWSLETTER
            </span>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-l text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="bg-gray-600 hover:bg-red-600 text-white px-4 py-2 rounded-r text-sm transition-all duration-300 hover:scale-105 transform"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Logo and Services */}
      <div className="bg-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <Image
                src={"/logo2.png"}
                alt="gloedge Logo"
                width={1000}
                height={1000}
                className="h-full w-96 object-contain"
              />
            </div>

            <div className="text-sm text-gray-600 lg:text-left border-l border-gray-300 pl-6">
              <div className="space-y-2">
                <div>
                  <span className="font-bold">
                    Eligibility Points Calculator:
                  </span>
                  <span className="ml-2">
                    Australia | Canada | Germany | UK
                  </span>
                </div>
                <div>
                  <span className="font-bold">PR Visa:</span>
                  <span className="ml-2">Australia PR | Canada PR</span>
                </div>
                <div>
                  <span className="font-bold">Work Visas:</span>
                  <span className="ml-2">
                    Australia | Canada | Germany | Singapore | UK | USA | Dubai
                    | Ireland | Luxembourg | Netherlands
                  </span>
                </div>
                <div>
                  <span className="font-bold">Digital Nomad Visas:</span>
                  <span className="ml-2">
                    Canada | Italy | Norway | Portugal | Spain
                  </span>
                </div>
                <div>
                  <span className="font-bold">Job Seeker Visas:</span>
                  <span className="ml-2">Austria | Portugal | Sweden</span>
                </div>
                <div>
                  <span className="font-bold">Student Visas:</span>
                  <span className="ml-2">
                    Australia | Canada | Europe | Germany | Netherlands |
                    Switzerland | UK | USA
                  </span>
                </div>
                <div>
                  <span className="font-bold">Visit Visas:</span>
                  <span className="ml-2">
                    Australia | Canada | Dubai | Schengen | UK | USA
                  </span>
                </div>
                <div>
                  <span className="font-bold">Dependent Visas:</span>
                  <span className="ml-2">
                    Australia | Canada | Germany | UK | USA
                  </span>
                </div>
                <div>
                  <span className="font-bold">Business Visas:</span>
                  <span className="ml-2">
                    Australia | Canada | Germany | UK | USA
                  </span>
                </div>
                <div>
                  <span className="font-bold">Coaching:</span>
                  <span className="ml-2">
                    IELTS | IELTS-SPRINT | PTE | PTE-Core | GMAT | GRE | TOEFL |
                    CELPIP | D-SAT | OET | German Language | Free Demo Classes
                  </span>
                </div>
                <div>
                  <span className="font-bold">News:</span>
                  <span className="ml-2">
                    Australia Immigration News | Canada Immigration News |
                    Schengen News | US Immigration News | UK Immigration News
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links and Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-200 mt-8">
            <div className="flex flex-wrap space-x-6 mb-4 lg:mb-0 text-sm">
              <Link
                href={`/${language}/refund-policy`}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 hover:underline"
              >
                Refund Policy
              </Link>
              <Link
                href={`/${language}/terms-and-conditions`}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 hover:underline"
              >
                Terms & Conditions
              </Link>

              <Link
                href={`/${language}/privacy-policy`}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
              <a
                href={`/${language}/sitemap.xml`}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300 hover:underline"
              >
                Sitemap
              </a>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} GloEdge Visas. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
