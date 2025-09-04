"use client";

import { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "IND +91",
    acceptTerms: false,
    useWhatsapp: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptTerms) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          Please fill in the form to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            required
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            required
          />

          <div className="flex gap-2">
            <select
              value={formData.countryCode}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className="h-12 px-3 border border-gray-300 rounded-md bg-white text-sm focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="IND +91">IND +91</option>
              <option value="US +1">US +1</option>
              <option value="UK +44">UK +44</option>
              <option value="AUS +61">AUS +61</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 flex-1 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Terms & WhatsApp Switch */}
        <div className="space-y-4">
          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms}
              onChange={(e) =>
                handleInputChange("acceptTerms", e.target.checked)
              }
              className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* WhatsApp Switch */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Use this as Whatsapp number
            </span>
            <button
              type="button"
              onClick={() =>
                handleInputChange("useWhatsapp", !formData.useWhatsapp)
              }
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                formData.useWhatsapp ? "bg-orange-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  formData.useWhatsapp ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!formData.acceptTerms}
          className={`w-full h-12 text-lg font-semibold rounded-md text-white transition 
            ${
              formData.acceptTerms
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Do I Qualify
        </button>
      </form>
    </div>
  );
}
