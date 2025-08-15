import React, { useEffect } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const initializeGallery = (galleryID, items) => {
      if (window.jQuery && window.jQuery.fn.nanogallery2) {
        window.jQuery(`#${galleryID}`).nanogallery2({
          itemsBaseURL: `./assets/images/`,
          items: items,
          galleryMaxRows: 2,
          galleryDisplayMode: "rows",
          thumbnailHeight: "300",
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
        initializeGallery("sanderson_gallery", [
          {
            src: "edits/1.png",
            srct: "edits/1.png",
            title: "The Sanderson Sisters",
            description: "Professional performers in full character.",
          },
          {
            src: "edits/2.png",
            srct: "edits/2.png",
            title: "Spellbinding Performance",
            description: "Live musical numbers and storytelling.",
          },
          {
            src: "edits/3.png",
            srct: "edits/3.png",
            title: "Witch's Brew",
            description: "Signature cocktails for every guest.",
          },
          {
            src: "edits/4.png",
            srct: "edits/4.png",
            title: "Intimate Venue",
            description: "Atmospheric candlelit setting.",
          },
          {
            src: "edits/5.jpg",
            srct: "edits/5.jpg",
            title: "Guests in Costume",
            description: "Guests embrace the spirit of Salem.",
          },
          {
            src: "edits/6.png",
            srct: "edits/6.png",
            title: "Live Music",
            description: "Haunting melodies fill the night.",
          },
          {
            src: "edits/7.png",
            srct: "edits/7.png",
            title: "Magical Finale",
            description: "A night to remember forever.",
          },
        ]);
      } else {
        setTimeout(checkLibraries, 100);
      }
    };

    checkLibraries();
  }, []);

  return (
    <>
      <div>
        {/* Hero Section - KEEPING EXACTLY THE SAME */}
        <section
          id="home"
          className="hero d-flex align-items-center justify-content-center pb-3"
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-background"
            style={{ top: "60%" }}
          >
            <source src="./assets/videos/header/header1.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for text readability */}
          <div className="hero-overlay"></div>

          <div className="container position-relative z-3 text-center text-white">
            <div className="row">
              <div className="col-12">
                <div className="hero-content mx-auto">
                  <h1 className="mb-3">The Sanderson Sisters Siore</h1>
                  <h2 className="mb-5">An Exclusive Salem Experience</h2>
                  <p className="mx-auto mb-5">
                    Step into the shadows of Salem's most notorious witches. Our
                    sophisticated interpretation brings these iconic characters
                    to life through masterful storytelling, atmospheric design,
                    and interactive entertainment.
                  </p>
                  <div className="hero-icons d-flex justify-content-center gap-4 mb-5">
                    <div className="hero-icon text-center">
                      <i className="fas fa-hat-wizard mb-2"></i>
                      <p className="small mb-0">Professional Cast</p>
                    </div>
                    <div className="hero-icon text-center">
                      <i className="fas fa-cocktail mb-2"></i>
                      <p className="small mb-0">Themed Cocktails</p>
                    </div>
                    <div className="hero-icon text-center">
                      <i className="fas fa-users mb-2"></i>
                      <p className="small mb-0">Interactive Experience</p>
                    </div>
                  </div>
                  <a href="#experience" className="btn btn-luxury me-3">
                    Discover the Magic
                  </a>
                  <Link to="/tickets" className="btn btn-luxury">
                    Book Your Experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS STORY SECTION - NEW */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <div className="mb-4">
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "2.5rem",
                      color: "var(--gold-accent)",
                    }}
                  >
                    Now in Our Second Spellbinding Year
                  </h3>
                  <p
                    className="text-white-50 mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                    }}
                  >
                    Last season, the Sanderson Sisters were{" "}
                    <strong style={{ color: "var(--gold-accent)" }}>
                      completely sold out
                    </strong>{" "}
                    the entire month of October, half of September, and even
                    into November. This year, we've expanded the magic with two
                    enchanting options.
                  </p>
                  <div
                    className="alert"
                    style={{
                      background: "rgba(212, 175, 55, 0.1)",
                      border: "1px solid var(--gold-accent)",
                      color: "var(--gold-accent)",
                    }}
                  >
                    <i className="fas fa-fire me-2"></i>
                    <strong>Booking Fast:</strong> Five dates already reserved
                    for this season!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - UPDATED CONTENT */}
        <section id="experience" className="py-5">
          <div className="container">
            <div className="row align-items-center experience-content">
              <div className="col-md-6 order-md-1">
                <div className="experience-text">
                  <h2 className="section-title mb-4">
                    Two Magical Experiences Await
                  </h2>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.4rem",
                      lineHeight: "1.8",
                      color: "var(--silver)",
                      opacity: "0.9",
                    }}
                  >
                    From our immersive 90-minute Sanderson Sisters Soirée
                    featuring four bewitching musical numbers paired with
                    signature cocktails, to our flexible Sanderson Sisters
                    Appearances perfect for any venue or private event.
                  </p>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.4rem",
                      lineHeight: "1.8",
                      color: "var(--silver)",
                      opacity: "0.9",
                    }}
                  >
                    Every experience features professional performers, Billy
                    Butcherson as your theatrical greeter, and unforgettable
                    moments that transport guests into the mystical world of
                    Salem's most infamous witches.
                  </p>
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.4rem",
                      lineHeight: "1.8",
                      color: "var(--silver)",
                      opacity: "0.9",
                    }}
                  >
                    People are burnt out on the same old murder mysteries and
                    haunted houses. This immersive cocktail experience is the
                    new trend sweeping the country—and your guests will be
                    talking about it long after the night is over.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-2">
                <div className="experience-image rounded overflow-hidden shadow-lg">
                  <img
                    src="./assets/images/edits/3.png"
                    alt="Atmospheric Salem setting"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - UPDATED WITH NEW OFFERINGS */}
        <section className="services py-5 bg-dark">
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              Choose Your Enchantment
            </h2>
            <div className="row g-5 justify-content-center">
              <div className="col-lg-6">
                <DetailsCard
                  iconClass="fas fa-theater-masks"
                  title="Sanderson Sisters Soirée"
                  description="A complete 90-minute immersive experience featuring four live musical numbers, themed cocktails, Billy Butcherson greeter, and interactive storytelling. Perfect for venues seeking a premium entertainment experience."
                />
                <div className="text-center mt-3">
                  <Link to="/tickets" className="btn btn-luxury">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <DetailsCard
                  iconClass="fas fa-magic"
                  title="Sanderson Sisters Appearances"
                  description="Shorter, high-impact visits (1-2 hours) perfect for bars, restaurants, private parties, or special events. Includes three spine-tingling songs, photo opportunities, and magical mingling."
                />
                <div className="text-center mt-3">
                  <Link to="/tickets" className="btn btn-luxury">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION - UPDATED */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(45, 27, 105, 0.05) 50%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              What Makes Our Magic Special
            </h2>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <DetailsCard
                  iconClass="fas fa-crown"
                  title="Professional Cast"
                  description="Experienced performers bring Winifred, Sarah, and Mary to life with authentic costumes, makeup, and character work that rivals any professional theater production."
                />
              </div>
              <div className="col-lg-3 col-md-6">
                <DetailsCard
                  iconClass="fas fa-cocktail"
                  title="Signature Cocktails"
                  description="Four themed libations including Witch's Welcome, The Betrayal Brew, Black Flame Elixir, and Soul Sucker Sangria—each paired perfectly with the performance."
                />
              </div>
              <div className="col-lg-3 col-md-6">
                <DetailsCard
                  iconClass="fas fa-users"
                  title="Interactive Magic"
                  description="Guests become part of the show through spell-casting, choosing 'the virgin' for hilarious moments, and intimate character interactions throughout the evening."
                />
              </div>
              <div className="col-lg-3 col-md-6">
                <DetailsCard
                  iconClass="fas fa-calendar-check"
                  title="Flexible Booking"
                  description="Available late September through October 31st. Custom options available including Sanderson Sisters Brunches and venue-specific adaptations."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Info Section - VENUE INFO */}
        <section className="location py-5 bg-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="location-image">
                  <img
                    src="./assets/images/edits/2.png"
                    alt="Intimate venue setting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="ps-md-5">
                  <h2 className="section-title mb-4">
                    Bringing Magic to Your Venue
                  </h2>
                  <div className="info-content">
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span>
                        <strong>Availability:</strong> Late September through
                        October 31st
                      </span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-users"></i>
                      <span>
                        <strong>Capacity:</strong> Scalable for intimate venues
                        to larger spaces
                      </span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-magic"></i>
                      <span>
                        <strong>Setup:</strong> We provide performers, costumes,
                        music, and decor
                      </span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-envelope"></i>
                      <span>
                        <strong>Marketing:</strong> 7,000+ email database
                        promotion included
                      </span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-phone"></i>
                      <span>
                        <strong>Booking:</strong> Call Dominick at (216)
                        375-2550
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery">
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              Experience the Magic
            </h2>
            <div id="sanderson_gallery"></div>
          </div>
        </section>

        {/* REVIEWS SECTION - NEW */}
        <section className="py-5 bg-dark">
          <div className="container">
            <h2 className="section-title text-center text-white mb-5">
              What Our Guests Are Saying
            </h2>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card-base h-100 text-center">
                  <div className="review-stars mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      color: "var(--silver)",
                      fontStyle: "italic",
                    }}
                  >
                    "Absolutely spellbinding! The performers were incredible and
                    the cocktails were delicious. We felt like we were truly
                    transported to Salem. Already planning our return!"
                  </p>
                  <div className="review-author">
                    <strong>— Sarah M., Broadview Heights</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-base h-100 text-center">
                  <div className="review-stars mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      color: "var(--silver)",
                      fontStyle: "italic",
                    }}
                  >
                    "Best Halloween experience we've ever had! The attention to
                    detail was amazing, from the costumes to the interactive
                    moments. My friends are still talking about it."
                  </p>
                  <div className="review-author">
                    <strong>— Michael R., Cleveland</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-base h-100 text-center">
                  <div className="review-stars mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      color: "var(--silver)",
                      fontStyle: "italic",
                    }}
                  >
                    "This wasn't just dinner theater—it was a complete immersive
                    experience. The Sanderson Sisters were hilarious and
                    engaging. We loved every minute!"
                  </p>
                  <div className="review-author">
                    <strong>— Jennifer L., Westlake</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION - UPDATED */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(145deg, rgba(26, 26, 26, 0.95), rgba(42, 42, 42, 0.8))",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2.5rem",
                    color: "var(--gold-accent)",
                  }}
                >
                  Limited Run - Book Before We Vanish!
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem",
                    color: "var(--silver)",
                  }}
                >
                  October weekends are booking up fast, and this is the hottest
                  act in town. We're only booking a small number of venues to
                  keep this experience exclusive.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to="/tickets" className="btn btn-luxury">
                    <i className="fas fa-magic me-2"></i>
                    View Experiences
                  </Link>
                  <Link to="/contact" className="btn btn-luxury">
                    <i className="fas fa-phone me-2"></i>
                    Book Now
                  </Link>
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
