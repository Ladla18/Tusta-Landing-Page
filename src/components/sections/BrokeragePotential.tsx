"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BrokeragePotential() {
  // State for slider values
  const [numTraders, setNumTraders] = useState(1000);
  const [tradesPerDay, setTradesPerDay] = useState(5);
  const [brokeragePerTrade, setBrokeragePerTrade] = useState(20);

  // Calculated values
  const [monthlyRevenue, setMonthlyRevenue] = useState("0");
  const [yearlyRevenue, setYearlyRevenue] = useState("0");

  // Update calculations when slider values change
  useEffect(() => {
    const MARKET_DAYS_PER_MONTH = 22;
    const MARKET_DAYS_PER_YEAR = 224;

    const dailyRevenue = numTraders * tradesPerDay * brokeragePerTrade;
    const monthly = dailyRevenue * MARKET_DAYS_PER_MONTH;
    const yearly = dailyRevenue * MARKET_DAYS_PER_YEAR;

    // Format numbers with commas for Indian numbering system
    setMonthlyRevenue(formatIndianRupees(monthly));
    setYearlyRevenue(formatIndianRupees(yearly));
  }, [numTraders, tradesPerDay, brokeragePerTrade]);

  // Helper function to format numbers in Indian numbering system
  const formatIndianRupees = (num: number): string => {
    const result = num.toString().split(".");
    let lastThree = result[0].substring(result[0].length - 3);
    const otherNumbers = result[0].substring(0, result[0].length - 3);
    if (otherNumbers !== "") {
      lastThree = "," + lastThree;
    }

    // Add commas after every 2 digits in the remaining part
    const formatted =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return formatted;
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white">
      {/* Background design elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-300 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Brokerage potential with{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Apt
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Estimate your potential revenue based on your trader base and
            trading activity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-14 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            {/* Number of Traders */}
            <div>
              <div className="flex justify-between mb-4">
                <label htmlFor="numTraders" className="text-white font-medium">
                  Number of Traders
                </label>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 min-w-[120px] text-center font-semibold border border-white/10">
                  {numTraders.toLocaleString()} Traders
                </div>
              </div>
              <div className="relative mt-2">
                <div className="w-full h-1 bg-white/10 rounded-full"></div>
                <input
                  type="range"
                  id="numTraders"
                  min="100"
                  max="5000"
                  step="100"
                  value={numTraders}
                  onChange={(e) => setNumTraders(parseInt(e.target.value))}
                  className="absolute top-0 w-full h-1 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-900/30"
                />
                <div className="flex justify-between text-xs text-white/70 mt-4">
                  <span>100</span>
                  <span>5L</span>
                </div>
              </div>
            </div>

            {/* Trades per Day */}
            <div>
              <div className="flex justify-between mb-4">
                <label
                  htmlFor="tradesPerDay"
                  className="text-white font-medium"
                >
                  Trades / Day
                </label>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 min-w-[120px] text-center font-semibold border border-white/10">
                  {tradesPerDay} Trades
                </div>
              </div>
              <div className="relative mt-2">
                <div className="w-full h-1 bg-white/10 rounded-full"></div>
                <input
                  type="range"
                  id="tradesPerDay"
                  min="1"
                  max="200"
                  step="1"
                  value={tradesPerDay}
                  onChange={(e) => setTradesPerDay(parseInt(e.target.value))}
                  className="absolute top-0 w-full h-1 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-900/30"
                />
                <div className="flex justify-between text-xs text-white/70 mt-4">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>
            </div>

            {/* Avg Brokerage per Trade */}
            <div>
              <div className="flex justify-between mb-4">
                <label
                  htmlFor="brokeragePerTrade"
                  className="text-white font-medium"
                >
                  Avg Brokerage / Trade
                </label>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 min-w-[120px] text-center font-semibold border border-white/10">
                  {brokeragePerTrade} INR
                </div>
              </div>
              <div className="relative mt-2">
                <div className="w-full h-1 bg-white/10 rounded-full"></div>
                <input
                  type="range"
                  id="brokeragePerTrade"
                  min="5"
                  max="50"
                  step="1"
                  value={brokeragePerTrade}
                  onChange={(e) =>
                    setBrokeragePerTrade(parseInt(e.target.value))
                  }
                  className="absolute top-0 w-full h-1 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-900/30"
                />
                <div className="flex justify-between text-xs text-white/70 mt-4">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-14"
          >
            {/* Monthly Revenue */}
            <motion.div
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl text-white/90 mb-3 font-medium">
                Brokerage Revenue Potential / Month
              </h3>
              <div className="text-5xl lg:text-6xl font-bold mb-2">
                ₹ {monthlyRevenue}
              </div>
              <p className="text-sm text-white/70 mt-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-white/50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
                22 Market days are calculated in a month.
              </p>
            </motion.div>

            {/* Yearly Revenue */}
            <motion.div
              className="backdrop-blur-sm bg-gradient-to-br from-green-400/10 to-green-500/20 p-8 rounded-2xl border border-green-300/20"
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl text-white/90 mb-3 font-medium">
                Brokerage Revenue Potential / Year
              </h3>
              <div className="text-5xl lg:text-6xl font-bold mb-2 text-green-300">
                ₹ {yearlyRevenue}
              </div>
              <p className="text-sm text-white/70 mt-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-white/50"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
                224 Market days are calculated in a year.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-30 pointer-events-none">
        <svg
          className="w-full"
          height="120"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C288,88.6 576,104 864,88 C1152,72 1440,24 1440,24 L1440,120 L0,120 L0,64 Z"
            fill="rgba(255, 255, 255, 0.1)"
          />
          <path
            d="M0,64 C288,45.3 576,26.6 864,8 C1152,-10.6 1440,8 1440,8 L1440,120 L0,120 L0,64 Z"
            fill="rgba(255, 255, 255, 0.05)"
          />
        </svg>
      </div>
    </section>
  );
}
