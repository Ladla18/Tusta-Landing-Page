"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });

      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section className="bg-black text-white pt-24 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute -top-40 -right-20 w-96 h-96 bg-gray-800/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-gray-700/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-medium mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let&apos;s connect
          </motion.h2>
          <motion.div
            className="h-px w-20 bg-white/30 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/5 p-8 md:p-10 rounded-xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white/80"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 pl-4 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-white/30 focus:border-white/30 focus:outline-none transition-all duration-300"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 pl-4 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-white/30 focus:border-white/30 focus:outline-none transition-all duration-300"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-white/80"
                >
                  Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full p-4 pl-4 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-white/30 focus:border-white/30 focus:outline-none transition-all duration-300"
                    disabled={formStatus === "submitting"}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-4 pl-4 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-white/30 focus:border-white/30 focus:outline-none transition-all duration-300"
                    required
                    disabled={formStatus === "submitting"}
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <motion.button
                  type="submit"
                  className={`relative overflow-hidden px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                    formStatus === "submitting"
                      ? "bg-gray-500 cursor-wait"
                      : formStatus === "success"
                      ? "bg-gray-400"
                      : formStatus === "error"
                      ? "bg-gray-400"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting"
                    ? "Submitting..."
                    : formStatus === "success"
                    ? "Message Sent"
                    : formStatus === "error"
                    ? "Try Again"
                    : "Submit"}

                  {formStatus === "submitting" && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-white/30"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1 }}
                    />
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-12 lg:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-md border border-white/10"
            >
              <h3 className="text-2xl font-medium mb-4">Contact</h3>
              <a
                href="tel:+919977623766"
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                +91 9977623766
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-md border border-white/10"
            >
              <h3 className="text-2xl font-medium mb-4">Email</h3>
              <a
                href="mailto:info@apt.trading"
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                info@apt.trading
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-md border border-white/10"
            >
              <h3 className="text-2xl font-medium mb-4">Address</h3>
              <a
                href="https://maps.google.com/?q=B-01, Shreekrupa, Chandavarkar Rd, Borivali W, Mumbai - 400092"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-start group"
              >
                <span>
                  B-01, Shreekrupa, Chandavarkar Rd, Borivali W,
                  <br />
                  Mumbai - 400092.
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <motion.div
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/darkmodelogo.png"
                alt="Apt Logo"
                width={120}
                height={60}
                className="transition-opacity hover:opacity-80"
              />
            </motion.div>
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Apt Trading. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">Made with ❤️ by Apt</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
