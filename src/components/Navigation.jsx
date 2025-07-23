import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationStyles = `
.navbar {
  background: rgba(10, 10, 10, 0.95) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  z-index: 1000;
  padding: 20px 0;
}

.navbar-brand {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--gold-accent) !important;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.navbar-nav .nav-link {
  color: var(--silver) !important;
  font-family: "Cinzel", serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 0.95rem;
  padding: 0 25px !important;
  transition: all 0.3s ease;
  position: relative;
}

.navbar-nav .nav-link:hover {
  color: var(--gold-accent) !important;
}

.navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--gold-accent);
  transition: all 0.4s ease;
  transform: translateX(-50%);
}

.navbar-nav .nav-link:hover::after {
  width: 60%;
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 0;
  }
}
`;

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <>
      <style>{navigationStyles}</style>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Sanderson Sisters
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded={isNavOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  to="/"
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  to="/about"
                  onClick={() => setIsNavOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/cocktails") ? "active" : ""
                  }`}
                  to="/cocktails"
                  onClick={() => setIsNavOpen(false)}
                >
                  Cocktails
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/tickets") ? "active" : ""}`}
                  to="/tickets"
                  onClick={() => setIsNavOpen(false)}
                >
                  Tickets
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  to="/contact"
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
