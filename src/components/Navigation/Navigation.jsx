import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          isVisible ? "" : "hidden"
        }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            The Sanderson Sisters Siore
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
