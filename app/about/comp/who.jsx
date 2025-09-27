// components/OurStoryFood.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function OurStoryFood() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At <span className="font-semibold text-green-500">Delicious Bites</span>, 
            our journey began with a simple mission: to bring joy, flavor, and inspiration 
            to every kitchen. We believe that cooking should be fun, easy, and delicious.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From sharing family recipes to exploring new flavors, we’re here to help 
            food lovers of all kinds discover amazing dishes, learn new techniques, 
            and enjoy every bite.
          </p>
        </motion.div>

        {/* Image content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/our-story-food.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
