import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="mapp-container">
      <h2>Our Location</h2>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.019234831903!2d18.070245216054135!3d59.33258018194677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f8c135c8315fb%3A0x428d085a47d8e4a4!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1691423476718!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;