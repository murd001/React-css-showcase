import React, { useState } from 'react';
import { FaPlus, FaTimes, FaHome, FaUser, FaCog, FaInfoCircle } from 'react-icons/fa'; 
import './ToggleMenu.css';

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="menu">
            {!isOpen && <button className="menu-toggle" onClick={() => setIsOpen(true)}><FaPlus /></button>} 
            <nav style={{ transform: `scale(${isOpen ? 1 : 0})` }}>
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
}

export default ToggleMenu;
