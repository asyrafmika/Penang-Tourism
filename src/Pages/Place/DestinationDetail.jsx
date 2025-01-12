import React from "react";
import "./DestinationDetail.css";


const DestinationDetail = ({ destination, onBack }) => {
    return (
        <div className="des-detail-page">
            <div className="des-detail-container">
                {/* Header Section */}
                <div className="des-detail-header">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="des-detail-image"
                        />
                    <div className="des-detail-content">
                        <h1 className="des-detail-title">{destination.name}</h1>
                        <p className="des-detail-story">{destination.story}</p>
                    </div>
                </div>

                {/* Additional Information Section */}
                {destination.additionalInfo && (
                    <div className="des-additional-info">
                        <h2 className="des-additional-info-title">For more info:</h2>
                        {destination.additionalInfo.map((info, index) => (
                            <p key={index} className="des-additional-info-item">
                                {info}
                            </p>
                        ))}
                    </div>
                )}

                {/* Gallery Section */}
                {destination.extraImages && (
                    <div className="des-gallery">
                        {destination.extraImages.map((image, index) => (
                            <div key={index} className="des-gallery-item">
                                <img src={image} alt={`Gallery ${index}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Back Button */}
            <button className="des-back-button" onClick={onBack}>
                Back To The list
            </button>
        </div>
    );
};

export default DestinationDetail;
