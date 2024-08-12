import React, { useState } from "react";
import "./Cards.css";

import shopData from "../../data/ShopData"; // Import the shop data
import CardItem from "../CardItem/CardItem";

// Main Cards component to render a list of CardItem components
function Cards() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    console.log(`${product.name} added to cart!`);
    setCartItems([...cartItems, product]); // Example: Add to cart logic
  };

  return (
    <div className="cards">
      <h1>Check out these EPIC Products!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Map over shopData to render a CardItem component for each item */}
            {shopData.map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                src={item.src}
                name={item.name}
                category={item.category}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                rating={item.rating}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;