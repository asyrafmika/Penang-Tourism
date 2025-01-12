import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p className='footer-text'>© 2025 All rights reserved</p>
        <div className='footer-links'>
          <a href='/terms' className='footer-link'>Terms of Service</a>
          <a href='/privacy' className='footer-link'>Privacy Policy</a>
        </div>
        <div className='footer-social'>
          <a href='https://www.instagram.com/penangfoodandtravel?igsh=MTlyNzN5aWsya3IwZg==' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.tiktok.com/@penangfoodandtravel?_t=ZS-8sysGMPVEf9&_r=1' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-tiktok'></i>
          </a>
          <a href='https://www.facebook.com/share/14cARxEBG9/?mibextid=wwXIfr' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <i className='fab fa-facebook'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
