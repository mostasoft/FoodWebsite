"use client";

import React from "react";
import Link from "next/link";

const foods = [
  {
    id: 1,
    name: "Veggie Pizza",
    price: "$12.99",
    cuisine: "Italian",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1603070027064-3f5f5643a8b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sushi Platter",
    price: "$18.50",
    cuisine: "Japanese",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb61?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Vegan Salad Bowl",
    price: "$10.00",
    cuisine: "International",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1617196030200-2d64e3d3911f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chocolate Muffin",
    price: "$4.50",
    cuisine: "Bakery",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1617196030411-35d9c8b9e372?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    price: "$14.25",
    cuisine: "Italian",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1605478420531-6342c8b40e7c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FoodMenuList() {
  return (
    <section id="food-menu-list" className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{food.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{food.price}</p>
                <div className="text-gray-600 text-sm mb-4">
                  <p>Category: {food.category}</p>
                  <p>Cuisine: {food.cuisine}</p>
                </div>
                <Link
                  href={`/menu/${food.id}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
