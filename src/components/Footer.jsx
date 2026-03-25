import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About Column */}
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            We provide high quality products at affordable prices. 
            Our goal is to give you the best shopping experience.
          </p>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Email: audreywangui1@gmail.com</p>
          <p>Phone: +254 726203909</p>

          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        {/* Form Column */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <form className="footer-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
            />
            <textarea 
              placeholder="Your message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Your Store. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;