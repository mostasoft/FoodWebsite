import React, { useState } from "react";

const demoProducts = {
  "Margherita Pizza - 20% Off": {
    image:
      "https://images.unsplash.com/photo-1603070027064-3f5f5643a8b3?auto=format&fit=crop&w=800&q=80",
    price: 10,
  },
  "Sushi Deluxe - Combo Offer": {
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb61?auto=format&fit=crop&w=800&q=80",
    price: 18,
  },
  "Vegan Salad Bowl - Special Price": {
    image:
      "https://images.unsplash.com/photo-1617196030200-2d64e3d3911f?auto=format&fit=crop&w=800&q=80",
    price: 12,
  },
  "Chocolate Muffin - Buy 1 Get 1": {
    image:
      "https://images.unsplash.com/photo-1617196030411-35d9c8b9e372?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
};

export default function OrderSummary({ product }) {
  const [quantity, setQuantity] = useState(1);
  const item = demoProducts[product] || {};

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Order Summary</h2>
      {item.image ? (
        <>
          <img
            src={item.image}
            alt={product}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{product}</h3>
          <p className="text-gray-700 mb-2">${item.price} each</p>

          {/* Quantity selector */}
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-gray-200 rounded-lg"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-200 rounded-lg"
            >
              +
            </button>
          </div>

          <p className="text-lg font-bold">
            Total: ${item.price * quantity}
          </p>
        </>
      ) : (
        <p className="text-gray-500">No product selected.</p>
      )}
    </div>
  );
}
