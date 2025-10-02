"use client";
import { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(prev => (prev < 20 ? prev + 1 : prev));
  }

  function decrement() {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <div className="relative h-screen w-screen bg-gradient-to-r from-orange-400 to-pink-500 brightness-45 flex items-center justify-center">
      <div className="w-16 p-4 bg-white rounded shadow flex items-center space-x-4 ">

        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >-</button>
        <span className="text-black text-2xl flex items-center relative">
          {quantity === 1 && (
            <span className="absolute left-[-3rem]">👎</span>
          )}
          {quantity === 10 && (
            <span className="absolute left-[-3rem]">👎</span>
          )}
          {quantity}
          {quantity === 10 && <span className="ml-5">👍</span>}

          {quantity === 20 && <span className="ml-5">👍</span>}
        </span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="absolute bottom-4 right-4 px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >+</button>
      </div>
    </div>
  );

}

export default NewItem;


// return (
//   <div className="flex items-center justify-center h-screen">
//     <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded">
//       <button
//         onClick={decrement}
//         disabled={quantity === 1}
//         className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
//       >-</button>
//       <span className="text-black">{quantity}</span>
//       <button
//         onClick={increment}
//         disabled={quantity === 20}
//         className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
//       >+</button>
//     </div>
//   </div>
// );