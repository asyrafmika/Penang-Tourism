import React, { useState } from 'react';
import './Hotelpage.css'; // Ensure this file exists and contains the required styles
import ritz from '../../assets/ritz.jpg'; // Make sure this file exists
import eo from '../../assets/Eastern.jpg';
import rock from '../../assets/hardrock.jpg';
import jen from '../../assets/JEN.jpg';
import rasa from '../../assets/rasa.jpg';
import G from '../../assets/G.jpg';
import bay from '../../assets/bay.jpg';

const Hotelpage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const topHotels = [
    {
      name: 'Eastern & Oriental Hotel',
      description: 'A British colonial-style luxury hotel with seafront views, established in 1885.',
      image: eo,
      rating: 4.9,
      location: 'Georgetown, Penang',
      facilities: ['Spa', 'Restaurant', 'Pool', 'Heritage View'],
    },
    {
      name: 'The Lone Pine Hotel',
      description: 'A serene and peaceful stay with stunning ocean views.',
      image: rock, // Replace 'rock' with the correct path for 'lone.jpg' if applicable
      rating: 4.5,
      location: 'Batu Ferringhi, Penang',
      facilities: ['Beachfront', 'Pool', 'Restaurant', 'Gym'],
    },
    {
      name: 'Hotel Jen Penang',
      description: 'A vibrant hotel in the heart of Georgetown, ideal for business and leisure travelers.',
      image: jen,
      rating: 4.6,
      location: 'Georgetown, Penang',
      facilities: ['Fitness Center', 'Pool', 'Restaurant', 'Meeting Rooms'],
    },
    {
      name: 'Shangri-La’s Rasa Sayang Resort & Spa',
      description: 'A luxury retreat set amidst lush gardens, offering exceptional hospitality and services.',
      image: rasa,
      rating: 4.8,
      location: 'Batu Ferringhi, Penang',
      facilities: ['Spa', 'Beachfront', 'Fine Dining', 'Golf Course'],
    },
    {
      name: 'Hard Rock Hotel Penang',
      description: 'A trendy beachfront hotel offering a rock & roll experience with vibrant decor and music-themed facilities.',
      image: rock,
      rating: 4.7,
      location: 'Batu Ferringhi, Penang',
      facilities: ['Live Entertainment', 'Pool', 'Kids Club', 'Beach Access'],
    },
    {
      name: 'G Hotel Gurney',
      description: 'A stylish and modern hotel located along Gurney Drive, close to shopping and dining hotspots.',
      image: G,
      rating: 4.7,
      location: 'Gurney Drive, Penang',
      facilities: ['Infinity Pool', 'Fitness Center', 'Bar', 'Lounge'],
    },
    {
      name: 'Bayview Hotel Georgetown',
      description: 'An affordable yet comfortable hotel offering panoramic views of Georgetown.',
      image: bay,
      rating: 4.2,
      location: 'Georgetown, Penang',
      facilities: ['Rooftop Bar', 'Pool', 'Banquet Hall', 'Restaurant'],
    },
    {
      name: 'The Ritz-Carlton, Penang',
      description: 'An opulent hotel offering world-class luxury with impeccable service, gourmet dining, and breathtaking views.',
      image: ritz,
      rating: 4.9,
      location: 'Tanjung Bungah, Penang',
      facilities: ['Spa', 'Fine Dining', 'Infinity Pool', 'Exclusive Lounge'],
    },
  ];

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedHotel(null);
  };

  return (
    <div className="hotelpage">
      {/* Hero Section */}
      <section className="hotelpage-hero">
        <h1 className="hero-title">Top-Rated Hotels in Penang</h1>
        <p className="hero-subtitle">Experience luxury and comfort in Penang's finest hotels.</p>
      </section>

      {/* Hotel List Section */}
      <section className="hotel-list">
        {topHotels.map((hotel, index) => (
          <div className="hotel-card" key={index} onClick={() => openModal(hotel)}>
            <img src={hotel.image} alt={hotel.name} className="hotel-card-image" />
            <div className="hotel-card-content">
              <h3 className="hotel-card-title">{hotel.name}</h3>
              <p className="hotel-card-rating">⭐ {hotel.rating.toFixed(1)} / 5</p>
              <p className="hotel-card-location">{hotel.location}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Modal Popup */}
      {modalOpen && selectedHotel && (
        <div className="hotel-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedHotel.image} alt={selectedHotel.name} className="modal-image" />
            <h2 className="modal-title">{selectedHotel.name}</h2>
            <p className="modal-description">{selectedHotel.description}</p>
            <p className="modal-rating">⭐ {selectedHotel.rating} / 5</p>
            <p className="modal-location">Location: {selectedHotel.location}</p>
            <p className="modal-facilities">
              <strong>Facilities:</strong> {selectedHotel.facilities.join(', ')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotelpage;
