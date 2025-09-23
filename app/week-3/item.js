
function Item({ name, quantity, category }) {
  return (
    <li className="bg-gradient-to-r from-purple-500 to-violet-500 rounded shadow p-4 mb-2 flex flex-col border">
      <span className="font-bold text-lg text-white">{name}</span>
      <span className="text-white-600">Quantity: {quantity}</span>
      <span className="text-white-500">Category: {category}</span>
    </li>
  );
}


export default Item;