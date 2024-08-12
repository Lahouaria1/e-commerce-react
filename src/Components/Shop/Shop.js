import React, { useState } from "react";

import "./Shop.css"; 

import productData from "../../data/productData.js"; // Import product data
import CardItem from "../CardItem/CardItem.js";

const Shop = () => {
  // State to track the selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // State to track whether to show popular posts
  const [showPopular, setShowPopular] = useState(false);

  // Handler for changing the selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Toggle the visibility of popular posts
  const togglePopular = () => {
    setShowPopular((prev) => !prev);
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  
  const popularPosts = productData.slice(0, 3);

  return (
    <div className="shop-container">
      {/* Category filter buttons */}
      <div className="filters">
        <button
          className="filters-button"
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className="filters-button"
          onClick={() => handleCategoryChange("men")}
        >
          Men
        </button>
        <button
          className="filters-button"
          onClick={() => handleCategoryChange("women")}
        >
          Women
        </button>
        <button
          className="filters-button"
          onClick={() => handleCategoryChange("kids")}
        >
          Kids
        </button>
      </div>

      {/* Products display grid */}
      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <CardItem
              key={product.id}
              id={product.id}
              src={product.imgUrl}
              name={product.description}
              category={product.category}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              rating={product.rating}
              onAddToCart={() => {
                /* Function to add to cart */
              }} 
            />
          ))}
        </div>
      </div>

      {/* Popular posts section */}
      <div className="popular-container">
        <button className="popular-button" onClick={togglePopular}>
          {showPopular ? "Hide Popular Posts" : "Show Popular Posts"}
        </button>
        {showPopular && (
          <div className="popular-posts">
            {popularPosts.map((post) => (
              <div key={post.id} className="popular-post">
                <img src={post.imgUrl} alt={post.description} />
                <p>{post.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
