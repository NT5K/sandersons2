import React, { useEffect } from "react";

const homeStyles = `
.hero {
  min-height: calc(100vh - 80px);
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
  padding-top: 80px;
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
  animation: fadeInUp 1s ease-out;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 900;
  color: var(--gold-accent);
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
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8);
}

.hero p {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  color: var(--silver);
  line-height: 1.8;
  font-weight: 500;
  opacity: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7);
}

.hero-icon {
  color: var(--gold-accent);
}

.hero-icon i {
  font-size: 2.5rem;
  display: block;
}

.hero-icon span {
  font-family: "Cinzel", serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7);
}

/* Section Titles */
.section-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--gold-accent);
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 1px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.section-subtitle {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--silver);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
}

/* Custom Buttons */
.btn-luxury {
  display: inline-block;
  font-family: "Cinzel", serif;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  margin: 0 1rem 1rem 0;
  border: 2px solid var(--gold-accent);
  color: var(--gold-accent);
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
  text-decoration: none;
}

.btn-luxury:hover {
  background-color: var(--gold-accent);
  color: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}

/* Sections - Padding & Backgrounds */
.experience, .services, .practical-info, .reviews, .gallery, .location {
  padding: 100px 0; /* Consistent vertical padding for sections */
  position: relative;
  z-index: 2;
}

.experience {
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 26, 26, 0.5) 50%,
    transparent 100%
  );
}

.services {
  /* No specific background, relies on body background or previous section */
}

.practical-info {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.reviews {
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.1) 50%,
    transparent 100%
  );
}

.gallery {
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.05) 50%,
    transparent 100%
  );
}

.location {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.2) 0%,
    transparent 100%
  );
}


/* Experience Section */
.experience-text h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: var(--gold-accent);
  letter-spacing: 1px;
}

.experience-text p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--silver);
  opacity: 0.9;
}

.experience-image {
  border: 1px solid rgba(212, 175, 55, 0.3);
  overflow: hidden;
}

.experience-image img {
  transition: transform 0.6s ease;
}

.experience-image:hover img {
  transform: scale(1.05);
}

/* Services Section */
.service-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8),
    rgba(42, 42, 42, 0.6)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px;
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
.info-video iframe {
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.info-item {
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.info-item:hover {
  border-bottom-color: var(--gold-accent);
}

.info-item i {
  font-size: 1.5rem;
  color: var(--gold-accent);
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
.review-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px;
  border-radius: 0;
  transition: all 0.4s ease;
  height: 100%; /* Ensure cards are same height */
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
  flex-grow: 1; /* Allows text to grow and push author/stars down */
}

.review-author {
  font-family: "Cinzel", serif;
  color: var(--gold-accent);
  font-weight: 500;
}

.review-stars {
  color: var(--gold-accent);
}

/* Location Section */
.location-description {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--silver);
  opacity: 0.9;
}

.location a {
  color: var(--silver); /* Default link color for location section */
  text-decoration: none;
}

.location a:hover {
  color: var(--gold-accent) !important;
  transition: all 0.3s ease;
}

.location .fab {
  font-size: 1.3rem; /* Consistent icon size */
}

.location .fab:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.location-image {
  border: 1px solid rgba(212, 175, 55, 0.3);
  overflow: hidden;
}

.location-image img {
  height: 400px; /* Specific height for location image */
  object-fit: cover;
}


/* Responsive adjustments - remaining custom breakpoints */
@media (max-width: 768px) {
  .hero {
    min-height: calc(90vh - 80px);
    padding: 120px 0 60px;
  }
}
`;

