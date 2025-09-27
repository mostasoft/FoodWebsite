"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredFoods = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "$12.99",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1603070027064-3f5f5643a8b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sushi Deluxe",
    price: "$18.50",
    category: "Japanese",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb61?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Vegan Salad Bowl",
    price: "$10.00",
    category: "Salads",
    image: "https://images.unsplash.com/photo-1617196030200-2d64e3d3911f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chocolate Muffin",
    price: "$4.50",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1617196030411-35d9c8b9e372?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FeaturedFoods() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredFoods.length);
    }, 8000); // Change every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-700">
          Featured Foods
        </h2>
        <div className="relative overflow-hidden h-[400px] md:h-[450px]">
          {featuredFoods.map((food, i) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : 50 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full rounded-xl shadow-lg"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{food.name}</h3>
                <p className="text-lg font-semibold">{food.price}</p>
                <p className="text-sm">{food.category}</p>
                <Link
                  href={`/menu/${food.id}`}
                  className="bg-yellow-600 hover:bg-yellow-700 transition px-4 py-2 rounded-lg mt-2 inline-block font-semibold"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
