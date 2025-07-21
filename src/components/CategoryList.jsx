import React from 'react';

 function CategoryList({ items }) {
  // Early exit: if items array is empty or undefined, render nothing
  if (!items.length) return null;
  return (
     // Container with horizontal scrolling for product cards
    <div className="flex space-x-4 overflow-x-auto">
      {items.map(item => (
        <div key={item.id} className="min-w-[200px] p-4 bg-gray-100 rounded flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded" />
          <h2 className="mt-2 font-semibold">{item.name}</h2>
         {/*
            Product price:
            - Formatted using Intl.NumberFormat for 'en-KE' locale
            - Prefixed with 'Ksh' for Kenyan Shilling
        */}

      <p className="text-gray-700">
          {`ksh ${new Intl.NumberFormat('en-KE').format(item.price)}`}
     </p>
        </div>
      ))}
    </div>
  );
}
export default CategoryList