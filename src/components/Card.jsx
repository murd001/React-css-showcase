import React, { useState } from 'react';
import './Cards.css';

function Card({img, index}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div 
      className={`card ${isActive ? 'active' : ''}`} 
      onClick={handleClick}
      style={{
        zIndex: isActive ? 10 : 'auto'
      }}
    >
      <div className="card-face">
        <img src={img} alt="Card" />
      </div>
    </div>
  );
}

export default Card;