"use client";

import Link from "next/link";
import Header from "../layout/Header";
import { motion } from "framer-motion";

// Predefined positions for the decorative circles to avoid hydration mismatches
const CIRCLE_POSITIONS = [
  { top: "25%", left: "15%" },
  { top: "65%", left: "25%" },
  { top: "35%", left: "75%" },
  { top: "80%", left: "60%" },
  { top: "45%", left: "40%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Header />

      {/* Circuit decorations - Hidden on mobile */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
        {/* Left circuit */}
        <svg
          className="absolute -left-20 top-1/4 w-64 h-64 text-blue-100 opacity-40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            d="M20,100 L80,100 M80,100 L80,60 M80,60 L120,60 M120,60 L120,30 M120,30 L160,30"
          />
          <circle cx="20" cy="100" r="4" fill="currentColor" />
          <circle cx="80" cy="100" r="4" fill="currentColor" />
          <circle cx="80" cy="60" r="4" fill="currentColor" />
          <circle cx="120" cy="60" r="4" fill="currentColor" />
          <circle cx="120" cy="30" r="4" fill="currentColor" />
          <circle cx="160" cy="30" r="4" fill="currentColor" />
          <text x="50" y="92" fontSize="8" fill="currentColor">
            Low Latency
          </text>
          <text x="95" y="52" fontSize="8" fill="currentColor">
            Auto Scaling
          </text>
          <text x="130" y="22" fontSize="8" fill="currentColor">
            AI Powered
          </text>
        </svg>

        {/* Right circuit */}
        <svg
          className="absolute -right-20 top-1/3 w-64 h-64 text-blue-100 opacity-40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            d="M180,100 L120,100 M120,140 M120,140 L80,140 M80,140 L80,170 M80,170 L40,170"
          />
          <circle cx="180" cy="100" r="4" fill="currentColor" />
          <circle cx="120" cy="100" r="4" fill="currentColor" />
          <circle cx="120" cy="140" r="4" fill="currentColor" />
          <circle cx="80" cy="140" r="4" fill="currentColor" />
          <circle cx="80" cy="170" r="4" fill="currentColor" />
          <circle cx="40" cy="170" r="4" fill="currentColor" />
          <text x="130" y="92" fontSize="8" fill="currentColor">
            SEBI Compliant
          </text>
          <text x="85" y="132" fontSize="8" fill="currentColor">
            Secure
          </text>
          <text x="50" y="162" fontSize="8" fill="currentColor">
            Data Analytics
          </text>
        </svg>

        {/* Bottom circuit */}
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 text-blue-100 opacity-40"
          viewBox="0 0 600 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            d="M100,80 L200,80 M200,80 L200,40 M200,40 L300,40 M300,40 L300,80 M300,80 L400,80 M400,80 L400,40 M400,40 L500,40"
          />
          <circle cx="100" cy="80" r="4" fill="currentColor" />
          <circle cx="200" cy="80" r="4" fill="currentColor" />
          <circle cx="200" cy="40" r="4" fill="currentColor" />
          <circle cx="300" cy="40" r="4" fill="currentColor" />
          <circle cx="300" cy="80" r="4" fill="currentColor" />
          <circle cx="400" cy="80" r="4" fill="currentColor" />
          <circle cx="400" cy="40" r="4" fill="currentColor" />
          <circle cx="500" cy="40" r="4" fill="currentColor" />
          <text x="135" y="72" fontSize="10" fill="currentColor">
            Backtesting
          </text>
          <text x="225" y="32" fontSize="10" fill="currentColor">
            Real-time Signals
          </text>
          <text x="315" y="72" fontSize="10" fill="currentColor">
            Risk Management
          </text>
          <text x="430" y="32" fontSize="10" fill="currentColor">
            Custom Strategies
          </text>
        </svg>

        {/* Direct circuit connections to heading - Left */}
        <svg
          className="absolute top-[43%] left-0 w-[30%] md:w-[25%] h-20 text-blue-200 opacity-60"
          preserveAspectRatio="none"
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M0,25 L70,25 L80,10 L100,10"
          />
          <circle cx="0" cy="25" r="2" fill="currentColor" />
          <circle cx="70" cy="25" r="2" fill="currentColor" />
          <circle cx="80" cy="10" r="2" fill="currentColor" />
          <circle cx="100" cy="10" r="3" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              values="0.6;1;0.6"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="40" cy="25" r="1.5" fill="currentColor">
            <animate
              attributeName="cx"
              values="5;95;5"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Direct circuit connections to heading - Right */}
        <svg
          className="absolute top-[43%] right-0 w-[30%] md:w-[25%] h-20 text-blue-200 opacity-60"
          preserveAspectRatio="none"
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M100,25 L30,25 L20,10 L0,10"
          />
          <circle cx="100" cy="25" r="2" fill="currentColor" />
          <circle cx="30" cy="25" r="2" fill="currentColor" />
          <circle cx="20" cy="10" r="2" fill="currentColor" />
          <circle cx="0" cy="10" r="3" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              values="0.6;1;0.6"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="25" r="1.5" fill="currentColor">
            <animate
              attributeName="cx"
              values="95;5;95"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Direct circuit connections to paragraph - Left */}
        <svg
          className="absolute top-[56%] left-0 w-[35%] md:w-[30%] h-20 text-blue-200 opacity-50"
          preserveAspectRatio="none"
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4,3"
            d="M0,15 L60,15 L70,25 L100,25"
          />
          <circle cx="0" cy="15" r="2" fill="currentColor" />
          <circle cx="60" cy="15" r="1.5" fill="currentColor" />
          <circle cx="70" cy="25" r="1.5" fill="currentColor" />
          <circle cx="100" cy="25" r="3" fill="currentColor">
            <animate
              attributeName="r"
              values="2;4;2"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="30" cy="15" r="1.5" fill="currentColor" opacity="0.8">
            <animate
              attributeName="cx"
              values="0;100;0"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Direct circuit connections to paragraph - Right */}
        <svg
          className="absolute top-[56%] right-0 w-[35%] md:w-[30%] h-20 text-blue-200 opacity-50"
          preserveAspectRatio="none"
          viewBox="0 0 100 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4,3"
            d="M100,15 L40,15 L30,25 L0,25"
          />
          <circle cx="100" cy="15" r="2" fill="currentColor" />
          <circle cx="40" cy="15" r="1.5" fill="currentColor" />
          <circle cx="30" cy="25" r="1.5" fill="currentColor" />
          <circle cx="0" cy="25" r="3" fill="currentColor">
            <animate
              attributeName="r"
              values="2;4;2"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="70" cy="15" r="1.5" fill="currentColor" opacity="0.8">
            <animate
              attributeName="cx"
              values="100;0;100"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Connecting circuit to CTA buttons */}
        <svg
          className="absolute top-[67%] left-1/2 -translate-x-1/2 w-[200px] h-[100px] text-blue-200 opacity-60"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            d="M100,0 L100,40 L80,60 M100,40 L120,60"
          />
          <circle cx="100" cy="0" r="3" fill="currentColor">
            <animate
              attributeName="r"
              values="2;4;2"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="100" cy="40" r="2" fill="currentColor" />
          <circle cx="80" cy="60" r="2" fill="currentColor" />
          <circle cx="120" cy="60" r="2" fill="currentColor" />

          <circle cx="100" cy="20" r="1.5" fill="currentColor">
            <animate
              attributeName="cy"
              values="0;40;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Pulse animations on nodes - with fixed positions instead of random */}
        {CIRCLE_POSITIONS.map((position, i) => (
          <div key={i} className="absolute">
            <motion.div
              className="h-4 w-4 rounded-full bg-blue-500/20 absolute"
              style={{
                top: position.top,
                left: position.left,
              }}
              animate={{
                scale: [0.8, 1.5, 0.8],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        ))}
      </div>

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
                Introducing Workforce
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Circuit node points on heading - hidden on mobile */}
            <div className="absolute w-3 h-3 rounded-full bg-blue-400/30 border border-blue-400/20 -left-2 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
            <div className="absolute w-3 h-3 rounded-full bg-blue-400/30 border border-blue-400/20 -right-2 top-1/2 transform -translate-y-1/2 hidden md:block"></div>

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
            {/* Circuit node points on paragraph - hidden on mobile */}
            <div className="absolute w-3 h-3 rounded-full bg-blue-400/20 border border-blue-400/10 -left-2 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
            <div className="absolute w-3 h-3 rounded-full bg-blue-400/20 border border-blue-400/10 -right-2 top-1/2 transform -translate-y-1/2 hidden md:block"></div>

            <motion.p
              className="mx-auto max-w-[700px] text-center px-5 text-lg md:text-base text-gray-600 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Apt is the only algo trading platform built exclusively for
              brokers. Fully compliant, reliable, and designed to boost their
              client retention. Discover an AI-powered automation platform that
              makes algo trading simple, fast, and scalable.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Circuit connection to buttons - hidden on mobile */}
            <div className="absolute left-1/2 -top-10 w-px h-10 bg-blue-200/30 hidden sm:block"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-3 h-3 rounded-full bg-blue-400/20 border border-blue-400/10 hidden sm:block"></div>

            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-base font-medium text-white shadow hover:bg-blue-500 transition-colors"
            >
              Try for free
            </Link>
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-medium text-black shadow hover:bg-gray-100 transition-colors"
            >
              Request a demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
