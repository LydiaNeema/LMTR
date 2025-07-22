import { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";

 function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  
  const handleSave = (cat) => {
    const method = cat.id ? "PATCH" : "POST";
    const url = cat.id
      ? `http://localhost:3001/categories/${cat.id}`
      : "http://localhost:3001/categories";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cat),
    })
      .then((r) => r.json())
      .then((newCat) => {
        setCategories((prev) =>
          cat.id
            ? prev.map((c) => (c.id === newCat.id ? newCat : c))
            : [...prev, newCat]
        );
        setSelected(null);
      });
  };


  const handleDelete = (id) => {
    fetch(`http://localhost:3001/categories/${id}`,
         { method: "DELETE" })
      .then(() =>
        setCategories((prev) => prev.filter((c) => c.id !== id))
      );
  };

  return (
    <div>
      <h2>Manage Categories</h2>

    
      <CategoryForm
        selected={selected}
        onSave={handleSave}
        onCancel={() => setSelected(null)}
      />

      <ul>
        {categories.map((cat) => (
          <li key={cat.id} style={{ marginBottom: '0.5rem' }}>
            <span>{cat.name}</span>
            <button
              onClick={() => setSelected(cat)}
              style={{ marginLeft: '1rem' }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(cat.id)}
              style={{ marginLeft: '0.5rem' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  CategoryList