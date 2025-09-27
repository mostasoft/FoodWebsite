"use client";

import { useState } from "react";

export default function MealOrderFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    mealPlan: "",
    addons: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", address: "", mealPlan: "", addons: "" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-800">
          Place Your Order 🍽️
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-10 md:p-12 space-y-6 relative"
        >
          {/* Success Message */}
          {submitted && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-10">
              Order Submitted Successfully!
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "address", label: "Delivery Address", type: "text" },
              { name: "mealPlan", label: "Meal Plan (e.g., 3 Meals/Week)", type: "text" },
              { name: "addons", label: "Add-ons (Drinks, Dessert…)", type: "text" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                  peer-focus:-top-2 peer-focus:text-yellow-600 peer-focus:text-sm transition-all">
                  {field.label}
                </label>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg"
          >
            Submit Order
          </button>
        </form>
      </div>
    </section>
  );
}
