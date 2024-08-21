import React, { useState, useEffect, useRef } from 'react';
import './CheckBox.css';

const CheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (checkboxRef.current) {
      const length = checkboxRef.current.getTotalLength();
      checkboxRef.current.style.strokeDasharray = length;
      checkboxRef.current.style.strokeDashoffset = length;
    }
  }, []);

  return (
    <label className="elite-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <svg className={`checkbox-svg ${isChecked ? 'checked' : ''}`} viewBox="0 0 100 100">
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <circle className="checkbox-bg" cx="50" cy="50" r="45" />
        <path
          ref={checkboxRef}
          className="checkbox-check"
          d="M30 50 L 45 65 L 70 33"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path className="sparkle" d="M20,20 L30,20 L25,10 Z" />
        <path className="sparkle" d="M80,20 L90,20 L85,10 Z" />
        <path className="sparkle" d="M20,80 L30,80 L25,90 Z" />
        <path className="sparkle" d="M80,80 L90,80 L85,90 Z" />
      </svg>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default CheckBox;