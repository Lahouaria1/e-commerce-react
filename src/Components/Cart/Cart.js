import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Import trash icon for removing items
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Cart</h1> {/* Header for the cart page */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th> {/* Column for product description */}
            <th>Image</th> {/* Column for product image */}
            <th>Price</th> {/* Column for individual item price */}
            <th>Quantity</th> {/* Column for quantity of the item */}
            <th>Total</th> {/* Column for total price per item */}
            <th>Edit</th> {/* Column for edit/remove actions */}
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            // Render each item in the cart
            cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td> {/* Product description */}
                <td>
                  <img src={item.imgUrl} alt={item.description} className="cart-item-image" /> {/* Product image */}
                </td>
                <td>${item.newPrice.toFixed(2)}</td> {/* Item price */}
                <td>{item.quantity}</td> {/* Quantity of the item */}
                <td>${(item.newPrice * item.quantity).toFixed(2)}</td> {/* Total price for this item */}
                <td>
                  {/* Button to remove the item from the cart */}
                  <button className="btn remove-item" onClick={() => removeFromCart(index)}>
                    <FaTrash /> {/* Trash icon */}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            // Display message if the cart is empty
            <tr>
              <td colSpan="6">Your cart is empty.</td> {/* Span all columns to show a message */}
            </tr>
          )}
        </tbody>
      </table>
      <div className="cart-totals">
        <h2>Cart Totals</h2> {/* Header for the totals section */}
        <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Display the total price */}
        {/* Button to place the order */}
        <button className="btn place-order">Place Order</button>
      </div>
    </div>
  );
}

export default Cart;