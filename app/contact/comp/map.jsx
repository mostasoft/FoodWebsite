// components/ContactMapFood.jsx
import React from "react";

export default function ContactMapFood() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Optional overlay text */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-green-500/80 text-white px-4 py-2 rounded-lg text-center font-semibold">
        Find us at the heart of Dhaka’s food scene!
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024007994606!2d90.39945231498107!3d23.75088559461168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8941a3f7d4b%3A0x8e0c95a24aaba7ed!2sDhaka!5e0!3m2!1sen!2sbd!4v1690000000000!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}
