import React, { useState } from "react";

const API_URL = "http://localhost:3000/products";

function EditForm({ product, setProducts }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    image: product.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updated) => {
        setProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
        setShowForm(false);
      })
      .catch((err) => console.error("Update failed:", err));
  };
  
  return (
    <>
      <button
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Edit"}
      </button>
      {showForm && (
        <form onSubmit={handleUpdate} >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"

          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <button type="submit" >
            Save
          </button>
        </form>
      )}
    </>
  );
}

export default EditForm;
