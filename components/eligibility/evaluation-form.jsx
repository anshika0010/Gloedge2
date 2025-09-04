"use client";

import { useState } from "react";
import { ProgressIndicator } from "@/components/eligibility/progress-indicator";
import { QuestionStep } from "@/components/eligibility/question-step";
import { ScoreSidebar } from "@/components/eligibility/score-sidebar";
import  ContactForm  from "@/components/eligibility/contact-form";

export function EvaluationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("Australia");

  const questions = [
    {
      id: 0,
      title: "You Want to Get Yourself Evaluated for",
      subtitle: "Your Country Preference",
      type: "country-selection",
      options: [
        "UK",
        "Canada",
        "Germany",
        "Australia",
        "Australia Partner",
        "Saskatchewan",
        "Quebec",
      ],
      preselected: "Immigration",
    },
    {
      id: 1,
      title: "Do you have experience in Australia?",
      type: "single-choice",
      options: ["Zero", "1 year", "3 years", "5 years", "8 or more years"],
    },
    {
      id: 2,
      title: "Did you study in Australia(2 academic years)?",
      type: "yes-no",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      title: "Your highest qualification",
      type: "single-choice",
      options: [
        "Ph.D",
        "Masters",
        "Diploma after Bachelors",
        "Bachelors",
        "Diploma after secondary",
        "Ph.D related to Your work profile",
        "Related to STEM",
      ],
    },
    {
      id: 4,
      title: "Your total work experience",
      type: "single-choice",
      options: [
        "Less than 1 year",
        "1 year",
        "2 years",
        "3 years",
        "4 years",
        "5 years",
        "6 years",
        "7 years",
        "8 years or more years",
      ],
    },
    {
      id: 5,
      title: "Your English",
      type: "single-choice",
      options: [
        "Very High Proficiency",
        "High Proficiency",
        "Moderate Proficiency",
        "Basic Proficiency",
        "No Proficiency",
      ],
    },
    {
      id: 6,
      title:
        "Do you hold a Masters by research or a Doctorate degree from an Australian educational institution in the STEM fields?",
      type: "yes-no",
      options: ["Yes", "No"],
    },
    {
      id: 7,
      title: "Your Australian education is from regional Australia?",
      type: "yes-no",
      options: ["Yes", "No"],
    },
    {
      id: 8,
      title:
        "Did you obtained credential community language qualifications in following languages Punjabi/Telugu/Urdu/Tamil/Malayalam/Hindi/Bangla/Gujarati?",
      type: "yes-no",
      options: ["Yes", "No"],
    },
    {
      id: 9,
      title:
        "Did you complete professional year in Australia from ACS/Engineers Australia/CPA/IPA/CAANZ in last 4 years?",
      type: "yes-no",
      options: ["Yes", "No"],
    },
    {
      id: 10,
      title:
        "Are you interested in State/territory or a regional sponsorship nomination?",
      type: "single-choice",
      options: [
        "State/territory",
        "Regional state",
        "close family (PR/Citizen status in Australia)",
        "No",
      ],
    },
    {
      id: 11,
      title: "Are you married?",
      type: "yes-no",
      options: ["Yes", "No"],
    },
  ];

  const totalSteps = questions.length + 1; // +1 for contact form
  const isContactFormStep = currentStep === questions.length;

  const calculateScore = () => {
    let score = 0;

    // Country selection
    if (answers[0] === "Australia") score += 10;
    else if (answers[0] === "UK") score += 8;
    else if (answers[0] === "Canada") score += 9;

    // Australia experience
    if (answers[1] === "8 or more years") score += 20;
    else if (answers[1] === "5 years") score += 15;
    else if (answers[1] === "3 years") score += 10;
    else if (answers[1] === "1 year") score += 5;

    // Australia study
    if (answers[2] === "Yes") score += 10;

    // Highest qualification
    if (answers[3] === "Ph.D") score += 20;
    else if (answers[3] === "Masters") score += 15;
    else if (answers[3] === "Bachelors") score += 10;
    else if (answers[3] === "Related to STEM") score += 15;

    // Work experience
    if (answers[4] === "8 years or more years") score += 20;
    else if (answers[4] === "5 years") score += 15;
    else if (answers[4] === "3 years") score += 10;

    // English proficiency
    if (answers[5] === "Very High Proficiency") score += 20;
    else if (answers[5] === "High Proficiency") score += 15;
    else if (answers[5] === "Moderate Proficiency") score += 10;

    // STEM degree
    if (answers[6] === "Yes") score += 10;

    // Regional education
    if (answers[7] === "Yes") score += 5;

    // Language qualifications
    if (answers[8] === "Yes") score += 5;

    // Professional year
    if (answers[9] === "Yes") score += 10;

    // Sponsorship
    if (answers[10] === "State/territory") score += 5;
    else if (answers[10] === "close family (PR/Citizen status in Australia)")
      score += 10;

    // Marriage
    if (answers[11] === "Yes") score += 5;

    return Math.min(score, 100);
  };

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentStep]: answer };
    setAnswers(newAnswers);

    // Update selected country if it's the country selection step
    if (currentStep === 0) {
      setSelectedCountry(answer);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleContactFormSubmit = (contactData) => {
    console.log("Contact form submitted:", contactData);
    console.log("Final answers:", answers);
    console.log("Final score:", calculateScore());
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Progress indicator */}
              <ProgressIndicator
                currentStep={currentStep + 1}
                totalSteps={totalSteps}
              />

              {/* Content */}
              <div className="mt-8">
                {isContactFormStep ? (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <h1 className="text-3xl font-bold text-gray-900">
                        Almost There !
                      </h1>
                      <p className="text-xl text-gray-600">
                        You are just one step away from your evaluation result.
                      </p>
                    </div>
                    <ContactForm onSubmit={handleContactFormSubmit} />
                  </div>
                ) : (
                  <>
                    {currentStep > 0 && (
                      <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Understanding your adaptability
                      </h1>
                    )}
                    <QuestionStep
                      question={questions[currentStep]}
                      selectedAnswer={answers[currentStep]}
                      onAnswer={handleAnswer}
                    />
                  </>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="bg-[#da010b] hover:bg-[#da010b] text-white px-8 py-3"
                >
                  ← Back
                </button>

                {!isContactFormStep && (
                  <button
                    onClick={handleNext}
                    disabled={!answers[currentStep]}
                    variant="outline"
                    className="border-[#da010b] text-[#da010b] hover:bg-[#da010b] px-8 py-3 bg-transparent"
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScoreSidebar country={selectedCountry} score={calculateScore()} />
          </div>
        </div>
      </div>
    </div>
  );
}
