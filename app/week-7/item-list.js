"use client";
import React, { useState } from "react";
import Item from "./item";

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="px-4 md:px-12 ">
      <h2>Items</h2>
      <label>
        Sort by:{" "}
        <select className="bg-black text-white" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </label>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default ItemList;
