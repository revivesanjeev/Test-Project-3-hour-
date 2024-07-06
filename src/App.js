import React, { useState, useContext } from "react";
import { TShirtProvider, TShirtContext } from "./components/TContext";
import AddProduct from "./components/AddProduct";
import TList from "./components/TList";
import Cart from "./components/Cart";
import "./App.css";

const AppContent = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { totalItems } = useContext(TShirtContext);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="App">
      <h1>T-Shirt Store</h1>
      <AddProduct />
      <TList />
      <div className="cart-container">
        <button className="cart-button" onClick={toggleCartVisibility}>
          Cart <span className="badge">{totalItems}</span>
        </button>
      </div>
      {isCartVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={toggleCartVisibility}>
              Close
            </button>
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <TShirtProvider>
    <AppContent />
  </TShirtProvider>
);

export default App;
