"use client";
import { useState } from "react";

function NewItem() {

  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("produce");

  function increment() {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  }


  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleSubmit(e) {
    e.preventDefault(); // 

    const item = { name, quantity, category };

    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);


    setName("");
    setQuantity(1);
    setCategory("produce");

  }
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

  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-700 rounded space-y-4 w-80"
      >

        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-white p-2 rounded text-black"
            placeholder="Item name (e.g., Milk, Bread, Eggs)"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >-</button>
          <span className="text-black text-2xl flex items-center relative">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >+</button>
        </div>

        <div>
          <label htmlFor="category" className="block font-medium mb-1">
            Category
          </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-white rounded p-2 bg-grey-700 text-black"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>


        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewItem;
