import React, { useState, useEffect } from 'react';
import './Gallery.css';
import multi from '../../assets/multi_photo.png';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0); 

 
  const passages = [
    "Our gallery showcases the rich cultural heritage of the region, from stunning landscapes to vibrant street scenes.",
    "Explore iconic landmarks and hidden gems through our carefully curated collection of photographs.",
    "Discover the stories behind each image, capturing the spirit and soul of the local community.",
    "Get inspired by the natural beauty and unique attractions highlighted in our gallery.",
    "Every image tells a story – immerse yourself in the artistry and history of our collection."
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPassageIndex((prevIndex) => (prevIndex + 1) % passages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [passages.length]);

  return (
    <section className="gallery" id="gallery">
      <div className="content-gal">

        <div className="text">
          <h2>Explore Our Gallery</h2>
          <p>
            Discover stunning images from our collection that showcase breathtaking landscapes, vibrant cultures, and the spirit of adventure. From historical landmarks to serene natural wonders, each photograph captures the essence of our diverse heritage. Let the gallery take you on a visual journey, offering a glimpse into the beauty and charm of unforgettable destinations.
          </p>
          <Link to="/gallery" className="button-gal" aria-label="View gallery">
            See More
          </Link>
        </div>

        <div className="photo" data-testid="photo">
          <img
            src={multi}
            alt="Gallery preview showcasing multiple photos"
            className="gallery-img"
            loading="lazy"
          />
        </div>
      </div>

      <div className="passages">
        <p>{passages[currentPassageIndex]}</p>
      </div>
    </section>
  );
};

export default Gallery;
