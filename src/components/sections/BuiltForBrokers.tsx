"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Improve Client Retention",
    description:
      "With no manual intervention required, traders enjoy seamless execution — boosting your retention and brokerage margins.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "bg-white hover:bg-blue-600 cursor-pointer text-black",
  },
  {
    title: "Lead with Innovation",
    description:
      "Give your clients & sub brokers a unique tech offering which no other brokers currently have, give them the freedom to build, test and automate.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8H12.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color:
      "bg-white hover:bg-blue-600 cursor-pointer hover:text-white text-black",
  },
  {
    title: "Additional Revenue Stream",
    description:
      "Monetize your platform by offering optional client subscriptions — and create a new income channel.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1V23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color:
      "bg-white hover:bg-blue-600 cursor-pointer hover:text-white text-black",
  },
  {
    title: "Compliant Friendly",
    description:
      "We ensure your platform remains fully SEBI compliant — today and in the years to come.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4L12 14.01L9 11.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color:
      "bg-white hover:bg-blue-600 cursor-pointer hover:text-white text-black",
  },
  {
    title: "Stay Updated",
    description:
      "Clients access the smartest, most user-friendly automation platform powered by AI — with all future updates and features delivered seamlessly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 6L13.5 15.5L8.5 10.5L1 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6H23V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color:
      "bg-white hover:bg-blue-600 cursor-pointer hover:text-white text-black",
  },
  {
    title: "No additional team required",
    description:
      "Save the cost of maintaining a full-time team to build, manage, and update your automated trading infrastructure.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8V14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 11H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color:
      "bg-white hover:bg-blue-600 cursor-pointer hover:text-white text-black",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px rgba(59, 130, 246, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
      }}
      className={`${feature.color} rounded-xl p-8 border border-gray-100 shadow-sm h-full flex flex-col group transition-all duration-300`}
    >
      <div className="relative mb-6">
        <div className="absolute -left-2 -top-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg opacity-10"></div>
        <div className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300 relative">
          {feature.icon}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
        {feature.title}
      </h3>
      <p
        className={`text-sm ${
          feature.color.includes("bg-white")
            ? "text-gray-500 group-hover:text-white"
            : "text-white/90"
        }`}
      >
        {feature.description}
      </p>
    </motion.div>
  );
};

export default function BuiltForBrokers() {
  return (
    <section
      id="built-for-brokers"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl  font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Built for Brokers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to simplify your trading operations and deliver
            exceptional client experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
