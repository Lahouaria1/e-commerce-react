// src/Components/Home/Home.js

import React from 'react'; // Import React
import '../../App.css'; // Import global styles
import Hero from '../Hero/Hero'; // Import Hero component
import Cards from '../Cards/Cards'; // Import Cards component
import Testimonial from '../Testimonial/Testimonial'; // Import Testimonial component
import HomeCat from '../HomeCat/HomeCat'; // Import HomeCat component
import Map from '../NavBar/Map/Map'; // Import Map component

// Home component function
function Home() {
  return (
    <>
      <Hero /> {/* Hero section with video background and call-to-action */}
      <HomeCat /> {/* HomeCat section displaying categories */}
      <Cards /> {/* Cards section showcasing products */}
      <Testimonial /> {/* Testimonial section for customer reviews */}
      <Map /> {/* Map section showing the company's location */}
    </>
  );
}

export default Home; // Export the Home component for use in other parts of the app