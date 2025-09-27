// components/FeaturedPosts.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const featuredPosts = [
  {
    id: 1,
    title: "10 Healthy Breakfast Ideas",
    excerpt: "Start your day right with these delicious and healthy breakfast options.",
    image: "/blog/breakfast.jpg",
    category: "Breakfast",
    date: "Sep 20, 2025",
  },
  {
    id: 2,
    title: "5 Quick Vegan Lunch Recipes",
    excerpt: "Quick and easy vegan lunches that are perfect for work or school.",
    image: "/blog/vegan-lunch.jpg",
    category: "Lunch",
    date: "Sep 18, 2025",
  },
  {
    id: 3,
    title: "The Ultimate Dessert Guide",
    excerpt: "Learn how to make amazing desserts that everyone will love.",
    image: "/blog/dessert.jpg",
    category: "Dessert",
    date: "Sep 15, 2025",
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Recipes</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-400">{post.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
