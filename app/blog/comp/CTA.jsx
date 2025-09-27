// components/CallToAction.jsx
"use client";

import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Love our recipes?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Check out our food shop, download our free recipe ebook, or follow us on social media!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/shop"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-green-50 transition"
          >
            Visit Food Shop
          </a>
          <a
            href="/ebook.pdf"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-green-50 transition"
          >
            Download Recipe Ebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-green-50 transition"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
