import React, { useState } from "react";

const API_URL = "https://shop-stack.onrender.com/products";  //API_URL

function EditForm({ product, setProducts }) {
    // Controls whether the edit form/modal is visible
  const [showForm, setShowForm] = useState(false);
   // Holds editable product values pre-filled from the original produ
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    image: product.image,
  });
//Updates form values in real-time as the user types

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Update the products list in parent component
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updated) => {
          // Update the products list in parent component
        setProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
        setShowForm(false);   // Close the modal after saving
      })
      .catch((err) => console.error("Update failed:", err));
  };

  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => setShowForm(true)}
      >
        Edit
      </button>

      {showForm && (
        <>
          <div
            className="fixed inset-0  bg-opacity-50 z-40" style={{ background: 'linear-gradient(110deg, #566160 70%, #dde6f6 100%)' }}
            onClick={() => setShowForm(false)}
          />

          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border p-2 rounded"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default EditForm;
