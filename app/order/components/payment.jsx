import { useState } from "react";

export default function PaymentOptions() {
  const [method, setMethod] = useState("cash");

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Payment</h2>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={method === "cash"}
            onChange={() => setMethod("cash")}
          />
          <span>Cash on Delivery</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          <span>Credit/Debit Card</span>
        </label>
      </div>
    </div>
  );
}
