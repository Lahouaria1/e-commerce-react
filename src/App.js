import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { ProductProvider } from "./context/ProductContext";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setCartItems(updatedItems);
    }
  };

  return (
    <ProductProvider>
      <Router>
        <NavBar cartItems={cartItems} />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<ProductList addToCart={addToCart} />} />
            <Route path="/product-details/:id" element={<ProductDetails addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={
              <Checkout
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;