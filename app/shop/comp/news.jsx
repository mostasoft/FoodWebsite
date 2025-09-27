"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    desc: "Cheesy goodness with fresh basil and tomato sauce.",
    image: "/food/pizza.jpg",
  },
  {
    id: 2,
    title: "Sushi Platter Deluxe",
    desc: "Fresh sushi rolls with premium fish and vegetables.",
    image: "/food/sushi.jpg",
  },
  {
    id: 3,
    title: "Vegan Buddha Bowl",
    desc: "A nutritious bowl with quinoa, avocado, and veggies.",
    image: "/food/buddha-bowl.jpg",
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    desc: "Decadent dessert with molten chocolate center.",
    image: "/food/lava-cake.jpg",
  },
  {
    id: 5,
    title: "Grilled Steak & Veggies",
    desc: "Juicy steak with seasonal grilled vegetables.",
    image: "/food/steak.jpg",
  },
];

export default function FeaturedRecipes() {
  const [index, setIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % recipes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-700">
          Featured Recipes
        </h2>

        {/* Featured Recipe */}
        <div className="relative mb-8 md:mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={recipes[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={recipes[index].image}
                alt={recipes[index].title}
                className="w-full h-96 md:h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl md:text-4xl font-bold">
                  {recipes[index].title}
                </h3>
                <p className="mt-2 text-lg md:text-xl">{recipes[index].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails / Progress */}
        <div
          ref={thumbnailsRef}
          className="flex justify-center items-center gap-4 overflow-x-auto py-4 scrollbar-hide"
        >
          {recipes.map((item, i) => (
            <motion.div
              key={item.id}
              className={`flex-shrink-0 cursor-pointer relative rounded-lg overflow-hidden transition-transform ${
                i === index
                  ? "scale-125 border-2 border-yellow-600 shadow-2xl"
                  : "scale-100"
              }`}
              onClick={() => setIndex(i)}
              layout
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              {/* Progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-yellow-600"
                layout
                animate={{ width: i === index ? "100%" : "0%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
