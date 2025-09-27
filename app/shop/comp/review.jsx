"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Emma Wilson",
    position: "Food Blogger",
    review: "Absolutely delicious! The flavors are fresh and delightful.",
  },
  {
    id: 2,
    name: "Liam Brown",
    position: "Chef",
    review: "Top-notch ingredients and presentation. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    position: "Customer",
    review: "The best dining experience I've had in a long time.",
  },
  {
    id: 4,
    name: "Noah Smith",
    position: "Food Enthusiast",
    review: "Amazing variety and taste. I keep coming back for more!",
  },
  {
    id: 5,
    name: "Olivia Johnson",
    position: "Vegan Blogger",
    review: "Fresh, healthy, and absolutely delicious meals for everyone.",
  },
];

export default function FoodReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-700">
          What Our Customers Say
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[index].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative"
          >
            <p className="text-gray-700 text-lg md:text-xl mb-4">
              "{reviews[index].review}"
            </p>
            <h3 className="font-bold text-xl md:text-2xl">{reviews[index].name}</h3>
            <p className="text-gray-500 mb-4">{reviews[index].position}</p>
            <div className="flex justify-center text-yellow-400 space-x-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-yellow-600 scale-125" : "bg-yellow-300"
              }`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
