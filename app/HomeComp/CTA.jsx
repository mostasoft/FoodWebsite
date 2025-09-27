"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hungry for Something Delicious?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Browse our menu and treat yourself to an unforgettable meal. Reserve your table or order now!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/menu"
            className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            View Menu
          </Link>
          <Link
            href="/reservation"
            className="bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
