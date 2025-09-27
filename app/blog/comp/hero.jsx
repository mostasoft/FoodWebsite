// components/BlogHero.jsx
"use client";

import React from "react";

export default function BlogHero() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/hero-food.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* overlay */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Delicious Recipes & Food Inspiration
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Discover mouth-watering recipes, cooking tips, and healthy meals for every occasion.
        </p>
        <a
          href="#latest-posts"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Explore Recipes
        </a>
      </div>
    </section>
  );
}
