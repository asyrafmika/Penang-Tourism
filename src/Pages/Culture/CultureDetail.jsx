import React, { useState } from "react";
import "./CultureDetail.css";

const CultureDetail = ({ culture, onBack }) => {
    const [popupImage, setPopupImage] = useState(null);

    const handleImageClick = (image) => {
        setPopupImage(image);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="cul-detail-page">
            <div className="cul-detail-container">
                {/* Header Section */}
                <div className="cul-detail-header">
                    <img
                        src={culture.image}
                        alt={culture.name}
                        className="cul-detail-image"
                        onClick={() => handleImageClick({ src: culture.image, name: culture.name })}
                    />
                    <div className="cul-detail-content">
                        <h1 className="cul-detail-title">{culture.name}</h1>
                        <p className="cul-detail-story">{culture.story}</p>
                    </div>
                </div>

                {/* Additional Information Section */}
                {culture.additionalInfo && (
                    <div className="cul-additional-info">
                        <h2 className="cul-additional-info-title">More About {culture.name}</h2>
                        {culture.additionalInfo.map((info, index) => (
                            <p key={index} className="cul-additional-info-item">
                                {info}
                            </p>
                        ))}
                    </div>
                )}

                {/* Gallery Section */}
                {culture.extraImages && (
                    <div className="cul-gallery">
                        {culture.extraImages.map((image, index) => (
                            <div
                                key={index}
                                className="cul-gallery-item"
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    className="cul-gallery-image"
                                />
                                <p className="cul-image-caption">{image.name}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Popup */}
                {popupImage && (
                    <div className="cul-popup-overlay" onClick={closePopup}>
                        <div className="cul-popup-container">
                            <img
                                src={popupImage.src}
                                alt={popupImage.name}
                                className="cul-popup-image"
                            />
                            <p className="cul-popup-caption">{popupImage.name}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Back Button */}
            <button className="cul-back-button" onClick={onBack}>
                Back to the list
            </button>
        </div>
    );
};

export default CultureDetail;
