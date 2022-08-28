import "../App.css";

import Banner from "./Banner.js";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";

import "../styles/Layout.css";
import { useState, useEffect } from "react";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart
          cart={cart}
          updateCart={updateCart}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        ;
      </div>

      <Footer />
    </div>
  );
}

export default App;
