import React from 'react';
import Card from './Card';
import './Cards.css';

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';
import card7 from '../assets/card7.jpg';
import card8 from '../assets/card8.jpg';
import card9 from '../assets/card9.jpg';
import card10 from '../assets/card10.jpg';

function Cards() {
  const cardImages = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

  return (
    <div className="card-fan">
      {cardImages.map((img, index) => (
        <Card key={index} img={img} index={index} />
      ))}
    </div>
  );
}

export default Cards;