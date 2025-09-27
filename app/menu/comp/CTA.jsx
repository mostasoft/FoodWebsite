"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function FoodCTAAdvanced() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/food-hero.jpg" // replace with your high-quality food image
        alt="Delicious Meals"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

      {/* Particles */}
      <Particles
        id="cta-particles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            color: { value: "#FFD700" }, // golden color for food vibe
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1.2, outModes: { default: "out" } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
          Order Your Delicious Meals Today!
        </h2>
        <p className="text-lg md:text-xl mb-8 animate-fadeInUp delay-200">
          Fresh, tasty, and delivered straight to your door. Start your meal plan now.
        </p>
        <a
          href="#order"
          className="inline-block bg-yellow-500 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-bounce"
        >
          Place Order
        </a>

        {/* Optional stats cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 w-full max-w-2xl animate-fadeInUp delay-400">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-left">
            <h4 className="text-lg font-semibold mb-2">Fresh Ingredients</h4>
            <p className="text-white text-lg">Every meal made from high-quality, fresh ingredients.</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-left">
            <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
            <p className="text-white text-lg">Hot and ready meals delivered right to your doorstep.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
