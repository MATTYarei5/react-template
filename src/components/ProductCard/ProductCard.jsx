import { useState } from 'react';

export default function ProductCard({ product }) {
    const[quantity, setQuantity] =  useState(0);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    const subQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {

    };

    return (
        <div className='card'>
            <img src={product.image} />
            <h6>{product.title}</h6>
            <p>{product.price}</p>
            <div className='quantityControl'>
                <button onClick={addQuantity}>+</button>
                <span>{quantity}</span>
                <button onClick={subQuantity}>-</button>
            </div>
            <button className='addCartButton' onClick={addToCart}>Add to Cart</button>
        </div>
    );
}