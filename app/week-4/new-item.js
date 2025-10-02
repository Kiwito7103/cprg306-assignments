"use client";
import { useState } from "react";
const { quantity, setQuantity } = useState(1);

function increment() {
  setQuantity(prev => (prev < 20 ? prev + 1 : prev));
}

function decrement() {
  setQuantity(prev => (prev > 1 ? prev - 1 : prev));
}


return (
  <div>
    <button onClick={decrement} disabled={quantity === 1}>-</button>
    <span>{quantity}</span>
    <button onClick={increment} disabled={quantity === 20}>+</button>
  </div>
);

export default NewItem;