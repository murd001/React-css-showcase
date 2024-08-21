// Footer.jsx
import React from 'react';
import './Footer.css';
import profilePhoto from '../assets/profile-photo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="profile-section">
          <img src={profilePhoto} alt="Dennis M Mwaniki" className="profile-photo" />
          <h2 className="developer-name">Dennis M Mwaniki</h2>
          <p className="developer-title">Front-End Developer</p>
        </div>
        <div className="contact-section">
          <h3>Get in touch</h3>
          <ul className="contact-list">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:mdmurangiri@gmail.com">mdmurangiri@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+254115056522">(254) 1150 56522</a>
            </li>
          </ul>
        </div>
        <div className="social-section">
          <h3>Follow me</h3>
          <div className="social-icons">
            <a href="https://github.com/murd001" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mwaniki-murangiri-6b03192a1/" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://wa.me/qr/YIG6LLQTPVP2N1" className="social-icon"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dennis M Mwaniki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;