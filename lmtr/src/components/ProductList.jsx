import React from "react";
import ProductCard from "./ProductCard";
// Renders a list of products using the ProductCard component
function ProductList({ products = [], onDelete, onEdit }) {
   // If products is not an array or is empty, render nothing
  if (!Array.isArray(products) || products.length === 0) {
    return  // You could consider rendering a fallback message here (e.g., "No products found")
  }

  return (
    <div>
        {/* Loop through products and render each one as a ProductCard */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProductList;
