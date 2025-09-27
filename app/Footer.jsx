// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaCarAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 text-red-500 text-xl font-bold mb-4">
            <FaCarAlt className="text-2xl" />
            MostaSoft
          </div>
          <p className="text-sm leading-6">
            Your trusted partner for buying and selling cars.  
            Drive your dream car today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/inventory" className="hover:text-red-500 transition">Inventory</Link></li>
            <li><Link href="/financing" className="hover:text-red-500 transition">Financing</Link></li>
            <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ support@autodealer.com</li>
            <li>📍 123 Auto Street, City, USA</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <Link href="#" className="hover:text-red-500"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-red-500"><FaTwitter /></Link>
            <Link href="#" className="hover:text-red-500"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AutoDealer. All rights reserved.
      </div>
    </footer>
  );
}
