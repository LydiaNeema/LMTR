import React from 'react';

 function CategoryFilter({ options, onSelect }) {
  return (
    <select
      onChange={e => onSelect(e.target.value)}
      className="border px-2 py-1 rounded"
      defaultValue="All"
    >
      {options.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

export default CategoryFilter