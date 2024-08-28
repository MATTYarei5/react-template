import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';


export default function Products() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState('');
  const [filterOption, setFilterOption] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((data) => {
        data.forEach(item => {
          item.quantity = 0
        });
        setProducts(data)
      setFilteredProducts(data);
    }) 
  },[]);

  useEffect(() => {
    let updatedProducts = [...products];

    if (filterOption) {
      updatedProducts = updatedProducts.filter(product =>
        product.category === filterOption
      );
    }

    if (sort === 'price-asc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(updatedProducts);
  }, [filterOption, sort, products]);

  return (
    <div className="products-page">
      <div className="filter-sort-options">
        <select onChange={(e) => setFilterOption(e.target.value)} value={filterOption}>
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="products">
      {filteredProducts?.map(product => (
          <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}