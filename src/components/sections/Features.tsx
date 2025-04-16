"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

  // For mobile, apply fade in and scale animation instead of horizontal movement
  const mobileOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.6]
  );

  const mobileScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  );

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 overflow-hidden py-12 min-h-screen"
    >
      {/* Mobile view (stacked layout) */}
      <div className="md:hidden flex flex-col items-center px-4 space-y-8 py-12">
        <motion.div
          className="bg-white z-10 rounded-xl overflow-hidden w-[280px] h-[530px] flex items-center justify-center"
          style={{
            opacity: mobileOpacity,
            scale: mobileScale,
            boxShadow:
              "0 10px 25px rgba(59, 130, 246, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/image.png"
              alt="Mobile view"
              className="max-w-full max-h-full object-contain"
              width={240}
              height={480}
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden w-full max-w-[350px] h-[210px] flex items-center justify-center"
          style={{
            opacity: mobileOpacity,
            scale: mobileScale,
            boxShadow:
              "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/Screenshot 2025-04-11 135059.png"
              alt="Laptop view"
              className="max-w-full max-h-full object-contain"
              width={320}
              height={180}
            />
          </div>
        </motion.div>
      </div>

      {/* Tablet view (adjusted sizes) */}
      <div className="hidden md:flex lg:hidden justify-center px-4 relative gap-6 py-5">
        <motion.div
          className="bg-white z-10 rounded-xl overflow-hidden w-[220px] h-[420px] flex items-center justify-center"
          style={{
            x: leftX,
            boxShadow:
              "0 10px 25px rgba(59, 130, 246, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/moibile.png"
              alt="Mobile view"
              className="max-w-full max-h-full object-contain"
              width={200}
              height={400}
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden w-[460px] h-[420px] flex items-center justify-center"
          style={{
            x: rightX,
            boxShadow:
              "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/Screenshot 2025-04-11 at 11.30.06 AM 1.png"
              alt="Laptop view"
              className="max-w-full max-h-full object-contain"
              width={420}
              height={380}
            />
          </div>
        </motion.div>
      </div>

      {/* Desktop view (original layout) */}
      <div className="hidden lg:flex justify-center px-4 relative gap-10 py-5">
        <motion.div
          className="bg-white z-10 rounded-xl overflow-hidden w-[250px] py-1 h-[530px] flex items-center justify-center"
          style={{
            x: leftX,
            boxShadow:
              "0 10px 25px rgba(59, 130, 246, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/moibile.png"
              alt="Mobile view"
              className="max-w-full max-h-full rounded-xl object-contain"
              width={240}
              height={480}
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden w-[970px] py-0.5 h-[530px] flex items-center justify-center"
          style={{
            x: rightX,
            boxShadow:
              "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src="/Screenshot 2025-04-11 at 11.30.06 AM 1.png"
              alt="Laptop view"
              className="max-w-full max-h-full object-contain"
              width={1000}
              height={500}
            />
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}
