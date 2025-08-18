import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="mb-3">Extremely Social</h5>
              <p className="mb-4">
                Immersive experience creation company specializing in
                over-the-top themed events designed to engage guests and create
                unforgettable moments. Now in our second spellbinding year with
                the Sanderson Sisters.
              </p>
              <a
                href="https://www.youtube.com/@extremelysocial7946/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/images/logo/logo_transparent.png"
                  alt="Extremely Social Logo"
                  className="footer-logo"
                />
              </a>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="mb-3">Experiences</h5>
              <p>
                <Link to="/about">About Extremely Social</Link>
              </p>
              <p>
                <Link to="/tickets">Sanderson Sisters Soirée</Link>
              </p>
              <p>
                <Link to="/tickets">Private Appearances</Link>
              </p>
              <p>
                <Link to="/cocktails">Signature Cocktails</Link>
              </p>
              <p>
                <Link to="/contact">Venue Partnerships</Link>
              </p>
            </div>
            <div className="col-lg-4">
              <h5 className="mb-3">Book the Magic</h5>
              <p>
                <strong>Dominick Palazzo</strong>
                <br />
                Owner, Extremely Social
              </p>
              <p>
                <a href="tel:2163752550">(216) 375-2550</a>
              </p>
              <p>
                <a href="mailto:dominick@extrememp.com">
                  dominick@extrememp.com
                </a>
              </p>
              <p>
                <small>Available: Late September - October 31st</small>
              </p>
            </div>
          </div>
          <hr
            className="my-5"
            style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
          />
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-3">
                &copy; {currentYear} Extremely Social. All rights reserved.
                <span className="d-none d-md-inline"> | </span>
                <br className="d-md-none" />
                <em>Bringing magic to venues across Ohio since 2023.</em>
              </p>
              <div className="d-flex justify-content-center gap-4">
                <a
                  href="https://www.youtube.com/@extremelysocial7946/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i
                    className="fab fa-youtube"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/extremelysocialcle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/extremelysocial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i
                    className="fab fa-facebook-f"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;