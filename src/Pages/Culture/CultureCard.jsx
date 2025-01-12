import React from "react";
import "./CultureCard.css";

const CultureCard = ({ culture, onClick }) => {
    return (
        <div className="cul-card" onClick={onClick}>
            <div className="cul-card-image-container">
                <img src={culture.image} alt={culture.name} className="cul-card-image" />
                <div className="cul-card-overlay">
                    <h3 className="cul-card-title">{culture.name}</h3>
                </div>
            </div>
            <div className="cul-card-content">
                <p className="cul-card-description">{culture.description}</p>
            </div>
        </div>
    );
};

export default CultureCard;

