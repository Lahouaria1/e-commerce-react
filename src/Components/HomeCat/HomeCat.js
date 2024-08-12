import React from 'react';
import Kidsbackg from '../../assets/Images/backkids.png'; // Import the background image
import './HomeCat.css'; // Import the CSS file for styling

// Define the HomeCat functional component
const HomeCat = () => {
  return (
    <div className='homecat-container'> {/* Main container for the HomeCat component */}
      <div className='homecat-content'> {/* Inner container for content and image */}
        <div className='homecat-text'> {/* Container for text content */}
          <p className='home-coll'>OUR SLOGAN IS QUALITY FIRST</p>
          <h1>With us you will find the best prices and high quality</h1> 
          {/* Main heading */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla soluta, mollitia aspernatur autem fugit minus, unde deleniti eligendi delectus voluptatum molestias dicta quam eius tempore. Praesentium ut error quia nobis.
          </p> {/* Additional text content */}
          <button className=''>Shop Now</button> {/* Call to action button */}
        </div>
        <img className='homecat-image' src={Kidsbackg} alt="Kids background" /> {/* Background image */}
      </div>
    </div>
  );
}

export default HomeCat; // Export the component for use in other parts of the application