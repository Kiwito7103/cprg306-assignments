import ItemList from './item-list';
import React from 'react';

function Page() {
  return (
    <main className="max-w-xl mx-auto p-6 bg-black min-h-screen border">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Shopping List</h1>
      <ItemList />
    </main>
  )
}
export default Page;