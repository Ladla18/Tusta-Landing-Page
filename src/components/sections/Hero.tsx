"use client";

import Link from "next/link";
import Header from "../layout/Header";
import { motion } from "framer-motion";

// Removed unused array
// const CIRCLE_POSITIONS = [
//   { top: "20%", left: "15%" },
//   { top: "30%", left: "25%" },
//   { top: "35%", left: "75%" },
//   { top: "15%", left: "60%" },
//   { top: "25%", left: "40%" },
// ];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Header />

      <div className="container mx-auto flex flex-col items-center justify-center pt-20 py-5 md:pt-36 md:py-5 lg:pt-36 lg:py-5 text-center">
        <div className="space-y-6 max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mt-10 sm:mt-0">
            <div className="flex justify-center mb-4 shadow-md rounded-full w-max">
              <button className="bg-white text-black font-bold px-4 py-2 rounded-l-full rounded-r-none">
                What&apos;s new?
              </button>
              <span
                className="w-0.1 h-6/12 mt-3 inline-block bg-gray-100"
                style={{ border: "0.1px solid gray" }}
              ></span>
              <button className="bg-white font-medium text-black px-4 py-2 rounded-r-full rounded-l-none">
                Ai Optimise
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bring Algo Trading to Your Clients
              <span className="text-blue-600"> Fast & Compliant </span> with
              Apt.
            </motion.h1>
          </div>

          <div className="relative">
            <motion.p
              className="mx-auto max-w-[700px] text-center px-5 text-lg md:text-base text-gray-600 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get your own algo trading platform, built exclusively for Indian
              brokers 🇮🇳. It is simple, reliable and designed to boost trader
              retention. The platform includes all mandatory algo compliance
              management tools as outlined in SEBI&apos;s circular dated
              February 4, 2025.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Your work email"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-normal text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #E6E7EA",
                  minWidth: "260px",
                }}
              />
            </div>
            <Link
              href="#demo"
              style={{
                background:
                  "linear-gradient(102.61deg, #5271FF 41.19%, #6805FE 124.6%)",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
              className="inline-flex h-12 w-8/12 mx-auto items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium text-white shadow transition-colors"
            >
              Request a demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
