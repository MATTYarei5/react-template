import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import '../styles/product.scss'
import { getProducts } from '../helpers/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;