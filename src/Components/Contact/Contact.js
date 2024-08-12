import React, { useState } from "react"; // Import React and useState hook
import "./Contact.css"; // Import CSS file for styling the contact page


const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });


  // State to manage form validation errors
  const [errors, setErrors] = useState({});


  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update the state with the new value
    });
  };


  // Function to validate email address format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return regex.test(email);
  };


  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submission initiated", formData); // Debugging statement


    const newErrors = {}; // Object to collect validation errors


    // Validate email field
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }


    // If there are validation errors, update the errors state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    // Handle form submission logic (e.g., send data to server)
    alert("Your message has been sent successfully!"); // Alert message


    // Clear form fields after successful submission
    setFormData({
      name: "",
      phone: "",
      subject: "",
      email: "",
      message: "",
    });


    
    setErrors({});
  };


  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch with Us</h2> {/* Page header */}
        <p>We're Always Eager To Hear From You!</p> {/* Subheader */}
      </div>
      <div className="contact-top">
        <div className="map-container">
          <h2>Our Location</h2> {/* Section header for location */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12506.157147364933!2d18.062598239550775!3d59.33459125138869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6d35d4cbb5%3A0x0!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1614730051536!5m2!1sen!2sus"
            width="100%" // Full width of the container
            height="100%" // Full height of the container
            style={{ border: 0 }} // Remove border
            allowFullScreen="" // Allow full screen mode
            loading="lazy" // Lazy load the map for performance
          ></iframe>
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2> {/* Section header for contact details */}
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {/* Font Awesome icon for address */}
            <div>
              <p>Office Address</p> {/* Address label */}
              <p>Foretag un Stockholm, 14 Avenue</p> {/* Address line 1 */}
              <p>Stockholm, Sweden</p> {/* Address line 2 */}
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>{" "}
            {/* Font Awesome icon for phone */}
            <div>
              <p>Phone Number</p> {/* Phone number label */}
              <p>+4607733309378</p> {/* Phone numbers */}
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>{" "}
            {/* Font Awesome icon for email */}
            <div>
              <p>Send Email</p> {/* Email label */}
              <p>admin@webshoping.com</p> {/* Email address */}
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-globe"></i>{" "}
            {/* Font Awesome icon for website */}
            <div>
              <p>Our Website</p> {/* Website label */}
              <p>www.webshping.com</p> {/* Website URL */}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2> {/* Section header for contact form */}
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Form element with submit handler */}
          <div className="form-group">
            <label htmlFor="name">Name</label> {/* Label for name input */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>{" "}
            {/* Label for phone input */}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>{" "}
            {/* Label for subject input */}
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label> {/* Label for email input */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}{" "}
            {/* Display email error if any */}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>{" "}
            {/* Label for message textarea */}
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
};


export default Contact;
