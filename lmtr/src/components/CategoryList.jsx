import React from 'react';

 function CategoryList({ items }) {
  if (!items.length) return null;
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {items.map(item => (
        <div key={item.id} className="min-w-[200px] p-4 bg-gray-100 rounded flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
          <h2 className="mt-2 font-semibold">{item.name}</h2>
      <p className="text-gray-700">
          {`ksh${new Intl.NumberFormat('en-KE').format(item.price)}`}
     </p>
        </div>
      ))}
    </div>
  );
}
export default CategoryList