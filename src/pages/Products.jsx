import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import '../styles/product.scss'
// import getProducts from '../helpers/getProducts';

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
        console.log(product)
      ))}
      <button onClick={()=> console.log(products)}>Click</button>
    </div>
  )
  // const [products, setProducts] = useState(null);

  // async function getProducts() {
  //   await fetch('https://fakestoreapi.com/products')
  //     .then(res=>res.json())
  //     .then((data) => setProducts(data))
    
  // }

  // useEffect(() => {
  //   getProducts(setProducts);
  //   console.log(products)
  // }, []);

  // return (
  //   <div className="products">
  //     {products?.map(product => (
  //       <ProductCard key={product.id} product={product} />
  //     ))}
  //     <button onClick={()=> console.log(products)}>Click</button>
  //   </div>
  // );
}