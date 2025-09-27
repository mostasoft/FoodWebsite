"use client";

import { useState } from "react";

const faqs = [
  { q: "Can I customize my meal plan?", a: "Yes! You can choose meal types, add-ons, and delivery frequency." },
  { q: "How often do you deliver?", a: "We deliver daily or weekly based on your preference." },
  { q: "Do you offer vegetarian or vegan options?", a: "Absolutely! All meal plans can be customized to your dietary needs." },
  { q: "What if I need to skip a week?", a: "You can pause or skip any week from your subscription easily." },
  { q: "How do I cancel my plan?", a: "You can cancel anytime by contacting our support team." },
];

export default function MealFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-800">Meal Plan FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-yellow-300 hover:border-orange-500 transition-all"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{f.q}</h3>
                <span
                  className={`transform transition-transform text-orange-500 ${
                    active === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-600 transition-all duration-300 ${
                  active === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
