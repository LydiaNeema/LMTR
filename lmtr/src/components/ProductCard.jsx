import React from "react";
import EditForm from "./EditForm";
import AddProductForm from "./AddProductForm";

const API_URL = "http://localhost:3000/products";

function ProductCard({ product, setProducts, onDelete }) {
  const { id, name, price, image, category } = product;

  
  function handleDeleteClick() {
    onDelete(id);
  };

  return (
    <div>
      <img src={image} alt={name}  />
      <h2>{name}</h2>
      <p>ksh {price}</p>
      <p>{category}</p>
      <div className="mt-2 flex gap-2">
        <button  onClick={handleDeleteClick}>
          Delete
        </button>
        <EditForm product={product} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default ProductCard;
