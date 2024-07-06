import React, { createContext, useState } from "react";

const TShirtContext = createContext();

const TShirtProvider = ({ children }) => {
  const [tshirts, setTshirts] = useState([
   
    {
      name: "T-Shirt 1",
      description: "Red T-Shirt",
      price: 20,
      sizes: { large: 10, medium: 8, small: 5 },
    },
    {
      name: "T-Shirt 2",
      description: "Blue T-Shirt",
      price: 25,
      sizes: { large: 7, medium: 9, small: 4 },
    },
    {
      name: "T-Shirt 3",
      description: "Green T-Shirt",
      price: 15,
      sizes: { large: 5, medium: 6, small: 3 },
    },
    {
      name: "T-Shirt 4",
      description: "Black T-Shirt",
      price: 30,
      sizes: { large: 8, medium: 7, small: 6 },
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (tshirtName, size) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) => {
        if (tshirt.name === tshirtName && tshirt.sizes[size] > 0) {
          return {
            ...tshirt,
            sizes: {
              ...tshirt.sizes,
              [size]: tshirt.sizes[size] - 1,
            },
          };
        }
        return tshirt;
      })
    );

    setCart((prevCart) => {
      const existingTShirt = prevCart.find(
        (item) => item.name === tshirtName && item.size === size
      );
      if (existingTShirt) {
        return prevCart.map((item) =>
          item.name === tshirtName && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const tshirt = tshirts.find((tshirt) => tshirt.name === tshirtName);
        return [
          ...prevCart,
          { name: tshirtName, size, price: tshirt.price, quantity: 1 },
        ];
      }
    });
  };

  const addProduct = (newProduct) => {
    setTshirts([...tshirts, newProduct]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <TShirtContext.Provider
      value={{ totalItems, tshirts, cart, addToCart, addProduct }}
    >
      {children}
    </TShirtContext.Provider>
  );
};

export { TShirtContext, TShirtProvider };
