// components/AchievementsFood.tsx
"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 1500, label: "Recipes Shared" },
  { value: 50000, label: "Meals Served" },
  { value: 4.9, label: "Customer Rating" },
  { value: 15, label: "Awards & Recognitions" },
];

export default function AchievementsFood() {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp
                start={0}
                end={s.value}
                duration={2.5}
                separator=","
                decimals={s.value % 1 !== 0 ? 1 : 0}
              />
              {s.label === "Customer Rating" ? "/5" : s.label === "Awards & Recognitions" ? "+" : ""}
            </h3>
            <p className="text-green-100">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
