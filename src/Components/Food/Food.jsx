import React from 'react';
import './Food.css';
import img1 from '../../assets/Laksa.png';
import img2 from '../../assets/Mee.png';
import img3 from '../../assets/Kway.png';
import img4 from '../../assets/Cendol.jpg';
import img5 from '../../assets/lifestyle.jpg';
import img6 from '../../assets/nasi.jpg';
import { Link } from 'react-router-dom';

const Food = () => {
  return (
    <div className="food">
      <h1 className="food-title">Discover Penang's Culinary Wonders & Vibrant Lifestyles</h1>
      <div className="photo-f">
        <img src={img1} alt="Penang Laksa" title="Penang Laksa" />
        <img src={img2} alt="Hokkien Mee" title="Hokkien Mee" />
        <img src={img3} alt="Char Kway Teow" title="Char Kway Teow" />
        <img src={img4} alt="Cendol" title="Cendol" />
        <img src={img6} alt="Nasi Kandar" title="Nasi Kandar" />
      </div>

      <div className="hero-photo">
        <div className="text-content">
          <h2>Craving a Flavorful Life?</h2>
          <p>
          Penang, celebrated as the food capital of Malaysia, offers more than just a culinary experience — 
          it’s a lifestyle. From the iconic char kway teow and laksa to the irresistible nasi kandar and Hokkien mee, 
          Penang’s vibrant food scene reflects its rich cultural tapestry. Cool down with signature desserts like cendol 
          and ais kacang, perfect for the tropical climate. Beyond the bustling hawker stalls and heritage cafes, 
          the lively atmosphere and community spirit make every meal a celebration of life. Are you ready to savor the Penang lifestyle?
          </p>
        </div>
        <img src={img5} alt="Lifestyle" title="Penang's Lifestyle" className="hero-img" />
      </div>
      <Link to='/food' className="button-f">Explore More</Link>
    </div>
  );
};

export default Food;
