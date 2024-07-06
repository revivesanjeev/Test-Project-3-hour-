import React, { useContext } from "react";
import { TShirtContext } from "./TContext";
import  "./Tlist.css";

const TList = () => {
  const { tshirts, addToCart } = useContext(TShirtContext);

  return (
    <div className="tshirt-list">
      <h2>T-Shirt List</h2>
      {tshirts.map((tshirt, index) => (
        <div className="tshirt-item" key={index}>
          <h3>{tshirt.name}</h3>
          <p>{tshirt.description}</p>
          <p>Price: ${tshirt.price}</p>
          <div>
            <button onClick={() => addToCart(tshirt.name, "large")}>
              Large: {tshirt.sizes.large}
            </button>
            <button onClick={() => addToCart(tshirt.name, "medium")}>
              Medium: {tshirt.sizes.medium}
            </button>
            <button onClick={() => addToCart(tshirt.name, "small")}>
              Small: {tshirt.sizes.small}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TList;
