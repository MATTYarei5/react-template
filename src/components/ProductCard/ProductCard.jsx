import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { Link } from 'react-router-dom';
import AddSubButton from '../AddSubButton/AddSubButton';

export default function ProductCard(props) {
  const { addToCart, cart } = useContext(CartContext);

  const cartItem = cart.find(item => item.id === props.product.id);

    return (
        <div className='card'>
            <Link className='cardDetail' to={`/products/${props.product.id}`}>
            <img src={props.product.image} alt='product-image' />
            <p>{props.product.title}</p>
            <p>{props.product.price}</p>
            </Link>
            {cartItem?.quantity > 0 ? (<AddSubButton item={props.product} />
            ) : (
            <button className='addCartButton' onClick={() =>{addToCart(props.product)}}>Add to Cart</button>
            )}
        </div>
    );
}