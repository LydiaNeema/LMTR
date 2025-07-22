import { useEffect, useState } from "react";

 function CategoryFilter({ onFilterChange }) {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const change = (val) => {
    setSearchValue(val);
    onFilterChange(val);
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="cat-filter">Filter by category:&nbsp;</label>
      <input
        id="cat-filter"
        type="text"
        value={searchValue}
        placeholder="Type or select..."
        onChange={(e) => change(e.target.value)}
      />

      <select
        value={searchValue}
        onChange={(e) => change(e.target.value)}
        style={{ marginLeft: '0.75rem' }}
      >
        <option value=""> All </option>
        {categories.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default CategoryFilter