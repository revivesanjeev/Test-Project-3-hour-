import React, { useContext } from "react";
import { TShirtContext } from "./TContext";
import "./Cart.css"; // Import your CSS file

const Cart = () => {
  const { cart, totalItems } = useContext(TShirtContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>
        Cart <span className="badge">{totalItems}</span>
      </h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      <button>Check Out</button>
    </div>
  );
};

export default Cart;
