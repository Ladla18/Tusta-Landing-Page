"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
 
} from "framer-motion";
import Image from "next/image";

export default function Features() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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



  // Track active slide for dots
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const itemWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  // Helper function to scroll to specific item
  const scrollToItem = (index: number) => {
    if (!scrollContainerRef.current) return;

    const itemWidth = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 overflow-hidden py-12 min-h-[90vh]"
    >
      {/* Mobile view (snap scroll) */}
      <div className="md:hidden flex flex-col items-center px-0 py-12">
        {/* Scroll container with snap points */}
        <div
          ref={scrollContainerRef}
          className="w-full snap-x snap-mandatory flex overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Mobile device card */}
          <div className="snap-center flex-shrink-0 w-full flex justify-center px-4">
            <div
              className="bg-white z-10 rounded-xl overflow-hidden w-[250px] h-[550px] flex items-center justify-center"
              style={{
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
                  width={240}
                  height={520}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Laptop card */}
          <div className="snap-center flex-shrink-0 w-full flex justify-center items-center px-4">
            <div
              className="bg-white rounded-xl overflow-hidden w-full max-w-[410px] h-auto py-2 flex items-center justify-center"
              style={{
                boxShadow:
                  "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
              }}
            >
              <div className="w-full px-2 flex items-center justify-center overflow-hidden">
                <Image
                  src="/Group 38141.png"
                  alt="Laptop view"
                  className="w-full h-auto object-contain rounded-lg"
                  width={410}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
              src="/Group 38141.png"
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
              src="/Group 38141.png"
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
