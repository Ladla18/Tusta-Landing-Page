"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animation range: start at center → move apart → return to center
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.9, 1],
    ["30%", "0%", "0%", "30%"]
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.9, 1],
    ["-10%", "0%", "0%", "-10%"]
  );

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 overflow-hidden py-12 min-h-screen"
    >
      <div className="flex justify-center px-4 relative gap-10 py-5">
        {/* Mobile App Section */}
        <motion.div
          className="bg-white z-10 rounded-xl overflow-hidden w-[280px] h-[530px] flex items-center justify-center"
          style={{
            x: leftX,
            boxShadow:
              "0 10px 25px rgba(59, 130, 246, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/image.png"
              alt="Mobile view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Laptop Section */}
        <motion.div
          className="bg-white rounded-xl overflow-hidden w-[1100px] h-[530px] flex items-center justify-center"
          style={{
            x: rightX,
            boxShadow:
              "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/Screenshot 2025-04-11 135059.png"
              alt="Laptop view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
