import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo3.png'; // Import logo image
import { Button } from 'react-bootstrap'; // Import Button component from react-bootstrap

// Define the NavBar functional component
const NavBar = ({ cartItems }) => {
  // State to manage the mobile menu toggle
  const [click, setClick] = useState(false);

  // Toggle mobile menu visibility
  const handleClick = () => setClick(!click);

  // Close mobile menu
  const closeMobileMenu = () => setClick(false);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar"> {/* Main container for the navigation bar */}
      <div className="navbar-container"> {/* Container for navbar content */}
        {/* Logo link */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" /> {/* Display logo image */}
        </Link>
        {/* Menu icon for mobile view */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i> {/* Toggle between menu and close icon */}
        </div>
        {/* Navigation menu */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Navigation items */}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Aboutus" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/Shop" className="nav-links" onClick={closeMobileMenu}>Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-links" onClick={closeMobileMenu}>Log In</Link>
          </li>
          <li className="nav-item">
            <Link to="/SignUp" className="nav-links" onClick={closeMobileMenu}>Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/Cart" className="nav-links" onClick={closeMobileMenu}>
              <Button
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                  borderRadius: "50%", // Ensure the button is circular
                  padding: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="outline-primary"
              >
                {/* Shopping cart icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                {/* Display the quantity badge if there are items in the cart */}
                {totalQuantity > 0 && (
                  <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                      color: "white",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      transform: "translate(25%, -25%)",
                      borderRadius: "50%", // Ensure the badge is circular
                      fontSize: "0.75rem", // Adjust font size as needed
                    }}
                  >
                    {totalQuantity}
                  </div>
                )}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar; // Export the NavBar component for use in other parts of the application