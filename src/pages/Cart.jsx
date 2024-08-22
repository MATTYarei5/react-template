import { useContext } from 'react';
import { CartContext } from '../components/Cart/CartContext';

export default function Cart() {
  const { cart, subFromCart, addQuantity, subQuantity, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    const price = item.price ? item.price : 0;
    const quantity = item.quantity ? item.quantity : 1;
    return sum + price * quantity;
  }, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>${item.price ? item.price.toFixed(2) : '0.00'}</p>
                <div>
                  <button onClick={() => addQuantity(item.id)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => subQuantity(item.id)}>-</button>
                </div>
                <button onClick={() => subFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={clearCart}>Checkout</button>
        </div>
      )}
    </div>
  );
}

