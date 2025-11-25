"use client";
import { useState } from "react";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen foods",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  function increment() {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-purple-600 rounded-lg shadow-md p-6 mb-8 max-w-lg mx-auto flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-purple-300 mb-2">Add New Item</h2>

      <label className="flex flex-col gap-1 text-zinc-100">
        Name:
        <input
          className="rounded px-3 py-2 text-white border-2"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className="flex flex-col gap-1 text-zinc-100">
        Quantity:
        <div className="flex items-center gap-2">
          <button type="button" className="bg-purple-400 px-2 py-1 rounded text-white" onClick={decrement}>-</button>
          <span className="px-4">{quantity}</span>
          <button type="button" className="bg-purple-400 px-2 py-1 rounded text-white" onClick={increment}>+</button>
        </div>
      </label>

      <label className="flex flex-col gap-1 text-zinc-100">
        Category:
        <select
          className="rounded px-3 py-2 text-black border-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <button type="submit" className="bg-gradient-to-r from-purple-500 to-violet-500 text-white border-2 border-black px-4 py-2 rounded shadow hover:from-purple-600 hover:to-violet-600 transition">
        Add Item
      </button>
    </form>

  );
}

export default NewItem;
