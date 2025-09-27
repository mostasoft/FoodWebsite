"use client";

import { useState } from "react";

export default function MealPlanCalculator() {
  const [price, setPrice] = useState(15); // base price per meal
  const [meals, setMeals] = useState(7); // meals per week
  const [weeks, setWeeks] = useState(4); // subscription length
  const [mealType, setMealType] = useState("Lunch");
  const [drink, setDrink] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [delivery, setDelivery] = useState("Weekly");

  // Add-ons
  const drinkCost = drink ? 2 : 0;
  const dessertCost = dessert ? 3 : 0;
  const addOns = drinkCost + dessertCost;

  // Pricing calculations
  const perMeal = price + addOns;
  const weekly = perMeal * meals;
  const total = weekly * weeks;

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">
          Meal Plan Calculator 🍽️
        </h2>

        <div className="bg-white p-10 rounded-3xl shadow-2xl space-y-10">
          {/* Inputs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {/* Meal Price */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <label className="block mb-2 font-semibold text-gray-700">Meal Price ($)</label>
              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <div className="mt-1 text-green-700 font-bold">${price}</div>
            </div>

            {/* Meals Per Week */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <label className="block mb-2 font-semibold text-gray-700">Meals Per Week</label>
              <input
                type="range"
                min={1}
                max={21}
                step={1}
                value={meals}
                onChange={(e) => setMeals(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <div className="mt-1 text-green-700 font-bold">{meals} meals</div>
            </div>

            {/* Subscription Weeks */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <label className="block mb-2 font-semibold text-gray-700">Subscription Length (Weeks)</label>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <div className="mt-1 text-green-700 font-bold">{weeks} weeks</div>
            </div>

            {/* Meal Type */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <label className="block mb-2 font-semibold text-gray-700">Meal Type</label>
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>

            {/* Add-ons */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition space-y-2">
              <label className="block mb-2 font-semibold text-gray-700">Add-ons</label>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={drink}
                  onChange={(e) => setDrink(e.target.checked)}
                />
                <span>Drink (+$2)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={dessert}
                  onChange={(e) => setDessert(e.target.checked)}
                />
                <span>Dessert (+$3)</span>
              </div>
            </div>

            {/* Delivery Frequency */}
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <label className="block mb-2 font-semibold text-gray-700">Delivery Frequency</label>
              <select
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Daily</option>
                <option>Weekly</option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold text-gray-800">Your Plan Summary</h3>
            <p className="mt-3 text-lg text-gray-600">
              Meal Type: <span className="font-bold text-green-700">{mealType}</span>
            </p>
            <p className="text-lg text-gray-600">
              Delivery: <span className="font-bold text-green-700">{delivery}</span>
            </p>
            <p className="text-lg text-gray-600">
              Price per Meal: <span className="font-bold text-green-700">${perMeal.toFixed(2)}</span>
            </p>
            <p className="text-lg text-gray-600">
              Weekly Cost: <span className="font-bold text-green-700">${weekly.toFixed(2)}</span>
            </p>
            <p className="text-xl md:text-2xl font-extrabold text-green-800 mt-4 animate-pulse">
              Total Subscription: ${total.toFixed(2)}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition text-lg font-semibold">
              Order Now 🍴
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
