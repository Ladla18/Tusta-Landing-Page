"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const deadline = new Date("August 1, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        // Calculate months, days, and hours
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        setTimeLeft({
          months,
          days,
          hours,
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every hour
    const timer = setInterval(calculateTimeLeft, 1000 * 60 * 60);

    return () => {
      clearInterval(timer);
    };
  }, [deadline]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-60 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-100 rounded-full opacity-60 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full lg:w-7/12 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
          
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
              Time Left Until{" "}
              <span className="text-indigo-600">SEBI Deadline</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              As mandated by the Securities and Exchange Board of India (SEBI),
              all brokers facilitating algorithmic trading must ensure full
              compliance with the updated regulatory framework by the deadline
              of{" "}
              <span className="font-medium text-indigo-800">
                August 1, 2025
              </span>
              . This includes implementing systems to manage exchange-approved
              algorithms, enforcing secure access controls, and maintaining a
              verifiable audit trail.
            </p>
            <motion.p
              className="mt-3 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We ensure your systems and processes are fully aligned{" "}
              <span className="font-medium text-indigo-600">
                well before the deadline
              </span>
              .
            </motion.p>
          </motion.div>

          {/* Desktop and Tablet View */}
          <motion.div
            className="hidden md:flex items-center gap-4 lg:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Months */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white w-24 lg:w-28 h-24 lg:h-28 rounded-2xl flex items-center justify-center text-4xl lg:text-5xl font-bold text-indigo-600 shadow-lg border border-gray-100"
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {timeLeft.months}
              </motion.div>
              <span className="mt-3 text-sm font-medium text-gray-600 uppercase tracking-wide">
                Months
              </span>
            </motion.div>

            <div className="text-gray-300 text-3xl font-light">:</div>

            {/* Days */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white w-24 lg:w-28 h-24 lg:h-28 rounded-2xl flex items-center justify-center text-4xl lg:text-5xl font-bold text-indigo-600 shadow-lg border border-gray-100"
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {timeLeft.days}
              </motion.div>
              <span className="mt-3 text-sm font-medium text-gray-600 uppercase tracking-wide">
                Days
              </span>
            </motion.div>

            <div className="text-gray-300 text-3xl font-light">:</div>

            {/* Hours */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white w-24 lg:w-28 h-24 lg:h-28 rounded-2xl flex items-center justify-center text-4xl lg:text-5xl font-bold text-indigo-600 shadow-lg border border-gray-100"
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {timeLeft.hours}
              </motion.div>
              <span className="mt-3 text-sm font-medium text-gray-600 uppercase tracking-wide">
                Hours
              </span>
            </motion.div>
          </motion.div>

          {/* Mobile View */}
          <motion.div
            className="md:hidden w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center gap-4">
              {/* Months */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="bg-white w-[85px] h-[85px] rounded-xl flex items-center justify-center text-3xl font-bold text-indigo-600 shadow-md border border-gray-100"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.months}
                </motion.div>
                <span className="mt-2 text-xs font-medium text-gray-600 uppercase tracking-wide">
                  Months
                </span>
              </div>

              <div className="text-gray-300 text-2xl font-light mt-[-20px]">
                :
              </div>

              {/* Days */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="bg-white w-[85px] h-[85px] rounded-xl flex items-center justify-center text-3xl font-bold text-indigo-600 shadow-md border border-gray-100"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.days}
                </motion.div>
                <span className="mt-2 text-xs font-medium text-gray-600 uppercase tracking-wide">
                  Days
                </span>
              </div>

              <div className="text-gray-300 text-2xl font-light mt-[-20px]">
                :
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="bg-white w-[85px] h-[85px] rounded-xl flex items-center justify-center text-3xl font-bold text-indigo-600 shadow-md border border-gray-100"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.hours}
                </motion.div>
                <span className="mt-2 text-xs font-medium text-gray-600 uppercase tracking-wide">
                  Hours
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
