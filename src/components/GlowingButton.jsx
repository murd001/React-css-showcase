import React from 'react';
import './GlowingButton.css';

const GlowingButton = () => {
  return (
    <button className="glowing-btn">
      <span className="glowing-txt">C<span className="faulty-letter">L</span>ICK ME</span>
    </button>
  );
};

export default GlowingButton;