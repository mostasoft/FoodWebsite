// components/FoodReviews.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Food Blogger",
    review: "The pasta was absolutely amazing! Fresh ingredients and rich flavors.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 2,
    name: "Mark Thompson",
    position: "Local Chef",
    review: "Best sushi I've had in town. Highly recommend their chef's special rolls!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    position: "Food Enthusiast",
    review: "Cozy ambiance and delicious desserts. Will definitely visit again.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: 4,
    name: "Daniel Kim",
    position: "Travel Blogger",
    review: "Loved the smoothie variety! Perfect for a healthy start to the day.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 5,
    name: "Emma Davis",
    position: "Local Resident",
    review: "Excellent service and tasty vegan options. A must-try for everyone!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 6,
    name: "Liam Scott",
    position: "Food Critic",
    review: "Innovative flavors and presentation. Truly a culinary delight.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    position: "Frequent Diner",
    review: "Perfect family-friendly restaurant. Everyone enjoyed their meals!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    id: 8,
    name: "Ethan Wilson",
    position: "Foodie",
    review: "Their coffee and pastries are unmatched. Cozy vibe and friendly staff.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

export default function FoodReviews() {
  const [index, setIndex] = useState(0);
  const intervalTime = 7000; // 7 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-700">
          What Our Customers Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={reviews[index].image}
                alt={reviews[index].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-amber-600"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {Array(reviews[index].rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-700 mb-4">{reviews[index].review}</p>
                <h3 className="font-bold text-lg">{reviews[index].name}</h3>
                <p className="text-gray-500">{reviews[index].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-amber-600 w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
