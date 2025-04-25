"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

// Features data from the table
const featuresData = [
  {
    title: "SEBI-Compliant Algo Marketplace",
    description:
      "Offer your traders a regulatory-compliant platform where they can publish and use white-box or black-box strategies. Just two clicks to activate any strategy. Fully aligned with SEBI's latest guidelines.",
    image: "/AI STrat Builder.gif",
  },
  {
    title: "AI-Powered Strategy Builder (No Code Required)",
    description:
      "Traders can build price, time, and indicator-based strategies just by typing their logic in plain English. Our AI converts it into executable algorithms instantly.",
    image: "/backtest.gif",
  },
  {
    title: "Automate Any TradingView Strategy",
    description:
      "Let traders automate over 1,500 free TradingView strategies or their custom Pine scripts within minutes. No manual coding, seamless integration.",
    image: "/Group 38141.png",
  },
  {
    title: "Advanced Backtesting Engine",
    description:
      "Provide traders with rich, real-time backtesting reports including P&L curves, drawdown metrics, and success ratios — all in minutes.",
    image: "/Group 38141.png",
  },
  {
    title: "AI-Powered Strategy Optimizer (First in India)",
    description:
      "Our AI tests millions of parameter combinations to suggest the most profitable inputs for any strategy. Personalized optimization per trader.",
    image: "/Group 38141.png",
  },
  {
    title: "Pro-Grade Risk Management Suite",
    description:
      "Comes with 20+ built-in risk controls: max drawdown, capital lock, time-based exits, trailing stops, and more. Fully customizable per strategy and profile.",
    image: "/Group 38141.png",
  },
  {
    title: "AI-Powered Trade Analytics & Insights",
    description:
      "Gives traders smart insights like which days their strategy works best, what time slots perform better, and volatility analysis.",
    image: "/Group 38141.png",
  },
  {
    title: "Fully Mobile & Cross-Device Compatible",
    description:
      "Your clients can launch, monitor, and modify strategies on mobile or desktop. Smooth UX on all devices with real-time notifications.",
    image: "/Group 38141.png",
  },
];

export default function OurFeatures() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextFeature = () => {
    setCurrentFeature((prev) =>
      prev === featuresData.length - 1 ? 0 : prev + 1
    );
  };

  const prevFeature = () => {
    setCurrentFeature((prev) =>
      prev === 0 ? featuresData.length - 1 : prev - 1
    );
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;

    if (info.offset.x > threshold) {
      // Swiped right - go to previous
      prevFeature();
    } else if (info.offset.x < -threshold) {
      // Swiped left - go to next
      nextFeature();
    }
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Platform Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A modern trading platform with all the tools you need to succeed in
            today&apos;s markets
          </p>
        </div>

        {/* Feature Carousel */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          {/* Navigation Controls - Only visible on non-mobile */}
          <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={prevFeature}
              className="bg-white p-3 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={nextFeature}
              className="bg-white p-3 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Browser Mockup - Hidden on Mobile */}
          <div className="hidden md:block">
            {/* Safari Browser Mockup */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-lg p-2 border border-gray-300">
              {/* Browser Header */}
              <div className="flex items-center">
                {/* Window Controls */}
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Tab Bar */}
                <div className="flex-1 flex items-center">
                  <div className="bg-white rounded-t-lg border-t border-l border-r border-gray-300 flex items-center py-1 px-4 text-xs text-gray-700 font-medium">
                    <div className="mr-2 w-3 h-3 rounded-full bg-blue-500"></div>
                    Trading Dashboard
                  </div>
                  <div className="ml-1 bg-gray-100 rounded-t-lg border-t border-l border-r border-gray-300 flex items-center py-1 px-4 text-xs text-gray-500 font-medium">
                    <div className="mr-2 w-3 h-3 rounded-full bg-gray-400"></div>
                    Market Analysis
                  </div>
                </div>
              </div>

              {/* Address Bar */}
              <div className="mt-2 flex items-center bg-white rounded-md border border-gray-300 px-2 py-1">
                <div className="flex space-x-3 mr-3">
                  <button className="text-gray-400 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 flex items-center">
                  <svg
                    className="h-3 w-3 mr-2 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  app.aptalgo.com/dashboard
                </div>
                <div className="ml-3 flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="border-l border-r border-b border-gray-300 bg-white rounded-b-lg shadow-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <Image
                  src={featuresData[currentFeature].image}
                  alt={featuresData[currentFeature].title}
                  className="max-w-full max-h-full object-contain"
                  width={1030}
                  height={1040}
                  unoptimized={featuresData[currentFeature].image.endsWith(
                    ".gif"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Mobile Image (no browser chrome) - With drag/swipe functionality */}
          <div className="md:hidden">
            <motion.div
              ref={carouselRef}
              className="rounded-lg shadow-xl overflow-hidden bg-white border border-gray-200 touch-manipulation"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
            >
              <div className="w-full py-6 flex items-center justify-center overflow-hidden">
                <Image
                  src={featuresData[currentFeature].image}
                  alt={featuresData[currentFeature].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  width={400}
                  height={400}
                  unoptimized={featuresData[currentFeature].image.endsWith(
                    ".gif"
                  )}
                />
              </div>
            </motion.div>

          
          </div>

          {/* Feature Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center items-center my-10"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 text-center">
                {featuresData[currentFeature].title}
              </h3>
              <p className="text-gray-600 text-center max-w-3xl text-sm md:text-base">
                {featuresData[currentFeature].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {featuresData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentFeature === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
