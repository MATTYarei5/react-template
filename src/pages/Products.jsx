import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((data) => setProducts(data))
     
  },[])

  return (
    <div className="products">
      {products?.map(product => (
        <Link className='cardDetail' to={`/products/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}