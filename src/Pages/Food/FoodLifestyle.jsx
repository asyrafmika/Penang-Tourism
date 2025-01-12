// Import React and necessary components
import React, { useState } from 'react';
import Restaurants from './Restaurants';
import Shopping from './Shopping';
import Entertainment from './Entertainment';
import './FoodLifestyle.css'; // Assuming you have a CSS file for styling

const FoodLifestyle = () => {
  const [activeTab, setActiveTab] = useState('restaurants');

  const renderContent = () => {
    if (activeTab === 'restaurants') return <Restaurants />;
    if (activeTab === 'shopping') return <Shopping />;
    if (activeTab === 'entertainment') return <Entertainment />;
  };

  return (
    <div className="food-lifestyle-container">
      <h2 className="section-title">Foods & Lifestyles</h2>
      <div className="tabs">
        <button
          className={activeTab === 'restaurants' ? 'active' : ''}
          onClick={() => setActiveTab('restaurants')}
        >
          Restaurants & Cafes
        </button>
        <button
          className={activeTab === 'shopping' ? 'active' : ''}
          onClick={() => setActiveTab('shopping')}
        >
          Shopping & Spas
        </button>
        <button
          className={activeTab === 'entertainment' ? 'active' : ''}
          onClick={() => setActiveTab('entertainment')}
        >
          Entertainments & Events
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default FoodLifestyle;
