"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-4 py-10 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
