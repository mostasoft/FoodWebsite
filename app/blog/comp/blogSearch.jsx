// components/LiveSearchPosts.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPosts = [
  {
    id: 1,
    title: "10 Healthy Breakfast Ideas",
    excerpt: "Start your day right with these delicious and healthy breakfast options.",
    image: "/blog/breakfast.jpg",
    date: "Sep 20, 2025",
  },
  {
    id: 2,
    title: "5 Quick Vegan Lunch Recipes",
    excerpt: "Quick and easy vegan lunches that are perfect for work or school.",
    image: "/blog/vegan-lunch.jpg",
    date: "Sep 18, 2025",
  },
  {
    id: 3,
    title: "The Ultimate Dessert Guide",
    excerpt: "Learn how to make amazing desserts that everyone will love.",
    image: "/blog/dessert.jpg",
    date: "Sep 15, 2025",
  },
  {
    id: 4,
    title: "Quick Snacks for Kids",
    excerpt: "Healthy and easy snacks that your kids will love.",
    image: "/blog/snacks.jpg",
    date: "Sep 12, 2025",
  },
  {
    id: 5,
    title: "Easy Dinner Recipes",
    excerpt: "Delicious dinners you can make in under 30 minutes.",
    image: "/blog/dinner.jpg",
    date: "Sep 10, 2025",
  },
  {
    id: 6,
    title: "Gluten-Free Baking Tips",
    excerpt: "Learn how to bake delicious gluten-free treats every time.",
    image: "/blog/gluten-free.jpg",
    date: "Sep 8, 2025",
  },
];

export default function LiveSearchPosts() {
  const [query, setQuery] = useState("");

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Search Recipes</h2>

        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-2xl mx-auto mb-12 border border-gray-300 rounded-full py-3 px-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-400">{post.date}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <p className="text-gray-500 col-span-full mt-4">No results found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
