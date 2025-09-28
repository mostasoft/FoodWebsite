// components/FoodHero.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FoodHero() {
  return (
    <section className="relative h-[70vh] bg-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80"
        alt="Delicious Food Banner"
        className="absolute w-full h-full object-cover brightness-50"
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fresh & Delicious Meals
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Taste the best dishes made with love and fresh ingredients
        </p>
        <Link
          href="#menu"
          className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-semibold"
        >
          Explore Menu
        </Link>
      </motion.div>
    </section>
  );
}
