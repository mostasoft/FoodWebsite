"use client";

import React, { useState } from "react";
import Link from "next/link";

// Sample dish data
const dishes = [
  { id: 1, name: "Margherita Pizza", cuisine: "Italian", category: "Pizza", price: 12.99, available: 2025, image: "/food/pizza.jpg", featured: true },
  { id: 2, name: "Spicy Ramen", cuisine: "Japanese", category: "Noodles", price: 14.5, available: 2025, image: "/food/ramen.jpg", featured: false },
  { id: 3, name: "Butter Chicken", cuisine: "Indian", category: "Curry", price: 13.75, available: 2024, image: "/food/butter-chicken.jpg", featured: true },
  { id: 4, name: "Vegan Bowl", cuisine: "Fusion", category: "Vegan", price: 11.0, available: 2025, image: "/food/buddha-bowl.jpg", featured: false },
  { id: 5, name: "Cheeseburger", cuisine: "American", category: "Burger", price: 10.99, available: 2023, image: "/food/burger.jpg", featured: false },
];

const cuisines = ["All", "Italian", "Japanese", "Indian", "Fusion", "American"];
const categories = ["All", "Pizza", "Noodles", "Curry", "Vegan", "Burger"];
const availabilityYears = ["All", 2025, 2024, 2023];

export default function AdvancedMenu() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50);

  const filteredDishes = dishes.filter((dish) =>
    (selectedCuisine === "All" || dish.cuisine === selectedCuisine) &&
    (selectedCategory === "All" || dish.category === selectedCategory) &&
    (selectedYear === "All" || dish.available === selectedYear) &&
    dish.price <= maxPrice
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">Explore Our Menu</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select className="p-3 rounded-lg border border-red-400 text-red-700" value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
            {cuisines.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select className="p-3 rounded-lg border border-red-400 text-red-700" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select className="p-3 rounded-lg border border-red-400 text-red-700" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {availabilityYears.map((y) => <option key={y}>{y}</option>)}
          </select>
          <div className="flex items-center gap-2">
            <label className="text-red-700 font-semibold">Max Price: ${maxPrice.toFixed(2)}</label>
            <input
              type="range"
              min={5}
              max={50}
              step={1}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
              className="w-48"
            />
          </div>
        </div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="relative group rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
              <img src={dish.image} alt={dish.name} className="w-full h-64 object-cover group-hover:brightness-75 transition" />
              {dish.featured && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Featured
                </span>
              )}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl">
                <h3 className="text-white text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-red-400 font-semibold text-lg mb-2">${dish.price.toFixed(2)}</p>
                <p className="text-gray-200 mb-4">Cuisine: {dish.cuisine} | Category: {dish.category} | Year: {dish.available}</p>
                <Link href={`/menu/${dish.id}`} className="text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
                  View Details
                </Link>
              </div>
            </div>
          ))}
          {filteredDishes.length === 0 && (
            <p className="text-center col-span-full text-gray-500 text-lg">No dishes found for selected filters.</p>
          )}
        </div>
      </div>
    </section>
  );
}
