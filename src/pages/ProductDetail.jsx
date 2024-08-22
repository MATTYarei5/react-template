import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

export default function ProductDetail(props) {

  const [productDetail, setProductDetail] = useState([])

  const { id } = props.match.params

  useEffect((id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then((data) => setProductDetail(data)) 
  },[])

  return (
    <div className="products">
        <ProductCard key={productDetail.id} product={productDetail}></ProductCard>
    </div>
  );
}