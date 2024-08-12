// src/Components/AboutUs/AboutUs.js

import React from 'react';
import './AboutUs.css'; 

// Array containing team member information
const teamMembers = [
  {
    name: 'Sami Adam',
    role: 'Founder & CEO',
    image: 'https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg',
  },
  {
    name: 'Yasmin Khalid',
    role: 'Chief Operating Officer',
    image: 'https://millingandgrain.com/wp-content/uploads/2022/08/female_profile-2.png', 
  },
  
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Introduction section */}
      <div className="about-us-intro">
        <h1>About Us</h1>
        <p>Welcome to our company! We are dedicated to providing the best service and products to our customers. Meet our team of experts who make it all possible.</p>
      </div>

      {/* Team members section */}
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;