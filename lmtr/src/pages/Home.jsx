import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  const visible = filter
    ? products.filter((p) =>
        p.category.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  return (
    <main>
      <h1>Our Products</h1>
      <CategoryFilter onFilterChange={setFilter} />
      <div className="product-grid">
        {visible.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} width="120" />
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}