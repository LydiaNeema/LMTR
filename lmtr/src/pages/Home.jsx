import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddProductForm from "../components/AddProductForm";
import ImageSlider from "../components/ImageSlider";

const API_URL = "https://shop-stack.onrender.com/products"; //API_URL for backend 

function Home() {
  const [products, setProducts] = useState([]);  //State to hold all products
  const [loading, setLoading] = useState(true);   //Loading state while data is being fetched
  const [editingProductId, setEditingProductId] = useState(null);    // Tracks which product is currently being edited (if any)
  const [searchTerm, setSearchTerm] = useState("");  // Search term input by the user

  // Fetch products 
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);  // Store fetched data in state
        setLoading(false);   // Stop loading once data is loaded
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);  // Still stop loading on error
      });
  }, []);
// Adds a new product to the list (used by the form)
  function handleAddProduct(newProduct) {
    setProducts((prev) => [...prev, newProduct]);
  }

 // Deletes a product by ID
  function handleDeleteProduct(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
         // Remove the deleted product from the state
        setProducts((prev) => prev.filter((product) => product.id !== id));
      })
      .catch((err) => console.error("Error deleting product:", err));
  }

 // Updates an existing product's info
  function handleUpdateProduct(updatedProduct) {
    fetch(`${API_URL}/${updatedProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // Replace the old product with the updated one in state
        setProducts((prev) =>
          prev.map((product) => (product.id === data.id ? data : product))
        );
        setEditingProductId(null);
      })
      .catch((err) => console.error("Error updating product:", err));
  }

 // Filter products based on the current search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 // Show loading state while fetching
  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading products...
        </p>
      </div>
    );

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800">
         All Products
      </h1>
       <ImageSlider/>

 
  <div className="flex justify-center gap-6">
    <input
      type="text"
      placeholder="Search by product name..."
      className="border border-cyan-900 shadow-sm px-4 py-2 w-full max-w-md rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
     <AddProductForm onAdd={handleAddProduct}/>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onDelete={handleDeleteProduct}
        onUpdate={handleUpdateProduct}
        editingProductId={editingProductId}
        setEditingProductId={setEditingProductId}
        setProducts={setProducts}
      />
    ))}
  </div>
</div>
  );
}

export default Home;