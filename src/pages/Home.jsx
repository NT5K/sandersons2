import React, { useEffect } from "react";

// Component-specific styles
const homeStyles = `
/* Home Page Styles */

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.4)),
    radial-gradient(
      circle at 30% 20%,
      rgba(45, 27, 105, 0.2) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 80%,
      rgba(114, 47, 55, 0.2) 0%,
      transparent 50%
    );
  z-index: 2;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(10, 10, 10, 0.7),
    rgba(10, 10, 10, 0.5),
    rgba(10, 10, 10, 0.7)
  );
  z-index: 1;
}

.hero-content {
  text-align: center;
  z-index: 3;
  position: relative;
  animation: fadeInUp 1s ease-out;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 900;
  color: var(--gold-accent);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.8), 2px 2px 8px rgba(0, 0, 0, 0.9),
    4px 4px 16px rgba(0, 0, 0, 0.7);
}

.hero h2 {
  font-family: "Cinzel", serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--silver);
  margin-bottom: 3rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8);
}

.hero p {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  color: var(--silver);
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.8;
  font-weight: 500;
  opacity: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7);
}

.hero-icons {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.hero-icon {
  text-align: center;
  color: var(--gold-accent);
}

.hero-icon i {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.hero-icon span {
  font-family: "Cinzel", serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7);
}

/* Experience Section */
.experience {
  padding: 120px 0;
  position: relative;
  z-index: 2;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 26, 26, 0.5) 50%,
    transparent 100%
  );
}

.experience-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.experience-text h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.experience-text p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 20px;
}

.experience-image {
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.3);
  overflow: hidden;
}

.experience-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.experience-image:hover img {
  transform: scale(1.05);
}

/* Services Section */
.services {
  padding: 100px 0;
  position: relative;
  z-index: 2;
}

.service-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8),
    rgba(42, 42, 42, 0.6)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px;
  text-align: center;
  transition: all 0.5s ease;
  backdrop-filter: blur(15px);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.1),
    transparent
  );
  transition: left 0.8s ease;
}

.service-card:hover::before {
  left: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px;
  transition: all 0.4s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.05);
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4));
}

.service-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gold-accent);
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.service-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.9;
}

/* Practical Info Section */
.practical-info {
  padding: 120px 0;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.info-item:hover {
  border-bottom-color: var(--gold-accent);
}

.info-item i {
  font-size: 1.5rem;
  color: var(--gold-accent);
  margin-right: 25px;
  min-width: 30px;
}

.info-item span {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.2rem;
}

.info-item strong {
  color: var(--gold-accent);
}

/* Reviews Section */
.reviews {
  padding: 120px 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.1) 50%,
    transparent 100%
  );
}

.review-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px;
  margin: 0 15px;
  border-radius: 0;
  transition: all 0.4s ease;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.review-card:hover {
  border-color: var(--gold-accent);
  transform: translateY(-5px);
}

.review-text {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--silver);
  margin-bottom: 20px;
  flex-grow: 1;
}

.review-author {
  font-family: "Cinzel", serif;
  color: var(--gold-accent);
  font-weight: 500;
  margin-bottom: 10px;
}

.review-stars {
  color: var(--gold-accent);
}

/* Gallery Section */
.gallery {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.05) 50%,
    transparent 100%
  );
}

/* Location Section */
.location {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.2) 0%,
    transparent 100%
  );
}

.location-description {
  opacity: 0.9;
}

.location a:hover {
  color: var(--gold-accent) !important;
  transition: all 0.3s ease;
}

.location .fab:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
    padding: 120px 0 60px;
  }

  .service-card {
    margin-bottom: 40px;
    padding: 40px 30px;
  }

  .services,
  .experience,
  .practical-info,
  .reviews {
    padding: 80px 0;
  }

  .experience-content,
  .info-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-icons {
    gap: 30px;
  }
}
`;

