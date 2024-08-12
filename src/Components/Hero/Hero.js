import React, { useState, useEffect } from 'react'; // Import React and hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Hero.css'; // Import CSS for styling

// Import video assets
import Video1 from '../../assets/Images/mall2.mp4'; 
import Video2 from '../../assets/Images/mencloths.mp4';  
import Video3 from '../../assets/Images/women.mp4'; 

// Array to hold video sources
const videos = [Video1, Video2, Video3];

const Hero = () => {
  // State to keep track of the current video index
  const [currentVideo, setCurrentVideo] = useState(0);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Get the video element by ID
    const videoElement = document.getElementById('heroVideo');

    // Function to handle video end event
    const handleVideoEnd = () => {
      // Move to the next video in the array, looping back to the start
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    };

    // Add event listener to handle video end
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    // Clean up event listener on component unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideo]); // Re-run effect when currentVideo changes

  // Handle "Shop Now" button click
  const handleShopNowClick = () => {
    navigate('/Shop'); // Navigate to the shop page
  };

  return (
    <div className='hero-container'> {/* Container for the hero section */}
      <video 
        id="heroVideo" 
        src={videos[currentVideo]} 
        autoPlay 
        muted 
        loop={false} // Automatically play and mute the video
      />
      <h1>Our Luxury Products</h1> {/* Heading for the hero section */}
      <p>You're welcome</p> {/* Subtext or description */}
      <div className="hero-btns"> {/* Container for buttons */}
        <button className='btn' onClick={handleShopNowClick}>Shop Now</button> {/* Button for call to action */}
      </div>
    </div>
  );
}

export default Hero; // Export the Hero component