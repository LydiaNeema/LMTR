import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddProductForm from "../components/AddProductForm";

const API_URL = "http://localhost:3000/products";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProductId, setEditingProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  // Add new product
  function handleAddProduct(newProduct) {
    setProducts((prev) => [...prev, newProduct]);
  }

  // Delete product
  function handleDeleteProduct(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
      })
      .catch((err) => console.error("Error deleting product:", err));
  }

  // Update product
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
        setProducts((prev) =>
          prev.map((product) => (product.id === data.id ? data : product))
        );
        setEditingProductId(null);
      })
      .catch((err) => console.error("Error updating product:", err));
  }

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">All Products</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border px-3 py-2 w-full rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <AddProductForm onAdd={handleAddProduct} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
