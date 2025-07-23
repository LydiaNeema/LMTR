import React from "react";
import EditForm from "./EditForm";
import AddProductForm from "./AddProductForm";

const API_URL = "https://shop-stack.onrender.com/products";

function ProductCard({ product, setProducts, onDelete }) {
  const { id, name, price, image, category } = product;


  function handleDeleteClick() {
    onDelete(id);
  };

  return (
    <div className="border border-gray-300 shadow-sm p-4 rounded-md flex flex-col items-center">
      <img src={image} alt={name}    className="w-80 h-90
       object-cover"/>
      <h2>{name}</h2>
      <p>ksh {price}</p>
      <p>{category}</p>
      <div className="mt-2 flex gap-2">
         <EditForm product={product} setProducts={setProducts} />
        <button  onClick={handleDeleteClick} className="bg-red-500 text-white px-4 py-2 rounded border hover:bg-red-600 transition-colors flex flex border-radius justify-center items-center border-1 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;