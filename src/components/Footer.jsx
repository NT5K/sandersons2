import React from "react";
import { Link } from "react-router-dom";

// Component-specific styles
const footerStyles = `
/* Footer Styles */
.footer {
  background: var(--deep-black);
  padding: 80px 0 40px;
  border-top: 1px solid rgba(212, 175, 55, 0.3);
  position: relative;
  z-index: 2;
}

.footer h5 {
  font-family: "Playfair Display", serif;
  color: var(--gold-accent);
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer p,
.footer a {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  line-height: 2;
}

.footer a:hover {
  color: var(--gold-accent);
  opacity: 1;
}
`;

const Footer = () => {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5>Extremely Social</h5>
              <p>
                Creators of sophisticated, immersive entertainment experiences
                that elevate any occasion into an unforgettable evening of
                theatrical excellence.
              </p>
              <a
                href="https://extremelysocialcle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/images/logo/logo_transparent.png"
                  alt="Company Logo"
                  className="footer-logo"
                  style={{ maxHeight: "100px" }}
                />
              </a>
            </div>
            <div className="col-lg-4">
              <h5>Experience</h5>
              <p>
                <Link to="/about">About the Experience</Link>
              </p>
              <p>
                <Link to="/cocktails">Signature Cocktails</Link>
              </p>
              <p>
                <Link to="/tickets">Tickets & Packages</Link>
              </p>
              <p>
                <Link to="/contact">Private Events</Link>
              </p>
            </div>
            <div className="col-lg-4">
              <h5>Contact</h5>
              <p>
                <a href="mailto:info@extremelysocial.com">
                  info@extremelysocial.com
                </a>
              </p>
              <p>
                <a href="tel:+1-617-555-0123">(617) 555-0123</a>
              </p>
              <p>Salem, Massachusetts</p>
              <p>
                <a href="#tickets">Private Event Inquiries</a>
              </p>
            </div>
          </div>
          <hr
            className="my-5"
            style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
          />
          <div className="row">
            <div className="col-12 text-center">
              <p>
                &copy; 2025 Extremely Social. All rights reserved. |{" "}
                <em>Magic guaranteed, memories eternal.</em>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
