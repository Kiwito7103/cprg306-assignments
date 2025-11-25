"use client";

import React, { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";



function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");


  function cleanItemName(itemName) {
    itemName = itemName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF])+/g,
      ""
    );
    itemName = itemName.split(",")[0].trim();
    return itemName;
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  async function loadItems() {
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }


  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);


  async function handleAddItem(newItem) {
    try {
      // Add item to Firestore and get the document ID
      const newItemId = await addItem(user.uid, newItem);

      // Update local state with the new item (including its Firestore ID)
      setItems([...items, { id: newItemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }


  return (
    <main className="page">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
      <div className="flex gap-8 px-4">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

export default Page;
