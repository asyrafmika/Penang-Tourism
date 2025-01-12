import React from 'react';
import './GalleryPages.css';
import chew from '../../assets/jetty.jpg';
import dam from '../../assets/dam.jpg';
import tropi from '../../assets/tropical.jpg';
import lee from '../../assets/leejetty.jpg';
import bom from '../../assets/bombast.webp';
import scene from '../../assets/scenic.webp';
import beach from '../../assets/beach-pen.webp';
import masjid from '../../assets/masjid.jpg';
import lighthouse from '../../assets/lighthouse.jpg';
import park from '../../assets/national.jpg';
import funny from '../../assets/funny.jpg';

const GalleryPages = () => {
    const photoSpots = [
        {
            title: "Chew Jetty",
            description: "One of the six main Clan jetties in Georgetown, known for its vibrant street art and colorful stall fronts.",
            image: chew,
        },
        {
            title: "Lee Jetty",
            description: "Famous for its unique arches that light up at night, perfect for long exposure photography.",
            image: lee,
        },
        {
            title: "Bomba Street Art",
            description: "A street dedicated to Malaysian rescue services, adorned with colorful lanterns and murals.",
            image: bom,
        },
        {
            title: "Tropical Spice Garden",
            description: "Relaxing yourself in the nature.",
            image: tropi,
        },
        {
            title: "Teluk Bahang Dam",
            description: "Teluk Bahang Dam offers breathtaking views of the surrounding hills and tranquil waters. It's a serene spot perfect for capturing stunning sunsets and enjoying a peaceful retreat amidst nature.",
            image: dam,
        },
        {
            title: "Penang Beach",
            description: "A relaxing spot with crystal-clear waters and fine sandy beaches, perfect for unwinding and capturing beautiful sunrise shots.",
            image: beach,
        },
        {
            title: "Masjid Negeri",
            description: "The state mosque of Penang, known for its stunning architecture and tranquil atmosphere.",
            image: masjid,
        },
        {
            title: "Penang Lighthouse",
            description: "A scenic viewpoint with a historic lighthouse, offering picturesque views of the coastline.",
            image: lighthouse,
        },
        {
            title: "Penang National Park",
            description: "A rich biodiversity park with lush greenery, hiking trails, and scenic beaches.",
            image: park,
        },
        {
          title: "Street Murals of Georgetown",
          description: "A vibrant collection of street art scattered across the streets of Georgetown, showcasing the rich cultural heritage and creativity of the city.",
          image: funny,
      }  
    ];

    return (
        <div className="places-container">
            <section className="gallery-hero">
                <div className="gallery-hero-content">
                    <h1>Best Photography Spots in Penang</h1>
                    <p>Explore the most picturesque locations to capture stunning photos.</p>
                </div>
                <div className="gallery-hero-image">
                    <img src={scene} alt="Scenic view of Penang" />
                </div>
            </section>

            <section className="gallery-page">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {photoSpots.map((spot, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={spot.image} alt={spot.title} />
                            <div className="gallery-caption">
                                <strong>{spot.title}</strong>: {spot.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GalleryPages;
