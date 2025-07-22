import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products = [], onDelete, onEdit }) {
  if (!Array.isArray(products) || products.length === 0) {
    return 
  }

  return (
    <div>
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
