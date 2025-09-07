"use client";
import React, { useState } from "react";
import {
  Globe,
  FileText,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Building,
} from "lucide-react";
import Countries from "@/components/business/Countries";
import VisaProcess from "@/components/business/VisaProcess";
import ClientTestimonial from "@/components/business/ClientTestimonial";
import CTA from "@/components/business/CTA";
import BenefitSection from "@/components/business/BenefitSection";
import IndustriesExpert from "@/components/business/IndustriesExpert";
import StaticsSection from "@/components/business/StaticsSection";
import Navbar from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const page = () => {
  const [businessForm, setBusinessForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryOfInterest: "",
    investmentAmount: "",
    message: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleBusinessSubmit = (e) => {
    console.log("Business form submitted:", businessForm);
    alert("Thank you for your application! We will contact you soon.");
    setBusinessForm({
      fullName: "",
      email: "",
      phone: "",
      countryOfInterest: "",
      investmentAmount: "",
      message: "",
    });
  };

  const handleContactSubmit = (e) => {
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your message! We will get back to you shortly.");
    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="mx-4 ">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expand Your Business Globally with
              <span className="text-yellow-400"> Expert Visa Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Navigate complex immigration laws and secure business visas for
              the world's top economies. Turn your entrepreneurial vision into
              global reality.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Started Today <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Why Choose Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Business Visa Guidance
                </h3>
                <p className="text-gray-600">
                  Expert navigation of complex visa requirements across multiple
                  countries
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Investment Advisory</h3>
                <p className="text-gray-600">
                  Strategic investment planning to meet visa requirements and
                  maximize returns
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Legal Documentation</h3>
                <p className="text-gray-600">
                  Comprehensive preparation of all legal documents and business
                  plans
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Family Relocation Support
                </h3>
                <p className="text-gray-600">
                  Complete support for relocating your family to your new
                  business destination
                </p>
              </div>
            </div>
          </div>
        </section>

        <Countries />

        <VisaProcess />

        <BenefitSection />

        {/* Success Stories with Images */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Tech Startup</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    UK Innovator Visa Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "Secured UK Innovator visa for our AI startup. The team
                    guided us through the complex endorsement process
                    seamlessly."
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span>Sarah Chen, CEO TechFlow</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <DollarSign className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Investment Firm</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">US EB-5 Investment</h3>
                  <p className="text-gray-600 mb-4">
                    "$500K EB-5 investment processed efficiently. Now my family
                    enjoys permanent residency in the US."
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span>Michael Rodriguez, Investor</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Global Expansion</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Canada Start-up Visa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    "Moved our entire operation to Toronto through the Start-up
                    Visa program. Excellent support throughout."
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span>Emma Thompson, Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StaticsSection />
        <ClientTestimonial />
        <IndustriesExpert />

        {/* Business Visa Application Form */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Business Visa Application
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={businessForm.fullName}
                    onChange={(e) =>
                      setBusinessForm({
                        ...businessForm,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={businessForm.email}
                    onChange={(e) =>
                      setBusinessForm({
                        ...businessForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={businessForm.phone}
                    onChange={(e) =>
                      setBusinessForm({
                        ...businessForm,
                        phone: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Country of Interest *
                  </label>
                  <select
                    value={businessForm.countryOfInterest}
                    onChange={(e) =>
                      setBusinessForm({
                        ...businessForm,
                        countryOfInterest: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">United States</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Investment Amount
                  </label>
                  <input
                    type="text"
                    value={businessForm.investmentAmount}
                    onChange={(e) =>
                      setBusinessForm({
                        ...businessForm,
                        investmentAmount: e.target.value,
                      })
                    }
                    placeholder="e.g., $500,000 USD"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={businessForm.message}
                    onChange={(e) =>
                      setBusinessForm({
                        ...businessForm,
                        message: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your business goals and timeline..."
                  />
                </div>
              </div>
              <button
                onClick={handleBusinessSubmit}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Submit Application <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default page;
