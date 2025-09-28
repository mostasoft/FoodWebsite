// components/FoodSpecialOffers.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "Margherita Pizza - 20% Off",
    desc: "Classic Italian pizza with fresh ingredients, limited time offer!",
    image: "/pizza-margherita.jpg",
    tag: "Hot",
    link: "/menu/margherita-pizza",
  },
  {
    id: 2,
    title: "Chocolate Lava Cake - Sweet Deal",
    desc: "Indulge in our rich and gooey chocolate lava cake.",
    image: "/Chocolate Lava Cake - Sweet Deal.jpg",
    tag: "New",
    link: "/menu/chocolate-lava-cake",
  },
  {
    id: 3,
    title: "Vegan Burger Combo",
    desc: "Delicious plant-based burger with fries and drink included.",
    image: "/Vegan Burger Combo.jpg",
    tag: "Hot",
    link: "/menu/vegan-burger-combo",
  },
  {
    id: 4,
    title: "Sushi Platter - Exclusive Offer",
    desc: "Fresh sushi platter perfect for sharing with friends.",
    image: "/Sushi Platter.jpg",
    tag: "New",
    link: "/menu/sushi-platter",
  },
  {
    id: 5,
    title: "Italian Pasta Feast",
    desc: "Enjoy our chef’s special pasta dishes at a discounted price.",
    image: "/Paneer Tikka.jpg",
    tag: "Hot",
    link: "/menu/italian-pasta-feast",
  },
  {
    id: 6,
    title: "Refreshing Smoothie Pack",
    desc: "Boost your day with our healthy smoothie pack.",
    image: "/Healthy Smoothie Recipes for Busy Mornings.jpg",
    tag: "New",
    link: "/menu/smoothie-pack",
  },
  {
    id: 7,
    title: "Family Meal Deal",
    desc: "Special combo for the whole family, including appetizers and desserts.",
    image: "/Top 10 Street Foods You Must Try in 2025.jpg",
    tag: "Hot",
    link: "/menu/family-meal-deal",
  },
  {
    id: 8,
    title: "Gourmet Coffee - Limited Time",
    desc: "Try our special gourmet coffee with a 15% discount.",
    image: "/Gourmet Coffee.jpg",
    tag: "New",
    link: "/menu/gourmet-coffee",
  },
];

export default function FoodSpecialOffers() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-700">
          Special Food Offers
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="relative w-full break-inside-avoid rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.desc}</p>
                <Link
                  href={offer.link}
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition"
                >
                  Explore
                </Link>
              </div>
              {/* Dynamic Tag Ribbon */}
              <div
                className={`absolute top-0 left-0 px-3 py-1 font-bold rounded-br-lg text-white ${
                  offer.tag === "Hot" ? "bg-red-600" : "bg-green-600"
                }`}
                style={{ transform: "rotate(-5deg)" }}
              >
                {offer.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
