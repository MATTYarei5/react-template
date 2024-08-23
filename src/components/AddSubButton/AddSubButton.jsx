import React from "react";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

function AddSubButton({ item }) {
    const {addQuantity, subQuantity, subFromCart} = useContext(CartContext)
    const quantity = item.quantity;

  return (
    <div className="add-sub-button">
      <button onClick={() => subQuantity(item.id)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => addQuantity(item.id)}>+</button>
      <div className="remove-button">
        <button onClick={() => subFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default AddSubButton;
