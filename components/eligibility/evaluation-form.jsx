"use client";

import { useState } from "react";
import questionsByCountry from "./questionsByCountry"; 
import { QuestionStep } from "./QuestionStep";
import { ProgressIndicator } from "./progress-indicator";
import { ScoreSidebar } from "./score-sidebar";
import ContactForm from "./contact-form";

export function EvaluationForm() {
  const [country, setCountry] = useState(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  // ✅ All steps after country selection
  const countryQuestions = country ? questionsByCountry[country] : [];

  // ✅ Total steps = 1 (country) + questions + contact + final
  const totalSteps = 1 + countryQuestions.length + 2;

  const isCountryStep = step === 0;
  const isContactStep = step === countryQuestions.length + 1;
  const isFinalStep = step === countryQuestions.length + 2;

  // ✅ Current question
  let currentQuestion = null;
  if (isCountryStep) {
    currentQuestion = {
      type: "country-selection",
      title: "Which country are you planning to immigrate to?",
      options: ["USA", "Canada", "UK", "Australia", "New Zealand", "Europe"],
    };
  } else if (!isContactStep && !isFinalStep) {
    currentQuestion = countryQuestions[step - 1]; // offset by 1
  }

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [step]: answer };
    setAnswers(newAnswers);

    if (isCountryStep) {
      setCountry(answer);
    }
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <ProgressIndicator currentStep={step + 1} totalSteps={totalSteps} />

              <div className="mt-8">
                {isContactStep ? (
                  <ContactForm onSubmit={handleNext} />
                ) : isFinalStep ? (
                  <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-green-600">
                      🎉 Congratulations!
                    </h1>
                    <p>
                      You're likely to qualify. Our experts will contact you
                      shortly. Thank you for choosing GloEdge Visas.
                    </p>
                  </div>
                ) : (
                  <QuestionStep
                    question={currentQuestion}
                    selectedAnswer={answers[step]}
                    onAnswer={handleAnswer}
                  />
                )}
              </div>

              {!isFinalStep && (
                <div className="flex justify-between mt-12">
                  <button
                    onClick={handleBack}
                    disabled={step === 0}
                    className="bg-gray-300 px-8 py-3 rounded"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!answers[step] && !isContactStep}
                    className="bg-[#da010b] text-white px-8 py-3 rounded"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScoreSidebar country={country} score={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
