// components/FoodNewsTips.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "5 Healthy Smoothie Recipes for Busy Mornings",
    date: "Sep 15, 2025",
    image: "/food/1.jpg",
    link: "/blog/healthy-smoothies",
  },
  {
    id: 2,
    title: "Top 10 Street Foods You Must Try in 2025",
    date: "Aug 30, 2025",
    image: "/food/2.jpg",
    link: "/blog/top-street-foods",
  },
  {
    id: 3,
    title: "How to Make Perfect Homemade Pizza",
    date: "Jul 22, 2025",
    image: "/food/3.jpg",
    link: "/blog/homemade-pizza",
  },
  {
    id: 4,
    title: "Secrets to Delicious Vegan Desserts",
    date: "Sep 5, 2025",
    image: "/food/4.jpg",
    link: "/blog/vegan-desserts",
  },
];

export default function FoodNewsTips() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const intervalTime = 6000;

  useEffect(() => {
    const startProgress = () => {
      setProgress(0);
      let start = 0;
      if (progressRef.current) clearInterval(progressRef.current);
      progressRef.current = window.setInterval(() => {
        start += 100 / (intervalTime / 100);
        if (start >= 100) {
          start = 100;
          if (progressRef.current) clearInterval(progressRef.current);
        }
        setProgress(start);
      }, 100);
    };

    startProgress();

    const autoPlay = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
      startProgress();
    }, intervalTime);

    return () => {
      clearInterval(autoPlay);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [index]);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-700">
          Food Tips & Recipes
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Featured post */}
          <div className="md:w-2/3 relative overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={posts[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="relative w-full h-96 md:h-[500px]"
              >
                <img
                  src={posts[index].image}
                  alt={posts[index].title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/30 rounded-xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-gray-200 mb-1">{posts[index].date}</p>
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">{posts[index].title}</h3>
                  <Link
                    href={posts[index].link}
                    className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 rounded-b-xl overflow-hidden">
              <motion.div
                className="h-2 bg-amber-600"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Right: Other posts */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="flex gap-4 p-4 rounded-xl shadow-lg cursor-pointer hover:bg-amber-50 transition"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <h4 className="text-md font-semibold">{post.title}</h4>
                  <Link
                    href={post.link}
                    className="text-amber-700 font-medium hover:underline"
                  >
                    Read
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
