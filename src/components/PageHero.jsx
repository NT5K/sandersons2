import React, { useEffect, useState } from "react";

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
    <section className={`page-hero ${className}`} style={{ minHeight: height }}>
      <div
        className="page-hero-background"
        style={{
          ...parallaxStyle,
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.5)),
                           radial-gradient(circle at 30% 20%, rgba(45, 27, 105, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(114, 47, 55, 0.3) 0%, transparent 50%),
                           url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
  );
};

export default PageHero;
