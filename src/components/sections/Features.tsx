"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Separate video states for each view
  const [showVideoMobile, setShowVideoMobile] = useState(false);
  const [showVideoTablet, setShowVideoTablet] = useState(false);
  const [showVideoDesktop, setShowVideoDesktop] = useState(false);

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
                  src="/Home Mobile.png"
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
              className="bg-white rounded-xl overflow-hidden w-full max-w-[410px] h-auto py-2 flex items-center justify-center relative"
              style={{
                boxShadow:
                  "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
              }}
            >
              <div className="w-full px-2 flex items-center justify-center overflow-hidden">
                {showVideoMobile ? (
                  <iframe
                    src="https://www.youtube.com/embed/74kvtqMUc4A?autoplay=1"
                    title="APT Trading Platform Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video border-0 rounded-lg"
                  ></iframe>
                ) : (
                  <>
                    <Image
                      src="/Group 38141.png"
                      alt="Laptop view"
                      className="w-full h-auto object-contain rounded-lg"
                      width={410}
                      height={200}
                      priority
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                      onClick={() => setShowVideoMobile(true)}
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="w-14 h-14 bg-blue-600/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="absolute -inset-3 bg-blue-500/20 rounded-full animate-ping opacity-50"></div>
                      </div>
                    </div>
                  </>
                )}
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
              src="/Home Mobile.png"
              alt="Mobile view"
              className="max-w-full max-h-full object-contain"
              width={200}
              height={400}
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden w-[460px] h-[420px] flex items-center justify-center relative"
          style={{
            x: rightX,
            boxShadow:
              "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {showVideoTablet ? (
              <iframe
                src="https://www.youtube.com/embed/74kvtqMUc4A?autoplay=1"
                title="APT Trading Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            ) : (
              <>
                <Image
                  src="/Group 38141.png"
                  alt="Laptop view"
                  className="max-w-full max-h-full object-contain"
                  width={420}
                  height={380}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setShowVideoTablet(true)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping opacity-50"></div>
                  </div>
                </div>
              </>
            )}
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
              src="/Home Mobile.png"
              alt="Mobile view"
              className="max-w-full max-h-full rounded-xl object-contain"
              width={240}
              height={480}
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden w-[970px] py-0.5 h-[530px] flex items-center justify-center relative"
          style={{
            x: rightX,
            boxShadow:
              "0 15px 30px rgba(59, 130, 246, 0.08), 0 8px 15px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {showVideoDesktop ? (
              <iframe
                src="https://www.youtube.com/embed/74kvtqMUc4A?autoplay=1"
                title="APT Trading Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src="/Group 38141.png"
                  alt="Laptop view"
                  className="max-w-full max-h-full object-contain"
                  width={1000}
                  height={500}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setShowVideoDesktop(true)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping opacity-50"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
