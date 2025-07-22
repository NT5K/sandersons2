import React, { useEffect, useState } from "react";

// Component-specific styles
const pageHeroStyles = `
/* Page Hero Component Styles */
.page-hero {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.page-hero-background {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: -1;
  will-change: transform;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.page-hero .hero-content {
  text-align: center;
  z-index: 3;
  position: relative;
  animation: fadeInUp 1s ease-out;
}

.page-hero h1 {
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  color: var(--gold-accent);
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.8), 2px 2px 8px rgba(0, 0, 0, 0.9);
}

.page-hero h2 {
  font-family: "Cinzel", serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  color: var(--silver);
  margin-bottom: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-hero {
    min-height: 50vh !important;
    padding: 80px 0;
  }
  
  .page-hero-background {
    background-attachment: scroll !important;
  }
}

/* Performance optimization for mobile */
@media (prefers-reduced-motion: reduce) {
  .page-hero-background {
    transform: none !important;
    background-attachment: scroll !important;
  }
}
`;

const PageHero = ({
  backgroundImage,
  title,
  subtitle,
  height = "60vh",
  className = "",
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <>
      <style>{pageHeroStyles}</style>
      <section
        className={`page-hero ${className}`}
        style={{ minHeight: height }}
      >
        <div
          className="page-hero-background"
          style={{
            ...parallaxStyle,
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.5)),
                             radial-gradient(circle at 30% 20%, rgba(45, 27, 105, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, rgba(114, 47, 55, 0.3) 0%, transparent 50%),
                             url(${backgroundImage})`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHero;
