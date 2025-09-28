// components/Hero.jsx
"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  // Simulate fetching menu items from a shop page
  useEffect(() => {
    const data = [
      { name: "Pizza Margherita", price: "$12", image: "/pizza-margherita.jpg" },
      { name: "Cheeseburger", price: "$10", image: "/Cheeseburger.jpg" },
      { name: "Vegan Salad", price: "$8", image: "/Vegan Salad.jpg" },
      { name: "Spaghetti Bolognese", price: "$11", image: "/spaghetti bolognese.jpg" },
      { name: "Sushi Platter", price: "$15", image: "/Sushi Platter.jpg" },
      { name: "Sushi Platter", price: "$15", image: "/Sushi Platter.jpg" },
    ];
    setMenuItems(data);
  }, []);

  // Live filtered results
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-red-50 py-20 flex flex-col items-center justify-center text-center px-4">
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
        Delicious Food, Delivered to You
      </h1>

      {/* Subheadline */}
      <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl">
        Explore our menu and order your favorite meals with just a few clicks.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-md flex items-center border rounded-lg overflow-hidden shadow-md mb-8">
        <input
          type="text"
          placeholder="Search dishes, meals or drinks..."
          className="flex-1 px-4 py-2 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition"
          onClick={() => {}}
        >
          Search
        </button>
      </div>

      {/* Food Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-left">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <p className="text-gray-500 col-span-full">No results found.</p>
        )}
      </div>
    </section>
  );
}
