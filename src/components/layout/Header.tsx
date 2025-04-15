"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 border-2 ${
        scrolled
          ? "border-gray-200 bg-white/95 backdrop-blur-sm"
          : "border-gray-100 bg-white"
      } shadow-lg z-50 w-10/12 left-1/2 -translate-x-1/2 rounded-xl py-1 transition-all duration-300`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/white_rect-removebg.png"
            alt="logo"
            width={80}
            height={40}
            className="w-20 h-10 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {[
            "Home",
            "Features",
            "Built For Brokers",
            "Compliance Management",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] font-semibold text-[#272727] hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="#demo"
            style={{
              background:
                "linear-gradient(102.61deg, #5271FF 41.19%, #6805FE 124.6%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium text-white shadow transition-colors"
          >
            Request a demo
          </Link>
          <button
            className="md:hidden p-1 transition-colors duration-150 hover:bg-gray-100 rounded-md"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {[
                  "Products",
                  "Solutions",
                  "Resources",
                  "Customers",
                  "Pricing",
                  "Careers",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-base font-medium text-gray-700 hover:text-blue-600 block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 flex flex-col space-y-4">
                  <Link
                    href="#demo"
                    style={{
                      background:
                        "linear-gradient(102.61deg, #5271FF 41.19%, #6805FE 124.6%)",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium text-white shadow transition-colors"
                  >
                    Request a demo
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
