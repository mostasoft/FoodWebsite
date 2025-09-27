// components/MenuHero.tsx
"use client";

import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/menu-hero.jpg')" }} // Change to food hero image
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-red-600 blur-3xl opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-yellow-600 blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Our <span className="text-red-500">Delicious</span> Menu,  
            Crafted with <span className="text-yellow-400">Love</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Explore a wide variety of freshly prepared meals and drinks.
            From sizzling starters to mouthwatering desserts, we’ve got
            something for everyone.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/shop"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
            >
              Order Now
            </a>
            <a
              href="#categories"
              className="px-6 py-3 border border-gray-300 text-white hover:bg-white/10 font-semibold rounded-lg transition"
            >
              View Categories
            </a>
          </div>
        </motion.div>

        {/* Showcase Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src="/menu-showcase.jpg" // Replace with food platter image
              alt="Food Showcase"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-6 -right-6 bg-black/70 text-white px-6 py-4 rounded-xl shadow-lg border border-gray-700"
          >
            <p className="text-2xl font-bold">50+ Dishes</p>
            <p className="text-sm text-gray-300">Fresh & Tasty Everyday</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
