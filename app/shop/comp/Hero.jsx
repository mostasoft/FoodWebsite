// components/InventoryHero.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InventoryHero() {
  return (
    <section className="relative h-[70vh] bg-gray-800 flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1618222221154-1f6d7c8a2d5e?auto=format&fit=crop&w=1600&q=80"
        alt="Showroom Banner"
        className="absolute w-full h-full object-cover brightness-50"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Inventory</h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore our premium collection of vehicles and find your dream car
        </p>
        <Link
          href="#inventory-list"
          className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold"
        >
          Browse Cars
        </Link>
      </motion.div>
    </section>
  );
}
