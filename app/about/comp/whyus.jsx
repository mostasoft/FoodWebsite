// components/WhyChooseUsFood.tsx
"use client";

import React from "react";

const features = [
  { title: "Fresh Ingredients", desc: "We use only the freshest, locally-sourced ingredients for every recipe." },
  { title: "Easy Recipes", desc: "Step-by-step guides make cooking simple and enjoyable for everyone." },
  { title: "Healthy Options", desc: "Balanced and nutritious meals that taste amazing." },
  { title: "Community & Support", desc: "Join our food-loving community and get tips, inspiration, and help." },
];

export default function WhyChooseUsFood() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-green-500 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
