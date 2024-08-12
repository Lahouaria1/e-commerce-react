import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for routing
import './Footer.css'; // Import CSS file for styling the footer

const Footer = () => {
  return (
    <footer className="footer-container"> {/* Main container for the footer */}
      <div className="footer-row"> {/* Container for the footer columns */}
        {/* Column 1: Company Info */}
        <div className="footer-col">
          <h3>Company Info</h3> {/* Column header */}
          <ul className="footer-links"> {/* List of links */}
            <li><Link to="/">About Us</Link></li> {/* Link to About Us page */}
            <li><Link to="/">Affiliate & Influencer: Earn Commission</Link></li> {/* Link to Affiliate Info */}
            <li><Link to="/">Contact Us</Link></li> {/* Link to Contact Us page */}
            <li><Link to="/">Careers</Link></li> {/* Link to Careers page */}
            <li><Link to="/">Sustainability at Company</Link></li> {/* Link to Sustainability Info */}
          </ul>
        </div>
        {/* Column 2: Help & Support */}
        <div className="footer-col">
          <h3>Help & Support</h3> {/* Column header */}
          <ul className="footer-links"> {/* List of links */}
            <li><Link to="/">Refund & Return</Link></li> {/* Link to Refund & Return policy */}
            <li><Link to="/">Shipping Policy</Link></li> {/* Link to Shipping Policy */}
            <li><Link to="/">Payment Methods</Link></li> {/* Link to Payment Methods */}
            <li><Link to="/">How To Order</Link></li> {/* Link to Ordering Instructions */}
            <li><Link to="/">Company Purchaser Policy</Link></li> {/* Link to Company Purchaser Policy */}
            <li><Link to="/">Size Guide</Link></li> {/* Link to Size Guide */}
          </ul>
        </div>
        {/* Column 3: Customer Service */}
        <div className="footer-col">
          <h3>Customer Service</h3> {/* Column header */}
          <ul className="footer-links"> {/* List of links */}
            <li><Link to="/">Return and Refund Policy</Link></li> {/* Link to Return and Refund Policy */}
            <li><Link to="/">Intellectual Property Policy</Link></li> {/* Link to Intellectual Property Policy */}
            <li><Link to="/">Shipping Info</Link></li> {/* Link to Shipping Information */}
            <li><Link to="/">Report Suspicious Activity</Link></li> {/* Link to Report Suspicious Activity */}
          </ul>
        </div>
      </div>
      {/* Newsletter Subscription */}
      <div className="footer-newsletter">
        <h3>Subscribe to our Newsletter</h3> {/* Header for newsletter subscription */}
        <div className="newsletter-icons">
          {/* Social media icons */}
          <i className="fab fa-facebook-f facebook"></i>
          <i className="fab fa-twitter twitter"></i>
          <i className="fab fa-instagram instagram"></i>
          <i className="fab fa-pinterest pinterest"></i>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" /> {/* Input for email address */}
          <button type="submit">Subscribe</button> {/* Submit button */}
        </form>
      </div>
      {/* Payment Methods */}
      <div className="footer-payment-methods">
        <h3>We Accept</h3> {/* Header for payment methods */}
        <div className="payment-icons">
          {/* Payment method icons */}
          <i className="fab fa-cc-visa visa"></i>
          <i className="fab fa-cc-mastercard mastercard"></i>
          <i className="fab fa-cc-paypal paypal"></i>
          <i className="fab fa-cc-amex amex"></i>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p> {/* Copyright notice */}
      </div>
    </footer>
  );
}

export default Footer; // Export the Footer component