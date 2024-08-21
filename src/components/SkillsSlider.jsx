import React from 'react';
import './SkillsSlider.css';

const SkillsSlider = () => {
  const skills = [
    'Digital Marketing',
    'Data Cleaning',
    'Data Analytics',
    'Teamwork',
    'Python',
    'React.js',
    'CSS',
    'MQL5',
    'Research Skills',
    'Organization'
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360;
          const radius = 550; // Adjust this value to change the size of the circular path
          return (
            <div
              key={index}
              className="item"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSlider;