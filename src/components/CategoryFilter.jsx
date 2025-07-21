import React from 'react';

 function CategoryFilter({ options, onSelect }) {
  return (
    // Dropdown to select a category from provided options
    <select
      onChange={e => onSelect(e.target.value)}
      className="border px-2 py-1 rounded"
      defaultValue="All"
    >
       {/* Map over options to create <option> elements */}
      {options.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

export default CategoryFilter