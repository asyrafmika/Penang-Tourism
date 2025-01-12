import React from "react";
import "./Hotel.css";
import hotel1 from "../../assets/hotel1.jpg";
import hotel2 from "../../assets/hotel2.webp";
import hotel3 from "../../assets/hotel3.jpg";
import { Link } from "react-router-dom";

const Hotel = () => {
  return (
    <div className="hotel-section" id="hotel">
      <header className="hotel-header">
        <h2 className="hotel-title">Stay in Penang's Best Hotels</h2>
        <p className="hotel-subtitle">
          Discover top accommodations in Penang, combining luxury, comfort, and proximity to stunning attractions.
        </p>
      </header>
      <div className="hotel-content">
        {/* Hotel Cards Section */}
        <div className="hotel-cards">
          <div className="hotel-card" aria-label="Eastern & Oriental Hotel">
            <img src={hotel1} alt="Eastern & Oriental Hotel" className="hotel-image" />
            <div className="hotel-info">
              <h3>Eastern & Oriental Hotel</h3>
              <p>
                A luxurious heritage hotel in George Town with sea views and world-class amenities.
              </p>
            </div>
          </div>
          <div className="hotel-card" aria-label="Shangri-La’s Rasa Sayang Resort">
            <img src={hotel2} alt="Shangri-La’s Rasa Sayang Resort" className="hotel-image" />
            <div className="hotel-info">
              <h3>Shangri-La’s Rasa Sayang Resort</h3>
              <p>
                Experience beachfront luxury along Batu Ferringhi, with lush gardens and serene dining options.
              </p>
            </div>
          </div>
          <div className="hotel-card" aria-label="Lexis Suites Penang">
            <img src={hotel3} alt="Lexis Suites Penang" className="hotel-image" />
            <div className="hotel-info">
              <h3>Lexis Suites Penang</h3>
              <p>
                Family-friendly suites in Teluk Kumbar with private pools and easy access to local attractions.
              </p>
            </div>
          </div>
        </div>

        <div className="book-more-container">
          <Link to="/hotel" className="book-more-button">
            Book More Hotels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