const Home = () => {
  useEffect(() => {
    // Initialize nanogallery2 when component mounts
    const initializeGallery = (galleryID, items, title, description) => {
      if (window.jQuery && window.jQuery.fn.nanogallery2) {
        window.jQuery(`#${galleryID}`).nanogallery2({
          itemsBaseURL: `./assets/images/`,
          items: items,
          galleryMaxRows: 2,
          galleryDisplayMode: "rows",
          thumbnailHeight: "200",
          thumbnailWidth: "auto",
          thumbnailAlignment: "scaled",
          thumbnailGutterWidth: 10,
          thumbnailGutterHeight: 10,
          thumbnailBorderHorizontal: 2,
          thumbnailBorderVertical: 2,
          thumbnailLabel: {
            valign: "bottom",
            position: "overImage",
            hideIcons: true,
            display: true,
            titleFontSize: "1.2em",
            descriptionFontSize: "1.05em",
          },
          galleryDisplayTransitionDuration: 1500,
          thumbnailDisplayTransition: "imageSlideUp",
          thumbnailDisplayTransitionDuration: 1200,
          thumbnailDisplayTransitionEasing: "easeInOutQuint",
          thumbnailDisplayInterval: 60,
          thumbnailBuildInit2: "image_scale_1.00",
          thumbnailHoverEffect2:
            "thumbnail_scale_1.00_1.00_300|image_scale_1.00_1.05",
          touchAnimation: true,
          touchAutoOpenDelay: 500,
          viewerToolbar: { display: false },
          viewerTools: {
            topLeft: "label",
            topRight: "shareButton, closeButton",
          },
          galleryTheme: {
            thumbnail: {
              background: "rgba(26, 26, 26, 0.8)",
              borderColor: "rgba(212, 175, 55, 0.3)",
            },
          },
          locationHash: true,
          displayBreadcrumb: false,
        });
      }
    };

    // Wait for jQuery and nanogallery2 to load
    const checkLibraries = () => {
      if (window.jQuery && window.jQuery.fn.nanogallery2) {
        initializeGallery(
          "sanderson_gallery",
          [
            {
              src: "sample1.png",
              srct: "sample1.png",
              title: "Enchanted Entrance",
              description: "Step into Salem's mystical world.",
            },
            {
              src: "sample2.png",
              srct: "sample2.png",
              title: "Spellbinding Performance",
              description: "The Sanderson Sisters cast their spell.",
            },
            {
              src: "sample3.png",
              srct: "sample3.png",
              title: "Witch's Brew",
              description: "Signature cocktails for every guest.",
            },
            {
              src: "sample4.png",
              srct: "sample4.png",
              title: "Intimate Venue",
              description: "Atmospheric candlelit setting.",
            },
            {
              src: "sample6.png",
              srct: "sample5.png",
              title: "Guests in Costume",
              description: "Guests embrace the spirit of Salem.",
            },
            {
              src: "sample5.png",
              srct: "sample6.png",
              title: "Live Music",
              description: "Haunting melodies fill the night.",
            },
            {
              src: "sample7.png",
              srct: "sample7.png",
              title: "Magical Finale",
              description: "A night to remember forever.",
            },
            {
              src: "sample3.png",
              srct: "sample7.png",
              title: "Magical Finale",
              description: "A night to remember forever.",
            },
            {
              src: "sample6.png",
              srct: "sample7.png",
              title: "Magical Finale",
              description: "A night to remember forever.",
            },
            {
              src: "sample2.png",
              srct: "sample7.png",
              title: "Magical Finale",
              description: "A night to remember forever.",
            },
          ],
          "gallery",
          "Sanderson Sisters Experience"
        );
      } else {
        setTimeout(checkLibraries, 100);
      }
    };

    checkLibraries();
  }, []);

  return (
    <>
      <style>{homeStyles}</style>
      <div>
        {/* Hero Section */}
        <section id="home" className="hero">
          {/* Video Background */}
          <video autoPlay muted loop playsInline className="video-background">
            <source src="./assets/videos/sample.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for text readability */}
          <div className="hero-overlay"></div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-content">
                  <h1>Sanderson Sisters</h1>
                  <h2>An Exclusive Salem Experience</h2>
                  <p>
                    Step into the shadows of Salem's most notorious witches. An
                    immersive theatrical experience where ancient mystique meets
                    modern luxury in an unforgettable evening of spells, spirits,
                    and sophisticated entertainment.
                  </p>
                  <div className="cta-buttons">
                    <a href="#tickets" className="btn-luxury">
                      Reserve Experience
                    </a>
                    <a href="#about" className="btn-luxury">
                      Discover More
                    </a>
                  </div>
                  <div className="hero-icons">
                    <div className="hero-icon">
                      <i className="fas fa-cocktail"></i>
                      <span>
                        Themed Cocktails
                        <br />
                        Included
                      </span>
                    </div>
                    <div className="hero-icon">
                      <i className="fas fa-theater-masks"></i>
                      <span>
                        Live Performance
                        <br />
                        Experience
                      </span>
                    </div>
                    <div className="hero-icon">
                      <i className="fas fa-users"></i>
                      <span>
                        Intimate Venue
                        <br />
                        Limited Seating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience" id="about">
          <div className="container">
            <h2 className="section-title">The Experience</h2>
            <div className="experience-content">
              <div className="experience-text">
                <h3>A Tale of Salem's Most Infamous</h3>
                <p>
                  Immerse yourself in the legendary story of Winifred, Sarah, and
                  Mary Sanderson. Our sophisticated interpretation brings these
                  iconic characters to life through masterful storytelling,
                  atmospheric design, and interactive entertainment.
                </p>
                <p>
                  Set in an intimate venue that captures the essence of 1600s
                  Salem, guests are invited to witness—and participate in—the
                  sisters' most bewitching evening. From spell-casting rituals to
                  musical performances, every moment is crafted to transport you
                  into their mystical world.
                </p>
                <p>
                  This is not merely dinner theater—this is an immersive journey
                  into the heart of Salem's most captivating legend, elevated for
                  the discerning adult audience.
                </p>
              </div>
              <div className="experience-image">
                <img
                  src="./assets/images/sample1.png"
                  alt="Atmospheric Salem setting"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2 className="section-title">Exclusive Offerings</h2>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <div className="service-icon">
                    <i className="fas fa-crown"></i>
                  </div>
                  <h3>Premium Performance</h3>
                  <p>
                    Experience theatrical excellence with professionally trained
                    performers delivering an immersive, high-caliber
                    interpretation of the legendary Sanderson Sisters in an
                    intimate setting.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <div className="service-icon">
                    <i className="fas fa-glass-cheers"></i>
                  </div>
                  <h3>Curated Libations</h3>
                  <p>
                    Sophisticated audience engagement paired with carefully
                    crafted themed cocktails and bespoke entertainment tailored to
                    discerning guests who appreciate theatrical artistry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-card">
                  <div className="service-icon">
                    <i className="fas fa-gem"></i>
                  </div>
                  <h3>Luxury Events</h3>
                  <p>
                    Elevated Halloween experiences designed for exclusive venues,
                    private parties, corporate events, and upscale gatherings
                    seeking unparalleled entertainment and atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Info Section */}
        <section className="practical-info" id="tickets">
          <div className="container">
            <h2 className="section-title">Information</h2>
            <div className="info-grid">
              <div className="info-video">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/idc0EOmKr30?si=Ln52qSfUqzX7QFFY"
                  title="The Sanderson Sisters - The Witches Are Back (Music Video) Hocus Pocus 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}
                ></iframe>
              </div>
              <div className="info-content">
                <div className="info-item p-0">
                  <i className="fas fa-calendar-alt"></i>
                  <span>
                    <strong>Dates:</strong> October - November, select evenings
                  </span>
                </div>
                <div className="info-item p-0">
                  <i className="fas fa-clock"></i>
                  <span>
                    <strong>Duration:</strong> 2.5 hours immersive experience
                  </span>
                </div>
                <div className="info-item p-0">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    <strong>Location:</strong> Exclusive Salem venue
                  </span>
                </div>
                <div className="info-item p-0">
                  <i className="fas fa-id-card"></i>
                  <span>
                    <strong>Age Requirement:</strong> 21+ with valid ID
                  </span>
                </div>
                <div className="info-item p-0">
                  <i className="fas fa-tshirt"></i>
                  <span>
                    <strong>Dress Code:</strong> Cocktail attire or costume
                  </span>
                </div>
                <div className="info-item p-0">
                  <i className="fas fa-cocktail"></i>
                  <span>
                    <strong>Included:</strong> Welcome cocktails & themed
                    libations
                  </span>
                </div>

                <a
                  href="#contact"
                  className="btn-luxury"
                  style={{ marginTop: "2rem" }}
                >
                  Reserve Your Experience
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery" id="gallery">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">
              Glimpses into the mystical world of the Sanderson Sisters
            </p>

            <div id="sanderson_gallery"></div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews">
          <div className="container">
            <h2 className="section-title">Reviews</h2>
            <p className="section-subtitle">
              What our guests say about their enchanted evening
            </p>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="review-card">
                  <p className="review-text">
                    "An absolutely spellbinding experience. The attention to
                    detail and the performers' commitment to their roles created
                    an evening I'll never forget. Sophisticated Halloween
                    entertainment at its finest."
                  </p>
                  <div className="review-author">Margaret S.</div>
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="review-card">
                  <p className="review-text">
                    "The perfect blend of theater, cocktails, and atmosphere. My
                    friends and I felt like we were truly part of the Sanderson
                    Sisters' world. Exceptional production quality throughout."
                  </p>
                  <div className="review-author">Robert K.</div>
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="review-card">
                  <p className="review-text">
                    "Elegantly executed and thoroughly immersive. The venue was
                    intimate yet grand, and the cocktails were as bewitching as
                    the performance itself. A truly unique Salem experience."
                  </p>
                  <div className="review-author">Diana L.</div>
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location" id="location">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2
                  className="section-title"
                  style={{ textAlign: "left", marginBottom: "40px" }}
                >
                  Extremely Social
                </h2>
                <p
                  className="location-description"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    lineHeight: "1.8",
                    color: "var(--silver)",
                    marginBottom: "40px",
                  }}
                >
                  Based in Cleveland, Ohio, Extremely Social specializes in
                  creating immersive, emotionally effective life experiences. We
                  don't just plan events—we craft unforgettable experiences that
                  transport guests into extraordinary worlds of entertainment and
                  sophistication.
                </p>
                <div className="location-info" style={{ marginBottom: "40px" }}>
                  <div
                    className="info-item"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i
                      className="fas fa-map-marker-alt"
                      style={{
                        fontSize: "1.5rem",
                        color: "var(--gold-accent)",
                        marginRight: "20px",
                        minWidth: "30px",
                      }}
                    ></i>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      <strong style={{ color: "var(--gold-accent)" }}>
                        Location:
                      </strong>{" "}
                      Cleveland, Ohio
                    </span>
                  </div>
                  <div
                    className="info-item"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i
                      className="fas fa-envelope"
                      style={{
                        fontSize: "1.5rem",
                        color: "var(--gold-accent)",
                        marginRight: "20px",
                        minWidth: "30px",
                      }}
                    ></i>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      <strong style={{ color: "var(--gold-accent)" }}>
                        Contact:
                      </strong>
                      <a
                        href="mailto:info@extremelysocial.com"
                        style={{ color: "var(--silver)", textDecoration: "none" }}
                      >
                        info@extremelysocial.com
                      </a>
                    </span>
                  </div>
                  <div
                    className="info-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <i
                      className="fas fa-users"
                      style={{
                        fontSize: "1.5rem",
                        color: "var(--gold-accent)",
                        marginRight: "20px",
                        minWidth: "30px",
                      }}
                    ></i>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      <strong style={{ color: "var(--gold-accent)" }}>
                        Follow Us:
                      </strong>
                      <a
                        href="https://www.facebook.com/extremelysocial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--silver)",
                          textDecoration: "none",
                          marginLeft: "10px",
                        }}
                      >
                        <i
                          className="fab fa-facebook"
                          style={{ fontSize: "1.3rem", marginRight: "15px" }}
                        ></i>
                      </a>
                      <a
                        href="https://www.instagram.com/extremelysocialcle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--silver)", textDecoration: "none" }}
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: "1.3rem" }}
                        ></i>
                      </a>
                    </span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="btn-luxury"
                  style={{ marginTop: "20px" }}
                >
                  Get In Touch
                </a>
              </div>
              <div className="col-lg-5">
                <div
                  className="location-image"
                  style={{
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop"
                    alt="Cleveland Event Space"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;