"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

// Sample food items
const foods = [
  { name: "Veggie Pizza",  price:"10$", category: "Lunch", cuisine: "Italian", diet: "Vegetarian", slug: "veggie-pizza" },
  { name: "Chicken Burger", price:"10$", category: "Lunch", cuisine: "American", diet: "Non-Veg", slug: "chicken-burger" },
  { name: "Vegan Salad", price:"10$", category: "Dinner", cuisine: "International", diet: "Vegan", slug: "vegan-salad" },
  { name: "Pasta Alfredo",  price:"10$",category: "Dinner", cuisine: "Italian", diet: "Vegetarian", slug: "pasta-alfredo" },
  { name: "Samosa",  price:"10$",category: "Snacks", cuisine: "Indian", diet: "Vegetarian", slug: "samosa" },
  { name: "Spring Rolls", price:"10$", category: "Snacks", cuisine: "Chinese", diet: "Vegan", slug: "spring-rolls" },
];

export default function FoodMenuFilters() {
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const searchParams = useSearchParams(); // ✅ Hook call

  useEffect(() => {
    const productParam = searchParams.get("product"); // ✅ Correct usage
    if (productParam) {
      const product = foods.find((p) => p.slug === productParam);
      if (product) {
        console.log("Selected Product:", product);
        // here you can setCart([{ ...product, quantity: 1 }]) if you have cart state
      }
    }
  }, [searchParams]);

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
              <p className="text-gray-500">
                {food.category} • {food.cuisine} • {food.diet}
              </p>
              <p className="text-lg font-semibold">{food.price}</p>

              {/* Order Now Button → goes to order page with product slug */}
              <Link
                href={`/order?product=${food.slug}`}
                className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Order Now
              </Link>
              
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No foods match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
