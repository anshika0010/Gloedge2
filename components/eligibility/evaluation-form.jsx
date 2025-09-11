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
  const countryQuestions = questionsByCountry[country] || [];

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
      options: ["USA", "Canada", "UK", "Australia", "NewZealand", "Europe"],
    };
  } else if (!isContactStep && !isFinalStep) {
    currentQuestion = countryQuestions[step - 1]; // offset by 1
  }

  const handleAnswer = (answer, subQuestion = null) => {
    setAnswers((prev) => {
      const prevStepAnswer = prev[step] || {};

      // Agar multi-yes-no hai to nested object update karo
      if (currentQuestion.type === "multi-yes-no" && subQuestion) {
        return {
          ...prev,
          [step]: {
            ...prevStepAnswer,
            [subQuestion]: answer,
          },
        };
      }

      // Normal case (single answer)
      return { ...prev, [step]: answer };
    });

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
    <div className="min-h-screen bg-gray-50 max-w-8xl mx-auto">
      <div className="container mx-auto pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <ProgressIndicator
                currentStep={step + 1}
                totalSteps={totalSteps}
              />

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

          {/* Sidebar with Banner */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
              <img
                src="https://i.pinimg.com/1200x/bf/e6/fd/bfe6fd81cfb210eedf4d04571389a0fa.jpg"
                alt="Visa Banner"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
