// Import React and necessary assets
import React, { useState } from 'react';
import './Entertainment.css';

// Sample content for entertainment (this can later come from a separate file or API)
const entertainmentPlaces = [
  {
    name: "Penang Performing Arts Centre",
    image: '../../assets/events/penangpac.png',
    description: "Performing Arts Centre of Penang is the Northern region’s dedicated arts centre. More than 500 shows have been staged here, attended by almost 150,000 people.",
    address: "3H-3A-1, Quay One, Straits Quay, Jalan Seri Tanjung Pinang, Tanjung Tokong, 10470 Penang, Malaysia",
  },
  {
    name: "The TOP @ Komtar Penang",
    image: "src/assets/events/topkomtar.png",
    description: "Penang’s highest iconic entertainment tower. Discover the largest and the best indoor theme park which offers you more than 18 themed attractions in one iconic destination",
    address: "1, Jalan Penang, George Town, 10000 George Town, Pulau Pinang, Malaysia",
  },
  {
    name: "Penang Turf Club",
    image: "src/assets/events/turfclub.png",
    description: "Established in 1864, it is one of Malaysia’s oldest and most renowned institutions. Historically synonymous with the grandeur and excitement of horse racing.",
    address: "Batu Gantung Road, 10450 George Town, Penang, Malaysia",
  },
  {
    name: "Entopia",
    image: "src/assets/events/entopia.png",
    description: "Entopia, a tropical sanctuary for our planet's little denizens from those that fly freely in the sky to the ones that creep stealthily beneath the ground.",
    address: "830 Jalan Teluk Bahang, 11050 Penang, Malaysia",
  },
  {
    name: "Escape Penang",
    image: "src/assets/events/escape.png",
    description: "ESCAPE is the fun destination with outdoor play in a natural environment so to give the visitor an appreciation of the world around them and shows that there's no age limit to having fun.",
    address: "828 Jalan Teluk Bahang, 11050 Penang, Malaysia",
  },
  {
    name: "Penang Municipal Park",
    image: "src/assets/events/municipal.png",
    description: "Penang Municipal Park located on Jalan Kebun Bunga is a fantastic place to relax and let the kids run off steam. There is a paddling pool for the kids, playgrounds and a giant chess board.",
    address: "Jalan Kebun Bunga, 10350 George Town, Penang, Malaysia",
  },
  {
    name: "Tech Dome Penang",
    image: "src/assets/events/techdome.png",
    description: "Tech Dome Penang is a not-for-profit science and technology centre run by Penang Tech Centre. With an area of approximately 45,000 sq ft, Tech Dome Penang has over 120 interactive science and technology exhibits.",
    address: "KOMTAR, Level 4, Jalan Penang, 10000 George Town, Penang, Malaysia",
  },
  {
    name: "George Town Festival 2025",
    image: "src/assets/events/festival.png",
    description: "First held in 2010, George Town Festival is an annual festival held in Penang, Malaysia in honour of George Town’s inscription as a UNESCO World Heritage Site in 2008.",
    address: "George Town, Penang, Malaysia",
  },
];

const EntertainmentCard = ({ name, image, description, onClick }) => (
  <div className="entertainment-card" onClick={onClick}>
    <img src={image} alt={name} className="entertainment-image" />
    <h3 className="entertainment-name">{name}</h3>
    <p className="entertainment-description">{description}</p>
  </div>
);

const EntertainmentModal = ({ place, onClose }) => {
  if (!place) return null;

  return (
    <div className="entertainment-modal-overlay" onClick={onClose}>
      <div className="entertainment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={place.image} alt={place.name} className="modal-image" />
        <h2>{place.name}</h2>
        <p>{place.address}</p>
      </div>
    </div>
  );
};

const Entertainment = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="entertainment-container">
      <h2 className="section-title">Entertainments & Events</h2>
      <div className="entertainment-list">
        {entertainmentPlaces.map((place) => (
          <EntertainmentCard
            key={place.name}
            {...place}
            onClick={() => setSelectedPlace(place)}
          />
        ))}
      </div>
      <EntertainmentModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
};

export default Entertainment;
