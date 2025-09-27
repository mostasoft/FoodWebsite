export default function OrderActions({ product }) {
  const handleOrder = () => {
    alert(`✅ Order placed for: ${product}`);
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleOrder}
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Confirm Order
      </button>
    </div>
  );
}
