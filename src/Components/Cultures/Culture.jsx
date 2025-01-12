import React from 'react';
import './Culture.css';
import danceImage from '../../assets/dance.jpg'; // Import the image
import { Link } from 'react-router-dom';

const Culture = () => {
  return (
    <section 
      id="culture" 
      className="culture-section" 
      style={{ backgroundImage: `url(${danceImage})` }} // Apply background dynamically
    >
      <div className="culture-overlay">
        <div className="culture-content">
          <h2 className="culture-title">Discover Penang's Culture</h2>
          <p className="culture-description">
            Penang's culture is a beautiful blend of traditions, festivals, and vibrant
            arts. From the lively festivals like Thaipusam and Chinese New Year to the
            intricate Peranakan heritage, Penang offers a glimpse into its diverse
            community. Explore traditional dances, unique crafts, and the iconic street
            art that tells stories of the past and present. Every corner of Penang is a
            celebration of its rich cultural tapestry.
          </p>
          <Link to="/culture" className="button-cul" aria-label="View Culture">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Culture;
