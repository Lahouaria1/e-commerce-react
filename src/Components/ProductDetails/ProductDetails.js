import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext"; // Custom hook to get product context
import "./ProductDetails.css"; // Import the CSS for styling

function ProductDetails({ addToCart }) {
  const { id } = useParams(); // Get the product ID from the URL params
  const navigate = useNavigate(); // Hook for navigation
  const { products } = useProductContext(); // Use the custom hook to access product data

  const [product, setProduct] = useState(null); // State to store the product details
  const [quantity, setQuantity] = useState(1); // State to manage the quantity of the product

  // Effect to find the product based on the ID from the URL and update the state
  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct);
  }, [id, products]); // Dependencies: run effect when `id` or `products` change

  // Handlers for changing quantity
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Navigate to checkout page
  const handleCheckout = () => navigate("/checkout");

  // Add the product with the selected quantity to the cart
  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  // If the product is not found, show a message and a button to go back to the shop
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <button className="btn back-to-shop" onClick={() => navigate("/shop")}>
          Back to Shop
        </button>
      </div>
    );
  }

  // Render product details if the product is found
  return (
    <div className="product-details">
      <div className="product-container">
        {/* Product image */}
        <img
          src={product.imgUrl}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          {/* Product name */}
          <h2>{product.name}</h2>
          {/* Product rating */}
          <p className="product-reviews">{product.rating} Stars</p>
          {/* Product price */}
          <p className="product-price">${product.newPrice.toFixed(2)}</p>
          {/* Product category */}
          <p className="product-category">{product.category}</p>
          {/* Product description */}
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          {/* Quantity selector */}
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={handleDecrease}>
              -
            </button>
            <input
            className="number-btn"
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              readOnly
            />
            <button className="quantity-btn" onClick={handleIncrease}>
              +
            </button>
          </div>
          {/* Action buttons */}
          <div className="action-buttons">
            <button className="btn add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {/* Discount code input */}
            <div className="discount-code">
              <input type="text" placeholder="Enter discount code" />
              <button className="btn apply-discount">Apply</button>
            </div>
            <button className="btn checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails; // Export the component for use in other parts of the application