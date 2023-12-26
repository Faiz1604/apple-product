// Footer.js
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Apple Store</h3>
          <p>Find a Store</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@apple.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className='social'>
          <p>
            <a href="#facebook" target="_blank" rel="noopener noreferrer"><img src={"https://cdn-icons-png.flaticon.com/128/3670/3670124.png"} alt='facebook'></img></a>
          </p>
          <p>
            <a href="#twitter" target="_blank" rel="noopener noreferrer"><img src={"https://cdn-icons-png.flaticon.com/128/733/733579.png"} alt='twitter'></img></a>
          </p>
          <p>
            <a href="#linkedin" target="_blank" rel="noopener noreferrer"><img src={"https://cdn-icons-png.flaticon.com/128/3536/3536505.png"} alt="linkedin" /></a>
          </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2023 Your Company. All rights reserved. |{' '}
          <a href="/legal">Legal</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
