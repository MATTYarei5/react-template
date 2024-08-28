import { useState, useEffect } from 'react';
import ProductCard from './../ProductCard/ProductCard';

export default function ProductDetail(props) {

  const [productDetail, setProductDetail] = useState([])

  const { id } = props.match.params

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then((data) => setProductDetail(data)) 
  },[id])

  return (
    <div className="products">
        <ProductCard key={productDetail.id} product={productDetail}></ProductCard>
        <div className="additional-details">
            <h2>Product Description</h2>
            <p>{productDetail.description}</p>

            <h3>Rating</h3>
            <p>{productDetail.rating?.rate} out of 5 stars</p>
            <p>{productDetail.rating?.count} reviews</p>
          </div>

    </div>
  );
}