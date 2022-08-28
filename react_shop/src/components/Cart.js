import { useState } from "react";
import {} from "../styles/cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (previousValue, plantType) =>
      previousValue + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}

      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le Pannier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
