import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import Trash icon from react-icons
import './Checkout.css'; // Import CSS for styling

// Define the Checkout functional component
function Checkout({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
  // State to manage the success message
  const [successMessage, setSuccessMessage] = useState('');

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);

  // Function to handle placing an order
  const handlePlaceOrder = () => {
  
    setSuccessMessage('Your order has been placed successfully!');

  
  };

  return (
    <div className="checkout"> {/* Main container for the Checkout component */}
      <h1>Checkout</h1> {/* Main heading */}
      <div className="checkout-content"> {/* Container for the table and totals */}
        <table className="cart-table"> {/* Table displaying cart items */}
          <thead>
            <tr>
              <th>Product</th> {/* Table header for Product */}
              <th>Image</th> {/* Table header for Image */}
              <th>Price</th> {/* Table header for Price */}
              <th>Quantity</th> {/* Table header for Quantity */}
              <th>Total</th> {/* Table header for Total */}
              <th>Edit</th> {/* Table header for Edit */}
            </tr>
          </thead>
          <tbody>
            {/* Conditionally render table rows based on whether there are items in the cart */}
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index}> {/* Row for each cart item */}
                  <td>{item.description}</td> {/* Product description */}
                  <td>
                    <img src={item.imgUrl} alt={item.description} className="cart-item-image" /> {/* Product image */}
                  </td>
                  <td>${item.newPrice.toFixed(2)}</td> {/* Price of the item */}
                  <td>
                    {/* Buttons to increase or decrease the quantity */}
                    <button className="btn decrease-quantity" onClick={() => decreaseQuantity(index)}>-</button>
                    <span className="quantity">{item.quantity}</span> {/* Quantity of the item */}
                    <button className="btn increase-quantity" onClick={() => increaseQuantity(index)}>+</button>
                  </td>
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
              <tr>
                <td colSpan="6">Your cart is empty.</td> {/* Message when cart is empty */}
              </tr>
            )}
          </tbody>
        </table>
        <div className="cart-totals"> {/* Container for the order summary */}
          <h2>Order Summary</h2> {/* Order summary heading */}
          <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Total price of all items */}
          <button className="btn place-order" onClick={handlePlaceOrder}>Place Order</button> {/* Button to place the order */}
        </div>
        {successMessage && ( /* Conditionally render the success message */
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout; // Export the Checkout component for use in other parts of the application