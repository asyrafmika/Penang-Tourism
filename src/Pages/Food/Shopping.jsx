// Import React and necessary assets
import React, { useState } from 'react';
import './Shopping.css';

// Sample content for shopping (this can later come from a separate file or API)
const shoppingPlaces = [
  {
    name: "Gurney Plaza",
    image: "src/assets/spas/gurneyplaza.png",
    description: "It is Penang’s premier lifestyle shopping mall and a one-stop shopping and entertainment destination catering to both families and tourists arriving in Gurney Drive, Penang.",
    address: "170, Gurney Dr, Pulau Tikus, 10250 George Town, Penang, Malaysia",
  },
  {
    name: "Queensbay Mall",
    image: "src/assets/spas/queensbay.png",
    description: "It is currently the largest, longest and most modern shopping mall in Penang. Located in the heart of Bayan Lepas, it is the most preferred shopping destination for both the locals and tourists.",
    address: "100, Persiaran Bayan Indah, 11900 Bayan Lepas, Pulau Pinang, Malaysia",
  },
  {
    name: "1st Avenue Mall",
    image: "src/assets/spas/avenuemall.png",
    description: "A stylish city mall located in the heart of Georgetown for urbanites and young executives, with trendy high-street fashion, dining, and entertainment.",
    address: "182, Jalan Magazine, 10300 George Town, Penang, Malaysia",
  },
  {
    name: "Penang Night Markets",
    image: "src/assets/spas/nightmarket.png",
    description: "Night markets in Penang are known for their lively atmosphere that truly depicts Malaysian culture, while offering local crafts, souvenirs, and delicious street food.",
    address: "Penang, Malaysia",
  },
  {
    name: "Rock Spa @ Hard Rock Penang",
    image: "src/assets/spas/rockspa.png",
    description: "Rock Spa offers a diverse selection of spa treatments with a full host of amenities, you will be amazed by a “spa-tastic” experience that fit the Rock Star in you and for the lil’ rockers’ too!",
    address: "Batu Ferringhi Beach, 11100 Penang, Malaysia",
  },
  {
    name: "Chi, The Spa @ Shangri-La Rasa Sayang",
    image: "src/assets/spas/chispa.png",
    description: "The Spa is equipped with a private changing room, a treatment room and a private garden. The spa menu includes an assortment of healing and relaxing Chinese and Malay treatments.",
    address: "Batu Ferringhi Beach, 11100 Penang, Malaysia",
  },
  {
    name: "Tower Spa @ The TOP Komtar",
    image: "src/assets/spas/towerspa.png",
    description: "Tower Spa is a whole new world designed for you to escape from the busy city lifestyle and enjoy some quiet me time, or even for a short “honeymoon” with your loved ones.",
    address: "1, Jalan Penang, George Town, 10000 George Town, Pulau Pinang, Malaysia",
  },
  {
    name: "Penaga Spa @ Hotel Penaga Penang",
    image: "src/assets/spas/penagaspa.png",
    description: "One of the best spa in Penang, offering an unmatched healing experience. The spa's treatments, infused with the essence of the penaga tree, create a serene haven for holistic relaxation and inner balance.",
    address: "Corner of Jalan Hutton & Lebuh Clarke, George Town, Penang, Malaysia",
  },
];

const ShoppingCard = ({ name, image, description, onClick }) => (
  <div className="shopping-card" onClick={onClick}>
    <img src={image} alt={name} className="shopping-image" />
    <h3 className="shopping-name">{name}</h3>
    <p className="shopping-description">{description}</p>
  </div>
);

const ShoppingModal = ({ place, onClose }) => {
  if (!place) return null;

  return (
    <div className="shopping-modal-overlay" onClick={onClose}>
      <div className="shopping-modal" onClick={(e) => e.stopPropagation()}>
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

const Shopping = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="shopping-container">
      <h2 className="section-title">Shopping & Spas</h2>
      <div className="shopping-list">
        {shoppingPlaces.map((place) => (
          <ShoppingCard
            key={place.name}
            {...place}
            onClick={() => setSelectedPlace(place)}
          />
        ))}
      </div>
      <ShoppingModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
};

export default Shopping;
