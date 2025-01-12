import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Places.css';
import place1 from '../../assets/beach.jpg';
import place2 from '../../assets/escape.jpg';
import place3 from '../../assets/historic.jpg';
import icon1 from '../../assets/sea-waves.png';
import icon2 from '../../assets/attraction.png';
import icon3 from '../../assets/history.png';
import arrow from '../../assets/dark-arrow.png'

const Places = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeDetails, setPlaceDetails] = useState({ title: '', description: '' });

  const handlePlaceClick = (title, description) => {
    setPlaceDetails({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="places" id="places">

      <div className="place" onClick={() => handlePlaceClick('Beach', 'Penang’s beaches are pristine and perfect for relaxation or water activities.')}>
        <img src={place1} alt="Beach" />
        <div className="caption">
          <img src={icon1} alt="Beach Icon" />
          <p>Beach</p>
        </div>
      </div>
      <div className="place" onClick={() => handlePlaceClick('Attraction', 'Penang is home to several attraction spots including amusement parks and lively night markets.')}>
        <img src={place2} alt="Attraction" />
        <div className="caption">
          <img src={icon2} alt="Attraction Icon" />
          <p>Attraction</p>
        </div>
      </div>
      <div className="place" onClick={() => handlePlaceClick('Historical Site', 'Dive into Penang’s rich history, where heritage buildings, timeless traditions, and captivating stories bring the past to life.')}>
        <img src={place3} alt="History" />
        <div className="caption">
          <img src={icon3} alt="History Icon" />
          <p>Historical Site</p>
        </div>
      </div>

      <div className="explore-button-container">
        <Link to="/places" className='button'>Explore more <img src={arrow} alt=""/>
        </Link>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{placeDetails.title}</h2>
            <p>{placeDetails.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Places;
