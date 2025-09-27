// components/ContactHeroFood.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ContactHeroFood() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] text-white">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-food-hero.jpg')" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact <span className="text-green-400">Delicious Bites</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Have questions, want to share your feedback, or need help with a recipe? 
          Get in touch with us today—we’d love to hear from you!
        </motion.p>
      </div>
    </section>
  );
}
