export default function CustomerForm() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Your Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border px-4 py-2 rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border px-4 py-2 rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border px-4 py-2 rounded-lg md:col-span-2"
          required
        />
        <textarea
          placeholder="Delivery Address"
          rows={3}
          className="border px-4 py-2 rounded-lg md:col-span-2"
          required
        ></textarea>
      </form>
    </div>
  );
}
