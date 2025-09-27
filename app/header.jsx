// components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggler = () => setIsMobileOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-red-600 text-xl font-bold">
          <FaUtensils className="text-2xl" />
          MostaTaste
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/menu" className="hover:text-red-600 transition">Menu</Link>
          <Link href="/shop" className="hover:text-red-600 transition">Shop</Link>
          <Link href="/blog" className="hover:text-red-600 transition">Blog</Link>
          <Link href="/about" className="hover:text-red-600 transition">About Us</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/shop"
          className="hidden md:inline-block ml-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Order Now
        </Link>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700 text-2xl" onClick={toggler}>
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu & Overlay */}
      {isMobileOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={toggler}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          ></div>

          {/* Sliding Menu */}
          <div
            className={`
              fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg z-50
              transform transition-transform duration-500 ease-in-out
              ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Close Icon */}
            <button
              onClick={toggler}
              className="p-4 text-gray-700 text-2xl flex justify-end w-full"
            >
              <FaTimes />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 p-6 text-gray-700 font-medium">
              <Link href="/" onClick={toggler} className="hover:text-red-600 transition">Home</Link>
              <Link href="/menu" onClick={toggler} className="hover:text-red-600 transition">Menu</Link>
              <Link href="/about" onClick={toggler} className="hover:text-red-600 transition">About Us</Link>
              <Link href="/contact" onClick={toggler} className="hover:text-red-600 transition">Contact</Link>
              <Link
                href="/order-now"
                onClick={toggler}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition text-center"
              >
                Order Now
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
