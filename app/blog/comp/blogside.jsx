// components/ExploreSidebarSection.jsx
"use client";

import React, { useState } from "react";

const popularPosts = [
  {
    title: "10 Healthy Breakfast Ideas",
    image: "/blog/breakfast.jpg",
  },
  {
    title: "The Ultimate Dessert Guide",
    image: "/blog/dessert.jpg",
  },
  {
    title: "Quick Snacks for Kids",
    image: "/blog/snacks.jpg",
  },
];

const recentPosts = [
  {
    title: "Easy Dinner Recipes",
    image: "/blog/dinner.jpg",
  },
  {
    title: "Gluten-Free Baking Tips",
    image: "/blog/gluten-free.jpg",
  },
  {
    title: "5 Quick Vegan Lunch Recipes",
    image: "/blog/vegan-lunch.jpg",
  },
];

const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks", "Vegan"];

export default function ExploreSidebarSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}!`);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* Popular Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Popular Posts</h3>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div
                key={index}
                className="flex items-center gap-3 cursor-pointer hover:bg-green-50 rounded-lg p-2 transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span className="text-gray-800 font-medium">{post.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="flex items-center gap-3 cursor-pointer hover:bg-green-50 rounded-lg p-2 transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span className="text-gray-800 font-medium">{post.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories + Newsletter */}
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-200 transition"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-green-50 p-6 rounded-lg text-center shadow">
            <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Get the latest recipes and food inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                onClick={handleSubscribe}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
