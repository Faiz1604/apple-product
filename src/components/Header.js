// Header.js
import React from 'react';
import './styles/Header.css';
const Header = () => {
  return (
    <>
    <header className="iphone15-header">
      <div className="header-content">
        <video autoPlay muted loop id="header-video">
          <source src={"https://www.apple.com/105/media/ww/iphone-15/2023/434c1226-dcdc-47be-ae28-6cb67a3a5a7c/anim/design/large_2x.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="header-text">
          <h1>iPhone 15</h1>
          <p>Discover the latest innovations in the iPhone 15 <br />
          iPhone 15 Pro and iPhone 15 Pro Max represent the very best of Apple innovations, featuring a strong and lightweight titanium design, a new Action button, powerful camera upgrades, and A17 Pro.</p>
          <a href="#details" className="cta-button">Learn More</a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
