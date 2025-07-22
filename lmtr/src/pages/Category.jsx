import { useEffect, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import CategoryList from '../components/CategoryList';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3001/categories').then(res => res.json()),
      fetch('http://localhost:3001/products').then(res => res.json()),
    ])
      .then(([categoriesData, productsData]) => {
        setCategories(['All', ...categoriesData.map(c => c.name)]);
        setProducts(productsData);
        setFilteredItems(productsData); 
      })
      .catch(err => setError(err.message));
  }, []);

  const fetchByCategory = category => {
    setError('');
    if (category === 'All') {
      setFilteredItems(products);
      return;
    }
    if (!category) {
      setError('Please select or enter a category');
      setFilteredItems([]);
      return;
    }
    const result = products.filter(p => p.category === category);
    if (!result.length) {
      setError(`No items found for category: ${category}`);
      setFilteredItems([]);
    } else {
      setFilteredItems(result);
    }
  };

  const handleSelect = value => {
    setSearchTerm(value);
    fetchByCategory(value);
  };

  const handleSearch = () => fetchByCategory(searchTerm);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Browse Products by Category</h1>

      <div className="flex space-x-4 items-center mb-6">
        <CategoryFilter options={categories} onSelect={handleSelect} />

        <input
          type="text"
          placeholder="Or type to search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border rounded px-3 py-2 flex-grow"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Go
        </button>
      </div>

      {error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : (
        <CategoryList items={filteredItems} />
      )}
    </div>
  );
}
