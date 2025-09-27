// components/PartnersFood.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

// Example food-related partners logos
const brands = [
  "/brands/organic-farm.png",
  "/brands/local-market.png",
  "/brands/chef-supplies.png",
  "/brands/kitchenware.png",
];

export default function PartnersFood() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">
          Our Trusted Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {brands.map((b, i) => (
            <motion.img
              key={i}
              src={b}
              alt="partner logo"
              className="h-12 md:h-16 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
