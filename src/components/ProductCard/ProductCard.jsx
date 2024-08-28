import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AddSubButton from '../AddSubButton/AddSubButton';
import { CartContext } from '../Cart/CartContext';

export default function ProductCard(props) {
  const { addToCart, cart } = useContext(CartContext);

  const cartItem = cart.find(item => item.id === props.product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className='card'>
            <Link className='cardDetail' to={`/products/${props.product.id}`}>
            <img src={props.product.image} alt='product-image' />
            <p>{props.product.title}</p>
            <p>{props.product.price}</p>
            </Link>
            {quantity > 0 ? (<AddSubButton item={cartItem} />
            ) : (
            <button className='addCartButton' onClick={() =>{addToCart(props.product)}}>Add to Cart</button>
            )}
        </div>
    );
}