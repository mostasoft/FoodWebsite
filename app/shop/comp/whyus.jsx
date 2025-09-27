"use client";

import React from "react";
import { FaLeaf, FaUtensils, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "We source only the freshest ingredients to ensure top-quality meals every time.",
  },
  {
    icon: <FaUtensils />,
    title: "Delicious Recipes",
    desc: "Our chefs craft delicious dishes that satisfy all taste buds.",
  },
  {
    icon: <FaSmile />,
    title: "Customer Satisfaction",
    desc: "Our priority is happy customers enjoying every bite of our meals.",
  },
];

export default function AboutUsFood() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-700">
          Why Choose Us
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          At FreshBite, we bring you healthy, delicious meals made from premium ingredients. Experience food that’s both tasty and nourishing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="text-yellow-600 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
