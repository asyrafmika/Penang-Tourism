import React from 'react';
import './About.css';
import imageIcon from '../../assets/about.jpg';
import playIcon from '../../assets/play-icon.png';
import { Link } from 'react-router-dom';

const About = ({ setPlayState }) => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <figure className="about-image-container">
          <img src={imageIcon} alt="Penang scenic view" className="about-img" />
          <button
            className="play-button"
            aria-label="Play video"
            onClick={() => setPlayState(true)}
          >
            <img src={playIcon} alt="Play icon" className="play-icon" />
          </button>
        </figure>
      </div>
      <div className="about-right">
        <h2>About Penang</h2>
        <p>
          Penang, a vibrant Malaysian state, is renowned for its stunning blend
          of history, culture, and natural beauty. Often referred to as the
          Pearl of the Orient, Penang offers something for everyone.
        </p>
        <p>
          Explore George Town, a UNESCO World Heritage Site, with its colorful
          street art, colonial architecture, and bustling markets. Dive into
          the island’s rich history while strolling through its lively streets.
        </p>
        <p>
          For nature lovers, Penang boasts serene beaches, lush forests, and
          scenic hills. Don't forget to savor the world-famous street food,
          from char kway teow to Penang laksa, making it a true paradise for
          foodies!
        </p>
        <Link to="/about" className="button-more">
          Read more
        </Link>
      </div>
    </section>
  );
};

export default About;
