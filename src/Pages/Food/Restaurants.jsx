// Import React and necessary assets
import React, { useState } from 'react';
import './Restaurants.css';
import lineclear from "../../assets/cafes/lineclear.png";
import chinahouse from "../../assets/cafes/chinahouse.png";
import mugshot from "../../assets/cafes/mugshot.png";
import myown from "../../assets/cafes/myown.png";
import david from "../../assets/cafes/david.png";
import manaf from "../../assets/cafes/manaf.png";
import irama from "../../assets/cafes/irama.png";
import kebaya from "../../assets/cafes/kebaya.png";

// Sample content for restaurants (this can later come from a separate file or API)
const restaurantsPlaces = [
  {
    name: "Nasi Kandar Line Clear",
    image: lineclear,
    description: "One of the most famous and legendary Nasi Kandar seller in Penang. Line Clear is located inside an alleyway/lorong along Penang Road and they operates 24 hours a day.",
    address: "177 Jalan Penang, Lebuh Campbell 10000, George Town, Penang Island Malaysia",
  },
  {
    name: "China House",
    image: chinahouse,
    description: "A venue spanning three heritage buildings with a courtyard between them featuring a swimming pool. There are cafes, shops and a performance space, as well as an array of eating and drinking options.",
    address: "153-155 Lebuh Pantai and 183B, George Town, Penang Island 10300 Malaysia",
  },
  {
    name: "The Mugshot Cafe",
    image: mugshot,
    description: "A modern café with old school charm in Chulia Street, Georgetown is one of the cafes for breakfast mainly for their famous signature wood-fired bagels, delectable pastries and quality of coffee.",
    address: "302 Chulia Street, George Town, Penang Island 10200 Malaysia",
  },
  {
    name: "My Own Cafe",
    image: myown,
    description: "This charming family-run shop serves Penang asam laksa, Nyonya laksa and fried spring rolls. The light and refreshing red soup of the signature asam laksa strikes the right balance of sour and spicy.",
    address: "9A Lorong Abu Siti, George Town, Penang Island 10400 Malaysia",
  },
  {
    name: "David Brown’s Restaurant",
    image: david,
    description: "David Brown’s at Strawberry Hill is a quintessential British colonial restaurant and tea terrace which also happens to be the highest restaurant in Penang.",
    address: "Strawberry Hill, Penang Hill, George Town, Penang Island 11300 Malaysia",
  },
  {
    name: "Manaf Nasi Ayam",
    image: manaf,
    description: "These family-run restaurants are dotted all over Penang and they’re often the tastiest and cheapest places to dine. But the most famous one is directly over the beach with the waves crashing close by.",
    address: "Jalan Hassan Abas, Tanjung Bungah, George Town, Penang Island Malaysia",
  },
  {
    name: "Irama Dining",
    image: irama,
    description: "Set in a charming heritage building in George Town, this restaurant offers a wide array of classic Malay dishes we all know and adore, served in a modern setting with a breathtaking rooftop view.",
    address: "1st Floor, 58 Jalan Sultan Ahmad Shah, George Town, Penang Island 10050 Malaysia",
  },
  {
    name: "Kebaya Dining Room",
    image: kebaya,
    description: "Kebaya Dining Room is a fine-dining restaurant in Seven Terraces Hotel that serves exquisite Peranakan cuisine. The restaurant itself is a beautifully restored old Chinese mansion.",
    address: "Stewart Lane, George Town, Penang Island 10200 Malaysia",
  },
];

const RestaurantCard = ({ name, image, description, onClick }) => (
  <div className="restaurant-card" onClick={onClick}>
    <img src={image} alt={name} className="restaurant-image" />
    <h3 className="restaurant-name">{name}</h3>
    <p className="restaurant-description">{description}</p>
  </div>
);

const RestaurantModal = ({ place, onClose }) => {
  if (!place) return null;

  return (
    <div className="restaurant-modal-overlay" onClick={onClose}>
      <div className="restaurant-modal" onClick={(e) => e.stopPropagation()}>
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

const Restaurants = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="restaurant-container">
      <h2 className="section-title">Restaurants & Cafes </h2>
      <div className="restaurant-list">
        {restaurantsPlaces.map((place) => (
          <RestaurantCard
            key={place.name}
            {...place}
            onClick={() => setSelectedPlace(place)}
          />
        ))}
      </div>
      <RestaurantModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
};

export default Restaurants;
