"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const stepsArray = [
  {
    step: 1,
    title: "SEO Audit",
    description: "Comprehensive analysis of your website's search engine performance and optimization opportunities.",
    image: "/images/people.jpg"
  },
  {
    step: 2,
    title: "Project Execution",
    description: "Strategic implementation of marketing initiatives tailored to your business goals.",
    image: "/images/people-2.jpg"
  },
  {
    step: 3,
    title: "Results & Reporting",
    description: "Transparent tracking and detailed reporting of your campaign performance metrics.",
    image: "/images/people-3.jpg"
  },
];

const PerformanceSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = stepsArray.find(item => item.step === activeStep) || stepsArray[0];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A Performance-driven Marketing Agency
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver measurable results through data-backed marketing strategies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Steps Navigation */}
          <div className="lg:w-1/3 flex lg:flex-col gap-4 overflow-x-auto pb-2 lg:pb-0">
            {stepsArray.map((item) => (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`min-w-[250px] lg:min-w-full p-6 cursor-pointer rounded-xl transition-all duration-300 ${
                  item.step === activeStep
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                }`}
              >
                <span className="block text-sm font-medium mb-1">
                  Step {item.step}
                </span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm ${
                  item.step === activeStep ? 'text-white/80' : 'text-gray-600'
                }">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="lg:w-2/3 flex-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={currentStep.image}
                alt={currentStep.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {currentStep.title}
              </h3>
              <p className="text-gray-600">
                {currentStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;