"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";// adjust the path
import products from './../../../lib/product';

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-700">
          Special Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.desc}</p>

                <Link
                  href={`/order?product=${product.slug}`}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Order Now
                </Link>
              </div>
              <div className="absolute top-0 left-0 bg-yellow-600 text-white px-3 py-1 rounded-br-lg font-bold">
                Hot
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
