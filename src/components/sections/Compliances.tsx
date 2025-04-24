"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tooltip from "../Tooltip";

const complianceData = {
  brokerDashboard: {
    feature: "Broker Dashboard",
    description:
      "Centralized dashboard to manage algo registration, approval statuses, live strategy monitoring, billing, and client support.",
    circular:
      "Brokers responsible for monitoring API activity and investor grievances.",
    page: "p.3, Section II(c)",
  },
  algoRegistration: {
    feature: "Algo Registration Portal",
    description:
      "Portal for traders to request new algo strategy approval, submitted to brokers for onward submission to the exchange.",
    circular:
      "Brokers must obtain exchange approval for each algo; Algo registration required.",
    page: "p.3, Section II(a); p.5, V(a)",
  },
  simulation: {
    feature: "Simulation Sandbox Report",
    description:
      "Run strategies on historical data to generate sandbox-based performance reports. Useful before submitting for approval to exchanges.",
    circular: "Exchanges must simulate/test all algos before approval.",
    page: "p.4, IV(a)(ii)",
  },
  killSwitch: {
    feature: "Configurable Kill Switch",
    description:
      "Brokers can deactivate individual or grouped algos (by logic, stock, or ID) instantly.",
    circular: "Kill switch to be enabled for specific algo IDs.",
    page: "p.4, Section IV(a)(iii)",
  },
  billing: {
    feature: "Client Billing & Disclosure Module",
    description:
      "Broker-approved billing module linked to trader's strategy. Includes disclosure of subscription charges and broker fees.",
    circular:
      "Full disclosure of all fees and avoidance of conflicts of interest is mandatory.",
    page: "p.4, Section III(d)",
  },
  support: {
    feature: "Support Management with Algo ID",
    description:
      "Algo-linked support tickets for precise tracking of issues and resolution accountability.",
    circular:
      "Brokers solely responsible for handling algo-related grievances.",
    page: "p.3, Section II(c)",
  },
  auditTrail: {
    feature: "Audit Trailing & Logging Engine",
    description:
      "Complete logs of decisions, strategy changes, and orders. Ready for SEBI/exchange audits.",
    circular: "Brokers must maintain full audit trail for all algo orders.",
    page: "p.3, Section II(b)",
  },
  algoCreation: {
    feature: "Algo Creation & Registration",
    description:
      "Each algo receives a system-generated unique ID (tagged with SEBI-mandated exchange identifier)..",
    circular:
      "All algo orders must be tagged with unique exchange-provided identifiers..",
    page: "p.2, Section I(b); p.3, Section II(b)",
  },
  strategy: {
    feature: "Encrypted Strategy Submission + NDAs",
    description:
      "Encrypted algo submissions, optional NDA between broker and vendor, supports confidentiality compliance.",
    circular:
      "SEBI mandates steps for protecting strategy confidentiality (NDAs, encryption, etc.).",
    page: "p.5, Section IV(c)",
  },
  statusManagement: {
    feature: "Status Management",
    description:
      "Algo status tracking directly in broker and trader portals. Real-time visibility into SEBI-mandated approval lifecycle.",
    circular: "Brokers must seek exchange approval and track changes..",
    page: "p.3, Section II(a)",
  },
};

export default function Compliances() {
  return (
    <section
      id="compliance-management"
      className="py-24 bg-white"
    >
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

        <div className="sm:flex justify-center hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto px-6"
          >
            

            <div className="relative rounded-2xl shadow-xl border border-gray-200">
              {/* Dots overlay */}
              <div className="absolute inset-0 z-10">
                {/* Exchange Request dot */}
                <div className="absolute top-[15%] left-[26%] group">
                  <Tooltip content={complianceData.algoRegistration}>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Status Management dot */}
                <div className="absolute top-[15%] left-[42%] group">
                  <Tooltip content={complianceData.statusManagement}>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Audit Trail dot */}
                <div className="absolute top-[15%] left-[62%] group">
                  <Tooltip content={complianceData.auditTrail}>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Broker API dot */}
                <div className="absolute top-[15%] left-[82%] group">
                  <Tooltip content={complianceData.algoRegistration}>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Exchange dot */}
                <div className="absolute top-[15%] left-[92%] group">
                  <Tooltip content={complianceData.algoRegistration}>
                    <div className="w-3 h-3 bg-black rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Admin Broker dot */}
                <div className="absolute top-[45%] left-[12%] group">
                  <Tooltip content={complianceData.brokerDashboard}>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Simulation dot */}
                <div className="absolute top-[45%] left-[32%] group">
                  <Tooltip content={complianceData.simulation}>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Kill Switch dot */}
                <div className="absolute top-[45%] left-[50%] group">
                  <Tooltip content={complianceData.killSwitch}>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Billing dot */}
                <div className="absolute top-[45%] left-[70%] group">
                  <Tooltip content={complianceData.billing}>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Support dot */}
                <div className="absolute top-[45%] left-[89%] group">
                  <Tooltip content={complianceData.support}>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Algo Creation dot */}
                <div className="absolute top-[75%] left-[29%] group">
                  <Tooltip content={complianceData.algoCreation}>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Strategy dot */}
                <div className="absolute top-[75%] left-[52%] group">
                  <Tooltip content={complianceData.strategy}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>

                {/* Trader/RA dot */}
                <div className="absolute top-[75%] left-[80%] group">
                  <Tooltip content={complianceData.algoCreation}>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse cursor-pointer"></div>
                  </Tooltip>
                </div>
              </div>
              <Image
                src="/images/image 18.jpg"
                width={800}
                height={500}
                alt="Compliance Management Platform"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
