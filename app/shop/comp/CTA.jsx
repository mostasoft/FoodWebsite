// components/BookTestDrive.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function BookTestDrive() {
  return (
    <section className="py-16 bg-red-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Book a test drive today and experience our premium vehicles in action.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Book Test Drive
        </Link>
      </div>
    </section>
  );
}
