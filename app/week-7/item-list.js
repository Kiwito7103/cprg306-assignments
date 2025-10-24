"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.js';

function ItemList() {
  const [items] = useState(itemsData);
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
    <div>
      <button
        onClick={() => setSortBy("name")}
        style={{ backgroundColor: sortBy === "name" ? 'purple' : 'gray', color: 'white', marginRight: 8, padding: '8px 16px', borderRadius: 4 }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        style={{ backgroundColor: sortBy === "category" ? 'purple' : 'gray', color: 'white', padding: '8px 16px', borderRadius: 4 }}
      >
        Sort by Category
      </button>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
