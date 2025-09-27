"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import products from './../../lib/product';

export default function OrderPage() {
  const searchParams = useSearchParams();
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);
  const [customer, setCustomer] = useState({ name: "", email: "", address: "" });
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Load product from URL
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      const foundProduct = products.find((p) => p.slug === productParam);
      if (foundProduct) setProduct({ ...foundProduct, quantity: 1 });
    }
  }, [searchParams]);

  const addToCart = () => {
    if (!product) return;
    setCart([{ ...product }]);
  };

  const updateQuantity = (amount) => {
    if (!product) return;
    setProduct((prev) => ({ ...prev, quantity: Math.max(1, prev.quantity + amount) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => setPaymentMethod(e.target.value);

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    alert(
      `Order confirmed for ${customer.name}!\nTotal: $${(cart[0].price * cart[0].quantity).toFixed(
        2
      )}\nPayment Method: ${paymentMethod}`
    );

    setCart([]);
    setProduct(null);
    setCustomer({ name: "", email: "", address: "" });
  };

  const total = product ? product.price * product.quantity : 0;

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-3xl font-bold text-center">Your Order</h1>

      {/* Product Details */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-green-600 font-bold text-xl">${product.price}</p>

          <div className="flex items-center gap-4">
            <button onClick={() => updateQuantity(-1)} className="bg-gray-200 px-3 py-1 rounded">
              -
            </button>
            <span>{product.quantity}</span>
            <button onClick={() => updateQuantity(1)} className="bg-gray-200 px-3 py-1 rounded">
              +
            </button>
          </div>

          <button
            onClick={addToCart}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Cart & Checkout */}
      {cart.length > 0 && (
        <form onSubmit={handleConfirmOrder} className="bg-gray-50 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold">Cart Summary</h2>
          <div className="flex justify-between items-center bg-white p-3 rounded shadow">
            <div>
              <h3 className="font-semibold">{cart[0].name}</h3>
              <p>Qty: {cart[0].quantity}</p>
            </div>
            <p className="font-bold">${total.toFixed(2)}</p>
          </div>

          <h2 className="text-2xl font-bold">Delivery Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={customer.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />

          {/* Payment Options */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={handlePaymentChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Confirm & Pay
          </button>
        </form>
      )}
    </div>
  );
}
