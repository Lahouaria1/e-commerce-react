import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CardItem.css'; 

function CardItem({ id, src, name, category, newPrice, oldPrice, rating, onAddToCart }) {
  const [isFavorited, setIsFavorited] = useState(false); // State to manage favorited status
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    onAddToCart({ id, src, name, newPrice, rating });
    navigate('/cart'); // Redirect to the cart page
  };

  const handleFavoriteToggle = (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    setIsFavorited(!isFavorited); // Toggle favorited state
  };

  return (
    <div className="item-card">
      <div className="card-icons">
        {/* Add to Cart icon */}
        <a
          href="#"
          className="icon-cart"
          aria-label="Add to Cart"
          onClick={handleAddToCart}
        >
          🛒
        </a>
        {/* View Details link */}
        <Link to={`/product-details/${id}`} className="icon-eye" aria-label="View Details">👁️</Link>
        {/* Add to Wishlist icon */}
        <a
          href="#"
          className={`icon-heart ${isFavorited ? 'favorited' : ''}`}
          aria-label="Add to Wishlist"
          onClick={handleFavoriteToggle}
        >
          {isFavorited ? '❤️' : '🤍'} {/* Change the heart icon based on the state */}
        </a>
      </div>
      <img src={src} alt={name} />
      <h4>{name}</h4>
      <p>{category}</p>
      <div className="price">
        <span>${newPrice.toFixed(2)}</span>
        {oldPrice && <span className="old-price">${oldPrice.toFixed(2)}</span>}
      </div>
      <div className="rating">
        {Array.from({ length: 5 }, (v, k) => k < rating ? '⭐' : '☆')}
      </div>
      <div className="card-buttons">
        <Link to={`/product-details/${id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
}

export default CardItem;