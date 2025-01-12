import React from "react";
import "./DestinationCard.css";

const DestinationCard = ({ destination, onClick }) => {
    return (
        <div className="des-card" onClick={onClick}>
            <div className="des-card-image-container">
                <img src={destination.image} alt={destination.name} className="des-card-image" />
                <div className="des-card-overlay">
                    <h3 className="des-card-title">{destination.name}</h3>
                </div>
            </div>
            <div className="des-card-content">
                <p className="des-card-description">{destination.description}</p>
            </div>
        </div>
    );
};

export default DestinationCard;

