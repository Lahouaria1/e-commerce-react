import React from 'react';
import './Testimonial.css'; 
import { RiDoubleQuotesL } from 'react-icons/ri'; // Importing quote icon

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="title">
        <h2>Testimonial</h2>
      </div>
      <div className="testimonial-container container">
        {/* Testimonial Card 1 */}
        <div className="testimonial-card">
          <img src="/img1.jpg" alt="Mickel Adem" className="testimonial-image" />
          <h4>Mickel Adem</h4>
          <h5>CEO & Founder</h5>
          <div className="quotes">
            <RiDoubleQuotesL />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugiat necessitatibus veritatis alias tempore.
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="testimonial-card">
          <img src="/R.jfif" alt="Sara Asad" className="testimonial-image" />
          <h4>Sara Asad</h4>
          <h5>CEO & Founder</h5>
          <div className="quotes">
            <RiDoubleQuotesL />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugiat necessitatibus veritatis alias tempore.
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="testimonial-card">
          <img src="/men.avif" alt="Kamel Khalid" className="testimonial-image" />
          <h4>Kamel Khalid</h4>
          <h5>CEO & Founder</h5>
          <div className="quotes">
            <RiDoubleQuotesL />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugiat necessitatibus veritatis alias tempore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;