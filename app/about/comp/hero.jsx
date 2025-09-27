// components/AboutHeroFood.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AboutHeroFood() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] text-white">
      {/* Background image with subtle scale animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-food-hero.jpg')" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-green-400">Delicious Bites</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          At Delicious Bites, we believe food brings people together. Our mission is to inspire 
          and delight you with recipes, fresh meals, and a passion for cooking. Quality, taste, 
          and love go into every dish we share.
        </motion.p>

        <motion.a
          href="/recipes"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 120 }}
        >
          View Recipes
        </motion.a>
      </div>
    </section>
  );
}
