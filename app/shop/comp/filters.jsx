"use client";

import React, { useState, useEffect } from "react";

// Sample food items
const foods = [
  { name: "Veggie Pizza", category: "Lunch", cuisine: "Italian", diet: "Vegetarian" },
  { name: "Chicken Burger", category: "Lunch", cuisine: "American", diet: "Non-Veg" },
  { name: "Vegan Salad", category: "Dinner", cuisine: "International", diet: "Vegan" },
  { name: "Pasta Alfredo", category: "Dinner", cuisine: "Italian", diet: "Vegetarian" },
  { name: "Samosa", category: "Snacks", cuisine: "Indian", diet: "Vegetarian" },
  { name: "Spring Rolls", category: "Snacks", cuisine: "Chinese", diet: "Vegan" },
];

export default function FoodMenuFilters() {
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foods);

  // Real-time filtering
  useEffect(() => {
    setFilteredFoods(
      foods.filter(
        (f) =>
          (category === "" || f.category === category) &&
          (cuisine === "" || f.cuisine === cuisine) &&
          (diet === "" || f.diet === diet)
      )
    );
  }, [category, cuisine, diet]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filters */}
      <aside className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/4">
        <h2 className="text-xl font-bold mb-4">Filter Foods</h2>

        {/* Category */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-2"
          >
            <option value="">All Categories</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>

        {/* Cuisine */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Cuisine</label>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-2"
          >
            <option value="">All Cuisines</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
            <option value="International">International</option>
          </select>
        </div>

        {/* Dietary Preference */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Dietary Preference</label>
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-2"
          >
            <option value="">All</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
      </aside>

      {/* Food Menu */}
      <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
              <p className="text-gray-500">{food.category} • {food.cuisine} • {food.diet}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No foods match your filters.</p>
        )}
      </div>
    </div>
  );
}
