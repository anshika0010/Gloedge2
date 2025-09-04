'use client';
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock } from 'lucide-react';


export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      country: '',
      visaType: '',
      message: ''
    });
    
  
    const faqs = [
      {
        id: 1,
        question: "What types of visas does Kansaz help with?",
        answer: "Kansaz provides comprehensive visa services including Permanent Residence visas for Canada and Australia, Study visas, Visit/Tourist visas, Work visas, and Business visas. We specialize in end-to-end immigration solutions."
      },
      {
        id: 2,
        question: "How long does the visa application process take?",
        answer: "Processing times vary by country and visa type. Generally, PR visas take 6-18 months, Study visas take 4-8 weeks, and Visit visas take 2-4 weeks. We provide regular updates throughout the process."
      },
      {
        id: 3,
        question: "What documents are required for immigration?",
        answer: "Required documents typically include passport, educational certificates, work experience letters, IELTS/TOEFL scores, medical examinations, police clearance certificates, and financial proof. Our team provides a personalized checklist."
      },
      {
        id: 4,
        question: "Do I need IELTS for immigration?",
        answer: "Yes, most countries require English proficiency tests like IELTS or TOEFL for immigration. The required scores vary by country and visa category. We provide IELTS coaching and guidance services."
      },
      {
        id: 5,
        question: "What are your service charges?",
        answer: "Our fees vary depending on the service type and complexity. We offer transparent pricing with no hidden costs. Contact us for a detailed quote based on your specific requirements."
      },
      {
        id: 6,
        question: "Do you provide post-visa services?",
        answer: "Yes, we offer comprehensive post-visa services including pre-departure orientation, job search assistance, accommodation guidance, and ongoing support after you reach your destination country."
      }
    ];
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      console.log('Form submitted:', formData);
      // Handle form submission logic here
      alert('Thank you for your inquiry! We will contact you soon.');
    };
  
    const toggleFAQ = (id) => {
      setExpandedFAQ(expandedFAQ === id ? null : id);
    };

  return (
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Have Any Questions?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
                Get in touch with our immigration experts or browse through our frequently asked questions
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Inquiry Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Get Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and our experts will get back to you within 24 hours.
                  </p>
                </div>
    
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
    
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select Country</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="uk">United Kingdom</option>
                        <option value="usa">United States</option>
                        <option value="newzealand">New Zealand</option>
                      </select>
                    </div>
                  </div>
    
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visa Type
                    </label>
                    <select
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select Visa Type</option>
                      <option value="pr">Permanent Residence</option>
                      <option value="study">Study Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="visit">Visit/Tourist Visa</option>
                      <option value="business">Business Visa</option>
                    </select>
                  </div>
    
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tell us about your immigration goals..."
                    ></textarea>
                  </div>
    
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 transition-colors duration-200"
                  >
                    Submit Inquiry
                  </button>
                </div>
    
              </div>
    
              {/* Right Side - FAQs */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {expandedFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {expandedFAQ === faq.id && (
                        <div className="px-6 pb-4 bg-gray-50">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
    
                {/* Additional Help */}
                <div className="bg-red-50 border border-red-200 p-6 mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Still have questions?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our immigration experts are here to help you with personalized guidance.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 transition-colors duration-200">
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
