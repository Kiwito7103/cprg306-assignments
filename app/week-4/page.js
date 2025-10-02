import NewItem from './new-item';

export default function Page() {
  return <NewItem />;
}



return (
  <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded">
    <button
      onClick={decrement}
      disabled={quantity === 1}
      className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
    >-</button>
    <span className="text-xl">{quantity}</span>
    <button
      onClick={increment}
      disabled={quantity === 20}
      className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
    >+</button>
  </div>
);

