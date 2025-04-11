"use client";

import React from "react";
import Image from "next/image";

export default function OurFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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

        {/* Safari Browser Mockup */}
        <div className="max-w-5xl mx-auto">
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
                src="/images/Screenshot 2025-04-11 135059.png"
                alt="Mobile view"
                className="max-w-full max-h-full object-contain"
                width={1030}
                height={1040}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-10">
            <h1 className="text-2xl font-normal">Compliant Marketplace</h1>
            <p className="text-gray-500 text-center">
              Brokers like Zerodha, Upstox, and Groww had a early-mover
              advantage by leading the shift to web & mobile-based trading — a
              move that helped them emerge as industry leaders. They dominate
              48% of today&apos;s market participation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
