import React, { useState, useContext } from "react";
import { TShirtContext } from "./TContext";
import "./AddProduct.css";
import axios from "axios";



const AddProduct = () => {
  const { addProduct } = useContext(TShirtContext);
  const [tshirt, setTshirt] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [largesize, setLargeSize] = useState("");
  const [mediumsize, setMediumSize] = useState("");
  const [smallsize, setSmallSize] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: tshirt,
      description,
      price: parseFloat(price),
      sizes: {
        large: parseInt(largesize, 10),
        medium: parseInt(mediumsize, 10),
        small: parseInt(smallsize, 10),
      },
    };
        addProduct(newProduct);
          axios
            .post(
              "https://crudcrud.com/api/45c8e8c451144f58167ece5c53dc182/Product",
              newProduct,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              console.log("product added successfully", response.data);
            })
            .catch((error) => {
              console.error("Error in posting product", error);
            });
    
  
    setTshirt("");
    setDescription("");
    setPrice("");
    setLargeSize("");
    setMediumSize("");
    setSmallSize("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>T-shirt</h3>
      <input
        type="text"
        placeholder="T-shirt name"
        value={tshirt}
        onChange={(e) => setTshirt(e.target.value)}
      />
      <h3>Description</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <h3>Price</h3>
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <h2>Quantity Available</h2>
      <h3>Large size</h3>
      <input
        type="number"
        placeholder="Large available quantity"
        value={largesize}
        onChange={(e) => setLargeSize(e.target.value)}
      />
      <h3>Medium size</h3>
      <input
        type="number"
        placeholder="Medium available quantity"
        value={mediumsize}
        onChange={(e) => setMediumSize(e.target.value)}
      />
      <h3>Small size</h3>
      <input
        type="number"
        placeholder="Small available quantity"
        value={smallsize}
        onChange={(e) => setSmallSize(e.target.value)}
      />
      <button type="submit">Add the Product</button>
    </form>
  );
};

export default AddProduct;
