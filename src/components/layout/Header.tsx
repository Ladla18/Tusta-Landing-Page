"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll position to change header style and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past initial threshold - hide the header
        setVisible(false);
      } else {
        // Scrolling up - show the header
        setVisible(true);
      }

      // Update styles based on scroll position
      setScrolled(currentScrollY > 20);

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle smooth scrolling to sections
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();

    // Default to top of page for home
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      // Subtract header height to account for fixed header
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Built For Brokers", id: "built-for-brokers" },
    { name: "Compliance Management", id: "compliance-management" },
    { name: "Contact Us", id: "contact-us" },
  ];

  return (
    <motion.header
      className={`fixed top-5 md:top-5 border-2 ${
        scrolled
          ? "border-gray-200 bg-white/95 backdrop-blur-sm"
          : "border-gray-100 bg-white"
      } shadow-lg z-50 w-full md:w-10/12 left-0 md:left-1/2 md:-translate-x-1/2 rounded-xl py-1 transition-colors duration-300`}
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -150,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={(e) => scrollToSection(e, "home")}
        >
          <Image
            src="/white_rect-removebg.png"
            alt="logo"
            width={80}
            height={40}
            className="w-20 h-10 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.id}`}
              className="text-[15px] font-semibold text-[#272727] hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="https://calendly.com/param-apt/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background:
                "linear-gradient(102.61deg, #5271FF 41.19%, #6805FE 124.6%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium text-white shadow transition-colors"
          >
            Schedule a demo
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
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={`#${item.id}`}
                      className="text-base font-medium text-gray-700 hover:text-blue-600 block py-2"
                      onClick={(e) => scrollToSection(e, item.id)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 flex flex-col space-y-4">
                  <Link
                    href="https://calendly.com/param-apt/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background:
                        "linear-gradient(102.61deg, #5271FF 41.19%, #6805FE 124.6%)",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium text-white shadow transition-colors"
                  >
                    Schedule a demo
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
