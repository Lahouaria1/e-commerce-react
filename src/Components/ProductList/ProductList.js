import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; 

// Functional Component for displaying a list of products
function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {/* Map over the products array and render each product */}
      {products.map(product => (
        <div key={product.id} className="product-card">
          {/* Product image */}
          <img src={product.imgUrl} alt={product.description} className="product-image" />
          {/* Product description */}
          <h3>{product.description}</h3>
          {/* Product price */}
          <p>${product.newPrice.toFixed(2)}</p>
          {/* Product category */}
          <p>{product.category}</p>
          {/* Actions: Link to product details and button to add to cart */}
          <div className="actions">
            <Link to={`/product-details/${product.id}`} className="btn">View Details</Link>
            <button onClick={() => addToCart(product)} className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList; 