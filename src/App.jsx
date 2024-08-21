import React, { useState } from 'react';
import Footer from './components/Footer';
import HoverCard from './components/HoverCard';
import LoadingSpinner from './components/LoadingSpinnerOne';
import LoadingSpinnerTwo from './components/LoadingSpinnerTwo';
import GlowingButton from './components/GlowingButton';
import Title from './components/Title';
import ToggleMenu from './components/ToggleMenu';
import CheckBox from './components/CheckBox';
import Cards from './components/Cards';
import SpaceEffect from './components/SpaceEffect';
import SkillsSlider from './components/SkillsSlider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
  const [showCode, setShowCode] = useState({
    glowingButton: false,
    hoverCard: false,
    loadingSpinner: false,
	loadingSpinnerTwo: false,
    title: false,
	ToggleMenu: false,
	CheckBox: false,
	Cards: false,
	SpaceEffect: false,
	SkillsSlider: false,
  });

  const toggleCodeVisibility = (section) => {
    setShowCode((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const CodeBlock = ({ isVisible, code }) => (
    <pre className={isVisible ? '' : 'hidden'}>
      <code>{code}</code>
    </pre>
  );
  
  const isAnyCodeVisible = Object.values(showCode).some(value => value);

  return (
    <div className={`app ${isAnyCodeVisible ? 'code-visible' : ''}`}>
      <div className = "wavyTitle">
        <Title />
        <div className="eye-icon" onClick={() => toggleCodeVisibility('title')}>
          {showCode.title ? <FaEyeSlash /> : <FaEye />}
        </div>
        <CodeBlock
          isVisible={showCode.title}
          code={`
// Title.jsx
import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="text text-R">R</div>
        <div className="text text-e">e</div>
        <div className="text text-a">a</div>
        <div className="text text-c">c</div>
        <div className="text text-t">t</div>
        <div className="text text-space"> </div>
        <div className="text text-C">C</div>
        <div className="text text-S">S</div>
        <div className="text text-S2">S</div>
        <div className="text text-space"> </div>
        <div className="text text-S3">S</div>
        <div className="text text-h">h</div>
        <div className="text text-o">o</div>
        <div className="text text-w">w</div>
        <div className="text text-c2">c</div>
        <div className="text text-a2">a</div>
        <div className="text text-s">s</div>
        <div className="text text-e2">e</div>
      </div>
      <div className="explanation">
        <p>Press the <span className="eye-icon">Eye</span> icon to view the code for each section.</p>
      </div>
    </div>
  );
};

export default Title;

// Title.css
.container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  height: 17vh;
}

.text-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2px;
}

.text {
  color: #2c3e50;
  font-size: 4rem;
  font-weight: 900;
  display: inline-block;
  position: relative;
  animation: wave 2s ease-in-out infinite;
}

.text-space {
  width: 1rem;
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.text-R { background-color: #FF9AA2; animation-delay: 0s; }
.text-e { background-color: #FFB7B2; animation-delay: 0.1s; }
.text-a { background-color: #FFDAC1; animation-delay: 0.2s; }
.text-c { background-color: #E2F0CB; animation-delay: 0.3s; }
.text-t { background-color: #B5EAD7; animation-delay: 0.4s; }
.text-C { background-color: #C7CEEA; animation-delay: 0.5s; }
.text-S { background-color: #9DD6DF; animation-delay: 0.6s; }
.text-S2 { background-color: #81C6E8; animation-delay: 0.7s; }
.text-S3 { background-color: #5AB7B2; animation-delay: 0.8s; }
.text-h { background-color: #8FC0A9; animation-delay: 0.9s; }
.text-o { background-color: #C8D5B9; animation-delay: 1s; }
.text-w { background-color: #FAF3DD; animation-delay: 1.1s; }
.text-c2 { background-color: #FFA8B5; animation-delay: 1.2s; }
.text-a2 { background-color: #FFD3B5; animation-delay: 1.3s; }
.text-s { background-color: #D5EEFF; animation-delay: 1.4s; }
.text-e2 { background-color: #A8E6CF; animation-delay: 1.5s; }

.explanation {
  font-size: 1rem;
  color: #2c3e50;
  margin-left: 29px;
}

.eye-icon {
  font-size: 1.2rem;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .text {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .text {
    font-size: 2rem;
  }
}
          `}
        />
      </div>
	  <section class = "Cardsone">
		<h2>Responsive Cards</h2>
		<h3>(Click on the cards)</h3>
		<Cards />
		<div className="eye-icon" onClick={() => toggleCodeVisibility('Cards')}>
			{showCode.Cards ? <FaEyeSlash /> : <FaEye />}
		  </div>
		  <CodeBlock
			isVisible={showCode.Cards}
			code={`
// Cards.jsx
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

//Card.jsx
import React from 'react';
import './Cards.css';

function Card({img}) {
  return (
    <div className="card">
      <div className="card-face">
        <img src={img} alt="Card" />
      </div>
    </div>
  );
}

export default Card;

// Cards.css
.card-fan {
  position: relative;
  width: 760px; 
  height: 300px; 
  margin: 50px auto;
  perspective: 1000px;
  margin-left: 180px;
}

.card {
  position: absolute;
  width: 180px; 
  height: 260px; 
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  transition: transform 0.3s ease-out;
  transform-origin: bottom left; 
  border: 1px solid #333; 
  overflow: hidden;
  cursor: pointer; 
}

.card-face {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:nth-child(1) { transform: translateX(20px) rotate(-90deg); }
.card:nth-child(2) { transform: translateX(60px) rotate(-72deg); }
.card:nth-child(3) { transform: translateX(140px) rotate(-54deg); }
.card:nth-child(4) { transform: translateX(220px) rotate(-36deg); }
.card:nth-child(5) { transform: translateX(300px) rotate(-18deg); }
.card:nth-child(6) { transform: translateX(380px); }
.card:nth-child(7) { transform: translateX(480px) translateY(70px);}
.card:nth-child(8) { transform: translateX(560px) translateY(-70px); }
.card:nth-child(9) { transform: translateX(650px) translateY(70px); }
.card:nth-child(10) { transform:translateX(760px); }

.card.active {
  transform: translateY(10px) scale(1.5) !important;
  z-index: 10;
}
@media (max-width: 768px){
	.card{
		width: 90px;
		height: 130px;
	}
	.card-fan{
		transform: translateX(-87px);
		width: 100px;
	}
	.card:nth-child(4) { transform: translateX(130px); }
	.card:nth-child(5) {transform: translateX(-100px) translateY(140px);}
	.card:nth-child(6) {transform: translateX(-60px) translateY(190px);}
	.card:nth-child(7) {transform: translateX(10px) translateY(140px);}
	.card:nth-child(8) {transform: translateX(50px) translateY(190px);}
	.card:nth-child(9) {transform: translateX(110px) translateY(140px);}
	.card:nth-child(10) {transform: rotate(270deg) translateY(220px) translateX(-190px);}
}
			`}
		  />
	  </section>
      <div className="grid-container">
        <section className = "glowingButtoninAppj" >
          <h2>Glowing Button</h2>
          <GlowingButton />
          <div className="eye-icon" onClick={() => toggleCodeVisibility('glowingButton')}>
            {showCode.glowingButton ? <FaEyeSlash /> : <FaEye />}
          </div>
          <CodeBlock
            isVisible={showCode.glowingButton}
            code={`
// GlowingButton.jsx
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

// GlowingButton.css
.glowing-btn {
  position: relative;
  color: var(--glow-color);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 0.15em solid var(--glow-color);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 1em;
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;
}

.glowing-txt {
  float: left;
  margin-right: -0.8em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  animation: text-flicker 3s linear infinite;
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 2s linear infinite;
}

/* ... (rest of the CSS animations) ... */

:root {
  --glow-color: hsl(186 100% 69%);
}
            `}
          />
        </section>
		<section className="MagicMenu">
		  <h2>Magic Indicator Menu</h2>
		  <ToggleMenu />
		  <div className="eye-icon" onClick={() => toggleCodeVisibility('ToggleMenu')}>
			{showCode.ToggleMenu ? <FaEyeSlash /> : <FaEye />}
		  </div>
		  <CodeBlock
			isVisible={showCode.ToggleMenu}
			code={`
// ToggleMenu.jsx

import React, { useState } from 'react';
import { FaPlus, FaTimes, FaHome, FaUser, FaCog, FaInfoCircle } from 'react-icons/fa'; 
import './ToggleMenu.css';

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
	<div className="menu">
	  {!isOpen && (
		<button className="menu-toggle" onClick={() => setIsOpen(true)}>
		  <FaPlus />
		</button>
	  )}
	  <nav style={{ transform: \`scale(\${isOpen ? 1 : 0})\` }}>
		<ul>
		  <li><a href="#"><FaHome /></a></li>
		  <li><a href="#"><FaUser /></a></li>
		  <li><a href="#"><FaCog /></a></li>
		  <li><a href="#"><FaInfoCircle /></a></li>
		  <li><button className="menu-close" onClick={() => setIsOpen(false)}><FaTimes /></button></li>
		</ul>
	  </nav>
	</div>
  );
};

export default ToggleMenu;

// ToggleMenu.css

.menu {
  position: relative;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.menu nav {
  transition: transform 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu nav ul li a {
  color: #04123b;
  font-size: 2rem;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.menu nav ul li a:hover {
  color: #4CAF50;
}

.menu-toggle, .menu-close {
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  color: #04123b;
  cursor: pointer;
}

.menu-toggle:hover {
  color: #4CAF50;
  text-shadow: 0 0 15px #4CAF50, 0 0 30px #4CAF50;
}

.menu-toggle.active {
  display: block;
}

.menu-toggle {
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  color: #04123b;
  cursor: pointer;
  position: relative;
  animation: floating 3s ease-in-out infinite;
  transform: rotate(0);
  transition: transform 0.5s, color 0.3s, text-shadow 0.3s;
}

.menu-toggle:not(.active) {
  transform: rotate(45deg);
}

.menu-toggle:hover {
  color: #4CAF50;
  text-shadow: 0 0 15px #4CAF50, 0 0 30px #4CAF50, 0 0 45px #4CAF50;
}

@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
			`}
		  />
		</section>
        <section>
          <h2>Hover Card</h2>
          <HoverCard />
          <div className="eye-icon" onClick={() => toggleCodeVisibility('hoverCard')}>
            {showCode.hoverCard ? <FaEyeSlash /> : <FaEye />}
          </div>
          <CodeBlock
            isVisible={showCode.hoverCard}
            code={`
// HoverCard.jsx
import React from 'react';
import './HoverCard.css';

const HoverCard = () => {
  return (
    <div className="card">
      <h2>Hover Card</h2>
      <p>Hover over me to see the effect!</p>
    </div>
  );
};

export default HoverCard;

// HoverCard.css
.card {
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: white;
  text-align: center;
}

.card:hover {
  transform: translateY(-10px) rotateX(10deg);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}
            `}
          />
        </section>

        <section>
          <h2>Loading Spinner</h2>
          <LoadingSpinner />
          <div className="eye-icon" onClick={() => toggleCodeVisibility('loadingSpinner')}>
            {showCode.loadingSpinner ? <FaEyeSlash /> : <FaEye />}
          </div>
          <CodeBlock
            isVisible={showCode.loadingSpinner}
            code={`
// LoadingSpinner.jsx
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;

// LoadingSpinner.css
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #ffffff;
  background-size: 600% 600%;
  animation: gradientBG 10s ease infinite;
  border-radius: 10px;
}

.spinner {
  width: 60px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.8);
  border-top: 3px solid #000000; 
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
            `}
          />
        </section>
		<section class = "LoadingTwo">
          <h2>Loading Spinner</h2>
          <LoadingSpinnerTwo />
          <div className="eye-icon" onClick={() => toggleCodeVisibility('LoadingSpinnerTwo')}>
            {showCode.LoadingSpinnerTwo ? <FaEyeSlash /> : <FaEye />}
          </div>
          <CodeBlock
            isVisible={showCode.LoadingSpinnerTwo}
            code={`
// LoadingSpinnerTwo.jsx
import React from 'react';
import './LoadingSpinnerTwo.css';

const LoadingSpinnerTwo = () => {
  return (
    <div className="spinner-container2">
      <div className="spinner2"></div>
    </div>
  );
};

export default LoadingSpinnerTwo;

// LoadingSpinnerTwo.css
.spinner-container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-size: 600% 600%;
  animation: gradientBG 10s ease infinite;
  border-radius: 10px;
}

.spinner2 {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
            `}
          />
        </section>
		<section className="CheckBoxOne">
		  <h2>Animated CheckBox</h2>
		  <CheckBox label="Accept terms and conditions" />
		  <div className="eye-icon" onClick={() => toggleCodeVisibility('CheckBox')}>
			{showCode.CheckBox ? <FaEyeSlash /> : <FaEye />}
		  </div>
		  <CodeBlock
			isVisible={showCode.CheckBox}
			code={`
// CheckBox.jsx
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
	<svg className={\`checkbox-svg \${isChecked ? 'checked' : ''}\`} viewBox="0 0 100 100">
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

// CheckBox.css
.elite-checkbox {
display: inline-flex;
align-items: center;
cursor: pointer;
font-family: 'Arial', sans-serif;
}

.elite-checkbox input {
position: absolute;
opacity: 0;
}

.checkbox-svg {
width: 40px;
height: 40px;
margin-right: 10px;
transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.checkbox-svg.checked {
transform: scale(1.1) rotate(5deg);
}

.checkbox-bg {
fill: none;
stroke: #6b7280;
stroke-width: 5;
transition: all 0.6s ease;
}

.checkbox-svg.checked .checkbox-bg {
stroke: #4c1d95;
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
animation: dash 1s ease-out forwards;
}

.checkbox-check {
fill: none;
stroke: #10b981;
stroke-width: 8;
filter: url(#glow);
opacity: 0;
transition: all 0.6s ease;
}

.checkbox-svg.checked .checkbox-check {
opacity: 1;
animation: draw 0.6s ease forwards 0.2s;
}

.sparkle {
fill: #fbbf24;
opacity: 0;
}

.checkbox-svg.checked .sparkle {
animation: sparkle 0.8s ease-out forwards;
}

.checkbox-label {
font-size: 18px;
color: #374151;
transition: all 0.3s ease;
}

.elite-checkbox:hover .checkbox-label {
color: #4c1d95;
}

@keyframes dash {
to {
  stroke-dashoffset: 0;
}
}

@keyframes draw {
0% {
  stroke-dashoffset: 100;
}
100% {
  stroke-dashoffset: 0;
}
}

@keyframes sparkle {
0% {
  opacity: 0;
  transform: scale(0) rotate(0deg);
}
50% {
  opacity: 1;
  transform: scale(1) rotate(180deg);
}
100% {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}
}
			`}
		  />
		</section>
		<section className="space">
			<h2>Mouse Move Effect</h2>
			<h3>(Effect reflects cursor movements in the entire page)</h3>
			<SpaceEffect />
			<div className="eye-icon" onClick={() => toggleCodeVisibility('SpaceEffect')}>
			{showCode.SpaceEffect ? <FaEyeSlash /> : <FaEye />}
		  </div>
		  <CodeBlock
			isVisible={showCode.SpaceEffect}
			code={`
// SpaceEffect.jsx
import React, { useEffect, useRef, useState } from 'react';
import './SpaceEffect.css';

const SpaceEffect = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGlowingEffect(ctx, mousePosition.x, mousePosition.y);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  const drawGlowingEffect = (ctx, x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // Increase the number of lines for a denser effect
    for (let i = 0; i < 25; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Increase the length range for longer tendrils
      const length = Math.random() * 300 + 100;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      const cp1x = x + Math.cos(angle) * length * 0.3;
      const cp1y = y + Math.sin(angle) * length * 0.3;
      const cp2x = endX - Math.cos(angle) * length * 0.3;
      const cp2y = endY - Math.sin(angle) * length * 0.3;
      
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    }

    
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
    gradient.addColorStop(0, 'rgba(0, 191, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');

    ctx.strokeStyle = gradient;
    
    ctx.lineWidth = 5;
    
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'rgba(0, 191, 255, 0.5)';
    ctx.stroke();
  };

  return <canvas ref={canvasRef} className="space-effect" />;
};

export default SpaceEffect;

// SpaceEffect.css
.space-effect {
  background-color: #000;
  width: 300px;
  height: 300px;
  border-radius: 13px;
}

.space-effect::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
  background-size: 550px 550px, 350px 350px, 250px 250px;
  background-position: 0 0, 40px 60px, 130px 270px;
  animation: twinkle 10s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes twinkle {
  0% { opacity: 0.7; }
  100% { opacity: 1; }
}
@media (max-width: 768px){
	.space-effect{
		width: 80%;
	}
}
			`}
		  />
		</section>
      </div>
	  <section className="skills">
		<h2>My Skills</h2>
		<SkillsSlider />
		<div className="eye-icon" onClick={() => toggleCodeVisibility('SkillsSlider')}>
			{showCode.SkillsSlider ? <FaEyeSlash /> : <FaEye />}
		  </div>
		  <CodeBlock
			isVisible={showCode.SkillsSlider}
			code={`
// SkillsSlider.jsx
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
                transform: \`rotateY(\${angle}deg) translateZ(\${radius}px)\`
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

// SkillsSlider.css
:root {
  --bg-color: #1a1a2e;
  --primary-color: #16213e;
  --secondary-color: #0f3460;
  --accent-color: #e94560;
  --text-color: #f1f1f1;
}

body {
  background-color: var(--bg-color);
}

.slider-container {
  width: 100%;
  height: 200px;
  position: relative;
  perspective: 1000px;
  overflow: hidden;
}

.slider {
  position: absolute;
  width: 100%;
  height: 50%;
  transform-style: preserve-3d;
  animation: rotate 30s infinite linear;
}

.slider .item {
  position: absolute;
  width: 200px;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 10px;
  left: 50%;
  top: 50%;
  background-color: var(--primary-color);
  color: var(--text-color);
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.slider .item:hover {
  background-color: var(--secondary-color);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@keyframes rotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
			`}
		  />
	  </section>
	  <Footer />
    </div>
  );
};

export default App;