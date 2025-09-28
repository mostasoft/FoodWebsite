"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Sample featured food items
const featuredDishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 12.99,
    image: "/pizza-margherita.jpg",
    badge: "Chef's Special",
  },
  {
    id: 2,
    name: "Spicy Ramen",
    category: "Noodles",
    price: 14.5,
    image: "/Spicy Ramen.jpg",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    category: "Seafood",
    price: 18.75,
    image: "/Grilled Salmon.jpg",
    badge: "New",
  },
  {
    id: 4,
    name: "Vegan Buddha Bowl",
    category: "Vegan",
    price: 11.0,
    image: "/Vegan Buddha Bowl.jpg",
    badge: "Healthy",
  },
  {
    id: 5,
    name: "Cheeseburger Deluxe",
    category: "Burgers",
    price: 10.99,
    image: "/Cheeseburger Deluxe.jpg",
    badge: "Featured",
  },
  {
    id: 6,
    name: "Chicken Tikka Masala",
    category: "Indian",
    price: 13.25,
    image: "/Paneer Tikka.jpg",
    badge: "Spicy",
  },
  {
    id: 7,
    name: "Sushi Platter",
    category: "Japanese",
    price: 22.5,
    image: "/Sushi Platter.jpg",
    badge: "Limited",
  },
  {
    id: 8,
    name: "Pad Thai",
    category: "Thai",
    price: 12.0,
    image: "/Pad Thai.jpg",
    badge: "Trending",
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    price: 7.99,
    image: "/Chocolate Lava Cake.jpg",
    badge: "Sweet Pick",
  },
];

export default function DynamicFeaturedMenu() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700">
          Featured Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Badge */}
              {dish.badge && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                  {dish.badge}
                </span>
              )}

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-2xl font-bold mb-1">{dish.name}</h3>
                <p className="text-red-300 font-semibold text-lg mb-1">
                  ${dish.price.toFixed(2)}
                </p>
                <p className="text-gray-200 mb-4">{dish.category}</p>
                <Link
                  href={`/menu/${dish.id}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
