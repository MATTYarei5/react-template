import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';

export default function ProductCard(props) {
  const { addToCart } = useContext(CartContext);

    return (
        <div className='card'>
            <img src={props.product.image} />
            <p>{props.product.title}</p>
            <p>{props.product.price}</p>
            <div>
                <button className='addCartButton' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}