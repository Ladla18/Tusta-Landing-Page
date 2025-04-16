"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Compliances() {
  return (
    <section id="compliance-management" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Compliance Management
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay compliant with our comprehensive compliance management
            solutions
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-lg mx-auto"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/image 18.jpg"
                width={600}
                height={400}
                alt="Compliance Management Platform"
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
