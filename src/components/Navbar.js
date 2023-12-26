// Navbar.js
import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/32px-Apple-logo.png" alt="Apple Logo" />
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/iphone">iPhone</a>
        <a href="/macbook">MacBook</a>
        <a href="/ipad">iPad</a>
        <a href="/watch">Watch</a>
        <a href="/tv">TV</a>
        <a href="/music">Music</a>
        <a href="/support">Support</a>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
