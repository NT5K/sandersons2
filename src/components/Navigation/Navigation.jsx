import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(0);

  // Set navbar height on mount and when the window is resized
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  // Close mobile nav on any route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavOpen(false);
  }, [location.pathname]);

  // This effect ONLY handles adding/removing body padding.
  // It runs whenever the sticky state or nav height changes.
  useEffect(() => {
    if (isNavSticky) {
      document.body.style.paddingTop = `${navHeight}px`;
    } else {
      document.body.style.paddingTop = "0";
    }
    // Cleanup padding on component unmount
    return () => {
      document.body.style.paddingTop = "0";
    };
  }, [isNavSticky, navHeight]);

  // This effect ONLY handles scroll detection and setting state
  useEffect(() => {
    const scrollThreshold = 5; // Prevents overly sensitive show/hide behavior

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if the navbar should become sticky
      if (currentScrollY > navHeight) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }

      // Determine if the navbar should be visible (show/hide logic)
      if (
        Math.abs(currentScrollY - lastScrollY) > scrollThreshold ||
        currentScrollY < navHeight
      ) {
        if (currentScrollY > lastScrollY && currentScrollY > navHeight) {
          // Scrolling Down
          setIsNavVisible(false);
        } else {
          // Scrolling Up or at the top of the page
          setIsNavVisible(true);
        }
      }

      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, navHeight]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const isActive = (path) => location.pathname === path;

  // Dynamically build the class string for the nav element
  const navClasses = `
    navbar navbar-expand-lg navbar-dark 
    ${isNavSticky ? "navbar-sticky" : ""} 
    ${isNavVisible ? "visible" : "hidden"}
  `;

  return (
    <nav ref={navRef} className={navClasses.trim()}>
      <div className="container">
        <Link className="navbar-brand d-flex flex-column" to="/">
          <span className="brand-main-text">The Sanderson Sisters Soirée</span>
          <span className="brand-sub-text">
            "Putting the extra in HEXtraordinary since 1693."
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
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
                className={`nav-link ${isActive("/cocktails") ? "active" : ""}`}
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
  );
};

export default Navigation;
