import React, { useEffect } from "react";
import "./Home.css";

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
        <section className="py-5" id="about">
          <div className="container">
            <h2 className="section-title text-center mb-5">The Experience</h2>
            <div className="row align-items-center g-5 g-md-4">
              <div className="col-md-6 order-md-1">
                <div className="experience-text text-white">
                  <h3 className="mb-4 text-white">
                    A Tale of Salem's Most Infamous
                  </h3>
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
                <div className="experience-image rounded overflow-hidden shadow-lg">
                  <img
                    src="./assets/images/sample1.png"
                    alt="Atmospheric Salem setting"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services py-5 bg-dark">
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              Exclusive Offerings
            </h2>
            <div className="row g-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="detail-card text-center">
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
                <div className="detail-card text-center">
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
                <div className="detail-card text-center">
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
        <section className="practical-info py-5" id="tickets">
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              Information
            </h2>
            <div className="row align-items-center g-5 g-md-4">
              <div className="col-md-6">
                <div className="info-video rounded overflow-hidden shadow-lg">
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
                <div className="info-content text-white">
                  <div className="info-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>
                      <strong>Dates:</strong> October - November, select
                      evenings
                    </span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <span>
                      <strong>Duration:</strong> 2.5 hours immersive experience
                    </span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      <strong>Location:</strong> Exclusive Salem venue
                    </span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-id-card"></i>
                    <span>
                      <strong>Age Requirement:</strong> 21+ with valid ID
                    </span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-tshirt"></i>
                    <span>
                      <strong>Dress Code:</strong> Cocktail attire or costume
                    </span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-cocktail"></i>
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
        <section className="gallery py-5 bg-dark">
          <div className="container">
            <h2 className="section-title text-center text-white mb-3">
              Gallery
            </h2>
            <p className="section-subtitle text-center text-white-50 mb-5">
              Glimpses into the mystical world of the Sanderson Sisters
            </p>

            <div id="sanderson_gallery"></div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews py-5">
          <div className="container">
            <h2 className="section-title text-center text-white mb-3">
              Reviews
            </h2>
            <p className="section-subtitle text-center text-white-50 mb-5">
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
        <section className="location py-5 bg-dark" id="location">
          <div className="container">
            <div className="row align-items-center g-5 g-md-4">
              <div className="col-lg-7 text-white">
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
                  <div className="info-item d-flex align-items-center mb-2">
                    <i className="fas fa-map-marker-alt me-4"></i>
                    <span>
                      <strong>Location:</strong> Cleveland, Ohio
                    </span>
                  </div>
                  <div className="info-item d-flex align-items-center mb-2">
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
                <div className="location-image rounded overflow-hidden shadow-lg">
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
