// components/FoodMenu.jsx
"use client";

import React from "react";

export default function FoodMenu() {
  const menuItems = [
    { name: "Chicken", price: "$20.99", image: "/images/chicken.jpg" },
    { name: "Biryani", price: "From $8", image: "/images/biryani.jpg" },
    { name: "Masala Dosa", price: "From $5", image: "/images/masala-dosa.jpg" },
    { name: "Paneer Tikka", price: "From $15", image: "/images/paneer-tikka.jpg" },
    { name: "Rogan Josh", price: "$12.49/kg", image: "/images/rogan-josh.jpg" },
    { name: "Butter Chicken", price: "$24.99/kg", image: "/images/butter-chicken.jpg" },
    { name: "Butter Chicken", price: "$24.99/kg", image: "/images/butter-chicken.jpg" },
  ];

  return (
    <section className="w-full py-10 px-4 bg-red-50">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Our Menu
      </h2>

      <div className="flex overflow-x-auto gap-6 pb-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[150px] bg-white rounded-lg shadow-md flex-shrink-0 hover:scale-105 transform transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-2 text-center">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-red-600 font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
