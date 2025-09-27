// components/AboutUsFood.jsx
"use client";

import React from "react";
import { FaUtensils, FaLeaf, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaUtensils />,
    title: "Fresh & Delicious",
    desc: "We use only the freshest ingredients to create mouth-watering dishes every day.",
    tag: "100+ Dishes Served",
    color: "bg-amber-600",
  },
  {
    icon: <FaLeaf />,
    title: "Healthy Options",
    desc: "Our menu includes a variety of healthy and vegan-friendly meals for everyone.",
    tag: "50+ Vegan Meals",
    color: "bg-green-600",
  },
  {
    icon: <FaAward />,
    title: "Award-Winning Recipes",
    desc: "Our chefs craft unique recipes that have been recognized and loved by food critics.",
    tag: "5-Star Reviews",
    color: "bg-red-600",
  },
];

export default function AboutUsFood() {
  return (
    <section className="relative py-20 bg-yellow-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-16 w-64 h-64 bg-amber-200 rounded-full opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-green-200 rounded-full opacity-30 -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-amber-700">Why Dine With Us</h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          At our restaurant, we serve fresh, delicious meals crafted with love. Our chefs and staff ensure an unforgettable dining experience for every guest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className={`w-16 h-16 flex items-center justify-center text-white text-3xl mb-4 rounded-full ${feature.color} mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.desc}</p>
              <span className="inline-block mt-2 text-sm font-bold text-gray-800 bg-gray-200 px-3 py-1 rounded-full">
                {feature.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
