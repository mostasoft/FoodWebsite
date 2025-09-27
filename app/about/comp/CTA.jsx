// components/AboutCTAFood.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutCTAFood() {
  return (
    <section className="py-20 bg-green-500 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hungry for Something Delicious?
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore our recipes, order fresh meals, or join our newsletter for the latest culinary inspiration!
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 120 }}
        >
          <a
            href="/recipes"
            className="inline-block bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-50 transition transform hover:scale-105"
          >
            View Recipes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
