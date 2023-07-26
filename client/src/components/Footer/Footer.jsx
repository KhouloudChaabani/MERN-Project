import React from 'react';
import { AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import './Footer.css'; // Make sure to create the CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src='./logo.png' width={120} alt="Logo" />
        
      </div>
      <div className="footer-contact">

      <span className='primaryText con'>Contact</span><br/>
      <span className='secondaryText'>Estichara@gmail.com</span><br/>
      <span className='secondaryText'>+21658472336</span>
      </div>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
     
        </div>
     
    </footer>
  );
};

export default Footer;