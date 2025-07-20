import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Extremely Social</h5>
            <p>Creators of sophisticated, immersive entertainment experiences that elevate any occasion into an
              unforgettable evening of theatrical excellence.</p>
          </div>
          <div className="col-lg-4">
            <h5>Experience</h5>
            <p><Link to="/about">About the Experience</Link></p>
            <p><Link to="/cocktails">Signature Cocktails</Link></p>
            <p><Link to="/tickets">Tickets & Packages</Link></p>
            <p><Link to="/contact">Private Events</Link></p>
          </div>
          <div className="col-lg-4">
            <h5>Contact</h5>
            <p><a href="mailto:info@extremelysocial.com">info@extremelysocial.com</a></p>
            <p><a href="tel:+1-617-555-0123">(617) 555-0123</a></p>
            <p>Salem, Massachusetts</p>
            <p><a href="#tickets">Private Event Inquiries</a></p>
          </div>
        </div>
        <hr className="my-5" style={{borderColor: 'rgba(212, 175, 55, 0.3)'}} />
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2025 Extremely Social. All rights reserved. | <em>Magic guaranteed, memories eternal.</em></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;