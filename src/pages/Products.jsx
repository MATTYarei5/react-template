import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((data) => setProducts(data))
     
  })

  return (
    <div className="products">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}