const Home = () => {
  useEffect(() => {
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
        <section
          id="home"
          className="hero d-flex align-items-center justify-content-center pb-3"
        >
          {/* Video Background */}
          <video autoPlay muted loop playsInline className="video-background">
            <source src="./assets/videos/sample.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for text readability */}
          <div className="hero-overlay"></div>

          <div className="container position-relative z-3 text-center text-white">
            <div className="row">
              <div className="col-12">
                <div className="hero-content mx-auto">
                  <h1 className="mb-3">Sanderson Sisters</h1>
                  <h2 className="mb-5">An Exclusive Salem Experience</h2>
                  <p className="mx-auto mb-5">
                    Step into the shadows of Salem's most notorious witches. An
                    immersive theatrical experience where ancient mystique meets
                    modern luxury in an unforgettable evening of spells,
                    spirits, and sophisticated entertainment.
                  </p>
                  <div className="d-flex justify-content-center flex-wrap mb-5">
                    <a href="#tickets" className="btn-luxury">
                      Reserve Experience
                    </a>
                    <a href="#about" className="btn-luxury">
                      Discover More
                    </a>
                  </div>
                  <div className="hero-icons d-flex justify-content-center flex-wrap gap-5 mt-4">
                    <div className="hero-icon">
                      <i className="fas fa-cocktail mb-3"></i>
                      <span>
                        Themed Cocktails
                        <br />
                        Included
                      </span>
                    </div>
                    <div className="hero-icon">
                      <i className="fas fa-theater-masks mb-3"></i>
                      <span>
                        Live Performance
                        <br />
                        Experience
                      </span>
                    </div>
                    <div className="hero-icon">
                      <i className="fas fa-users mb-3"></i>
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
            <div className="row align-items-center g-5 g-md-4">
              <div className="col-md-6 order-md-1">
                <div className="experience-text">
                  <h3 className="mb-4">A Tale of Salem's Most Infamous</h3>
                  <p className="mb-3">
                    Immerse yourself in the legendary story of Winifred, Sarah,
                    and Mary Sanderson. Our sophisticated interpretation brings
                    these iconic characters to life through masterful
                    storytelling, atmospheric design, and interactive
                    entertainment.
                  </p>
                  <p className="mb-3">
                    Set in an intimate venue that captures the essence of 1600s
                    Salem, guests are invited to witness—and participate in—the
                    sisters' most bewitching evening. From spell-casting rituals
                    to musical performances, every moment is crafted to
                    transport you into their mystical world.
                  </p>
                  <p className="mb-0">
                    This is not merely dinner theater—this is an immersive
                    journey into the heart of Salem's most captivating legend,
                    elevated for the discerning adult audience.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-2">
                <div className="experience-image">
                  <img
                    src="./assets/images/sample1.png"
                    alt="Atmospheric Salem setting"
                    className="img-fluid w-100 h-100"
                  />
                </div>
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
                <div className="service-card text-center">
                  <div className="service-icon mb-4">
                    <i className="fas fa-crown"></i>
                  </div>
                  <h3 className="mb-3">Premium Performance</h3>
                  <p className="mb-0">
                    Experience theatrical excellence with professionally trained
                    performers delivering an immersive, high-caliber
                    interpretation of the legendary Sanderson Sisters in an
                    intimate setting.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-card text-center">
                  <div className="service-icon mb-4">
                    <i className="fas fa-glass-cheers"></i>
                  </div>
                  <h3 className="mb-3">Curated Libations</h3>
                  <p className="mb-0">
                    Sophisticated audience engagement paired with carefully
                    crafted themed cocktails and bespoke entertainment tailored
                    to discerning guests who appreciate theatrical artistry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-card text-center">
                  <div className="service-icon mb-4">
                    <i className="fas fa-gem"></i>
                  </div>
                  <h3 className="mb-3">Luxury Events</h3>
                  <p className="mb-0">
                    Elevated Halloween experiences designed for exclusive
                    venues, private parties, corporate events, and upscale
                    gatherings seeking unparalleled entertainment and
                    atmosphere.
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
            <div className="row align-items-center g-5 g-md-4">
              <div className="col-md-6">
                <div className="info-video">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/idc0EOmKr30?si=Ln52qSfUqzX7QFFY"
                    title="The Sanderson Sisters - The Witches Are Back (Music Video) Hocus Pocus 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-content d-flex flex-column gap-3">
                  <div className="info-item d-flex align-items-center py-3">
                    <i className="fas fa-calendar-alt me-4"></i>
                    <span>
                      <strong>Dates:</strong> October - November, select
                      evenings
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center py-3">
                    <i className="fas fa-clock me-4"></i>
                    <span>
                      <strong>Duration:</strong> 2.5 hours immersive experience
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center py-3">
                    <i className="fas fa-map-marker-alt me-4"></i>
                    <span>
                      <strong>Location:</strong> Exclusive Salem venue
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center py-3">
                    <i className="fas fa-id-card me-4"></i>
                    <span>
                      <strong>Age Requirement:</strong> 21+ with valid ID
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center py-3">
                    <i className="fas fa-tshirt me-4"></i>
                    <span>
                      <strong>Dress Code:</strong> Cocktail attire or costume
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center py-3">
                    <i className="fas fa-cocktail me-4"></i>
                    <span>
                      <strong>Included:</strong> Welcome cocktails & themed
                      libations
                    </span>
                  </div>

                  <a href="#contact" className="btn-luxury mt-4">
                    Reserve Your Experience
                  </a>
                </div>
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
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="review-card d-flex flex-column">
                  <p className="review-text mb-3">
                    "An absolutely spellbinding experience. The attention to
                    detail and the performers' commitment to their roles created
                    an evening I'll never forget. Sophisticated Halloween
                    entertainment at its finest."
                  </p>
                  <div className="mt-auto">
                    <div className="review-author mb-2">Margaret S.</div>
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
              <div className="col-lg-4 col-md-6">
                <div className="review-card d-flex flex-column">
                  <p className="review-text mb-3">
                    "The perfect blend of theater, cocktails, and atmosphere. My
                    friends and I felt like we were truly part of the Sanderson
                    Sisters' world. Exceptional production quality throughout."
                  </p>
                  <div className="mt-auto">
                    <div className="review-author mb-2">Robert K.</div>
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
              <div className="col-lg-4 col-md-6">
                <div className="review-card d-flex flex-column">
                  <p className="review-text mb-3">
                    "Elegantly executed and thoroughly immersive. The venue was
                    intimate yet grand, and the cocktails were as bewitching as
                    the performance itself. A truly unique Salem experience."
                  </p>
                  <div className="mt-auto">
                    <div className="review-author mb-2">Diana L.</div>
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
          </div>
        </section>

        {/* Location Section */}
        <section className="location" id="location">
          <div className="container">
            <div className="row align-items-center g-5 g-md-4">
              <div className="col-lg-7">
                <h2 className="section-title text-start mb-4">
                  Extremely Social
                </h2>
                <p className="location-description mb-4">
                  Based in Cleveland, Ohio, Extremely Social specializes in
                  creating immersive, emotionally effective life experiences. We
                  don't just plan events—we craft unforgettable experiences that
                  transport guests into extraordinary worlds of entertainment
                  and sophistication.
                </p>
                <div className="location-info mb-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="fas fa-map-marker-alt me-4"></i>
                    <span>
                      <strong>Location:</strong> Cleveland, Ohio
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center">
                    <i className="fas fa-envelope me-4"></i>
                    <span>
                      <strong>Contact:</strong>{" "}
                      <a href="mailto:info@extremelysocial.com">
                        info@extremelysocial.com
                      </a>
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center mb-3">
                    <i className="fas fa-users me-4"></i>
                    <span>
                      <strong>Follow Us:</strong>
                      <a
                        href="https://www.facebook.com/extremelysocial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-3 me-2"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/extremelysocialcle/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </span>
                  </div>
                </div>
                <a href="#contact" className="btn-luxury mt-3">
                  Get In Touch
                </a>
              </div>
              <div className="col-lg-5">
                <div className="location-image">
                  <img
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop"
                    alt="Cleveland Event Space"
                    className="img-fluid w-100"
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
