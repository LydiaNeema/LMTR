import { useState } from "react";

const API_URL = "https://shop-stack.onrender.com/products";  //API_URL
 // This state manages the input values from the form
function AddProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });
 // This controls whether the modal is open or not
  const [showModal, setShowModal] = useState(false);
  // Keeps form inputs in sync with state
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
 // Handles the actual submission of the new product
  function handleSubmit(e) {
    e.preventDefault();
     // Simple check to avoid invalid pricing
    if (formData.price < 0) {
      alert("Price cannot be negative.");
      return;
    }
// Format the product properly before sending
const newProduct = {
  ...formData,
  price: parseFloat(formData.price),
};
 // POST the new product to the API
fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newProduct),
})
  .then((res) => {
    if (!res.ok) throw new Error("Failed to add product");
    return res.json();
  })
  .then((data) => {
    onAdd(data);  // Notify parent component with the new product
    setFormData({ name: "", price: "", image: "", category: "" });  // Reset form
    setShowModal(false);  //Close the modal
  })
  .catch((err) => console.error("Error adding product:", err));
  }
// Resets and closes the form if user cancels
  function handleCancel() {
    setShowModal(false);
    setFormData({ name: "", price: "", image: "", category: "" }); // optional reset
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 text-white px-6 py-3 rounded-xl relative font-semibold flex items-center gap-2 shadow-md hover:bg-red-600 transition"
      >
        <span className="text-xl">+</span> New Product
        <span className="absolute top-0 right-0 w-5 h-5 bg-white rounded-bl-[8px]"></span>
        <span className="absolute bottom-0 left-0 w-5 h-5 bg-white rounded-tr-[8px]"></span>
      </button>

  {showModal && (
    <>
      <div
        className="fixed inset-0  bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300" style={{ background: 'linear-gradient(110deg, #566160 70%, #dde6f6 100%)' }}
        onClick={handleCancel}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative animate-fadeIn">
          <button
            onClick={handleCancel}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="number"
              name="price"
              min="0"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )}
</>
  );
}

export default AddProductForm;