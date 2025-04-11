"use client";

import Link from "next/link";
import Header from "../layout/Header";

export default function Hero() {
  return (
    <section className="relative">
      <Header />
      <div className="container mx-auto flex flex-col items-center justify-center pt-20 py-5 md:pt-36 md:py-5 lg:pt-36 lg:py-5 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="flex justify-center mb-4 shadow-md rounded-full w-max">
              <button className="bg-white text-black font-bold px-4 py-2 rounded-l-full rounded-r-none">
                What&apos;s new?
              </button>
              <span
                className="w-0.1 h-6/12 mt-3 inline-block bg-gray-100"
                style={{ border: "0.1px solid gray" }}
              ></span>
              <button className="bg-white font-medium text-black px-4 py-2 rounded-r-full rounded-l-none">
                Introducing Workforce
              </button>
            </div>
          </div>
          <h1 className="text-6xl font-bold">
            Bring Algo Trading to Your Clients
            <span className="text-blue-600"> Fast & Compliant </span> with Apt.
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-base text-gray-600 mt-4">
            Apt is the only algo trading platform built exclusively for brokers.
            Fully compliant, reliable, and designed to boost their client
            retention. Discover an AI-powered automation platform that makes
            algo trading simple, fast, and scalable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-base font-medium text-white shadow hover:bg-blue-500 transition-colors"
            >
              Try for free
            </Link>
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-medium text-black shadow hover:bg-gray-100 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
