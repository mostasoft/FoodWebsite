"use client";

import React from "react";
import { FaUtensils, FaTruck, FaConciergeBell, FaCreditCard } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Dine-In Experience",
    desc: "Enjoy a cozy ambiance and delicious meals freshly prepared by our chefs.",
    icon: <FaUtensils className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
  {
    id: 2,
    title: "Fast Delivery",
    desc: "Get your favorite dishes delivered hot and fresh right to your doorstep.",
    icon: <FaTruck className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
  {
    id: 3,
    title: "Catering Services",
    desc: "Perfect for parties, events, or corporate meetings—custom menus available.",
    icon: <FaConciergeBell className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
  {
    id: 4,
    title: "Easy Payments",
    desc: "Multiple payment options including cards, wallets, and cash on delivery.",
    icon: <FaCreditCard className="text-red-600 text-4xl mb-4 mx-auto" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer more than just great food — our services are designed to give you a seamless dining experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
