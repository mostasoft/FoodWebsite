// components/ContactInfoFood.tsx
"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React from "react";

const info = [
  { icon: <MapPin className="w-6 h-6 text-green-500" />, title: "Address", text: "456 Food Street, Dhaka, Bangladesh" },
  { icon: <Phone className="w-6 h-6 text-green-500" />, title: "Phone", text: "+880 9876 543 210" },
  { icon: <Mail className="w-6 h-6 text-green-500" />, title: "Email", text: "hello@deliciousbites.com" },
  { icon: <Clock className="w-6 h-6 text-green-500" />, title: "Working Hours", text: "Mon - Sun: 10:00 AM - 9:00 PM" },
];

export default function ContactInfoFood() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {info.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
