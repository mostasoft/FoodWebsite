// components/TagsWithPosts.jsx
"use client";

import React, { useState } from "react";

const posts = [
  { id: 1, title: "10 Healthy Breakfast Ideas", tags: ["Breakfast", "Healthy"] },
  { id: 2, title: "5 Quick Vegan Lunch Recipes", tags: ["Lunch", "Vegan"] },
  { id: 3, title: "The Ultimate Dessert Guide", tags: ["Dessert", "Sweet"] },
  { id: 4, title: "Quick Snacks for Kids", tags: ["Snacks", "Healthy"] },
  { id: 5, title: "Easy Dinner Recipes", tags: ["Dinner", "Quick Meals"] },
];

const tags = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks", "Vegan", "Healthy"];

export default function TagsWithPosts() {
  const [selectedTag, setSelectedTag] = useState("");

  // Filter posts based on selected tag
  const visiblePosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts; // show all by default

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Explore by Tags</h2>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition
                ${selectedTag === tag ? "bg-green-600 text-white" : "bg-green-100 text-green-800 hover:bg-green-200"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">Tags: {post.tags.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
