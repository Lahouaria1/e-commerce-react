import React, { useState } from "react"; // Import React and useState hook
import SignUp from "../SignUp/SignUp"; // Import the SignUp component
import "./Login.css"; // Import the CSS file for styling

function Login() {
  // State to toggle between login and signup forms
  const [showSignUp, setShowSignUp] = useState(false);

  // Function to toggle the form between Login and SignUp
  const handleToggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="login-page"> {/* Container for the login page */}
      {showSignUp ? (
        <SignUp /> // Display SignUp component if showSignUp state is true
      ) : (
        <div className="login-form"> {/* Container for the login form */}
          <h1>Login</h1> {/* Login page heading */}
          <form>
            <div className="form-group"> {/* Group for email input */}
              <label htmlFor="email">Email:</label> {/* Email label */}
              <input type="email" id="email" required /> {/* Email input field */}
            </div>
            <div className="form-group"> {/* Group for password input */}
              <label htmlFor="password">Password:</label> {/* Password label */}
              <input type="password" id="password" required /> {/* Password input field */}
            </div>
            <div className="form-group"> {/* Group for Remember Me checkbox */}
              <label>
                <input type="checkbox" id="remember-me" /> Remember Me {/* Checkbox */}
              </label>
            </div>
            <button type="submit" className="btn">Login</button> {/* Login button */}
            <div className="form-links"> {/* Container for additional links */}
              <a href="/forgot-password" className="forgot-password">
                Forgot Password? {/* Link to forgot password page */}
              </a>
              <p>
                Don't have an account? {/* Message for users without an account */}
                <button onClick={handleToggleForm} className="toggle-btn">
                  Sign Up {/* Button to toggle to SignUp form */}
                </button>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login; // Export the Login component
