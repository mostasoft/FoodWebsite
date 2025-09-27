// components/LatestPosts.jsx
"use client";

import React, { useState } from "react";

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

export default function LatestPosts() {
  const [visiblePosts, setVisiblePosts] = useState(3); // initially show 3 posts

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  return (
    <section id="latest-posts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {allPosts.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-400">{post.date}</div>
              </div>
            </div>
          ))}
        </div>

        {visiblePosts < allPosts.length && (
          <button
            onClick={loadMore}
            className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
