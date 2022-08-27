import "../App.css";

import Banner from "./Banner.js";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";

function App() {
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />;
      </div>

      <Footer />
    </div>
  );
}

export default App;
