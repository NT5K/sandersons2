import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* 404 Content */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="mb-5">
                  <i
                    className="fas fa-hat-wizard mb-4"
                    style={{
                      fontSize: "4rem",
                      color: "var(--gold-accent)",
                      filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))",
                    }}
                  ></i>
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "2.5rem",
                      color: "var(--gold-accent)",
                      letterSpacing: "1px",
                    }}
                  >
                    Oops! This Page Has Vanished
                  </h2>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      color: "var(--silver)",
                      lineHeight: "1.8",
                      opacity: "0.9",
                    }}
                  >
                    It seems like the page you're looking for has disappeared
                    into the mystical void. Perhaps the Sanderson Sisters cast a
                    misdirection spell, or maybe you stumbled upon a broken
                    enchantment.
                  </p>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      color: "var(--silver)",
                      opacity: "0.8",
                    }}
                  >
                    Don't worry—our magic is still working perfectly! Use the
                    navigation above or the buttons below to find your way back
                    to the enchantment.
                  </p>

                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <Link to="/" className="btn btn-luxury">
                      <i className="fas fa-home me-2"></i>
                      Return Home
                    </Link>
                    <Link to="/tickets" className="btn btn-luxury">
                      <i className="fas fa-magic me-2"></i>
                      View Experiences
                    </Link>
                    <Link to="/contact" className="btn btn-luxury">
                      <i className="fas fa-phone me-2"></i>
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Quick Navigation */}
                <div className="row g-4 mt-5">
                  <div className="col-md-6">
                    <div
                      className="p-4 h-100"
                      style={{
                        background: "rgba(26, 26, 26, 0.8)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        backdropFilter: "blur(15px)",
                      }}
                    >
                      <i
                        className="fas fa-theater-masks mb-3"
                        style={{
                          fontSize: "2rem",
                          color: "var(--gold-accent)",
                        }}
                      ></i>
                      <h4
                        className="mb-3"
                        style={{
                          fontFamily: "Cinzel, serif",
                          color: "var(--gold-accent)",
                          fontSize: "1.3rem",
                        }}
                      >
                        Learn About the Experience
                      </h4>
                      <p
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          color: "var(--silver)",
                          opacity: "0.9",
                        }}
                      >
                        Discover our immersive Sanderson Sisters experiences,
                        from the full 90-minute Soirée to flexible venue
                        appearances.
                      </p>
                      <Link to="/about" className="btn btn-luxury btn-sm">
                        About Us
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="p-4 h-100"
                      style={{
                        background: "rgba(26, 26, 26, 0.8)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        backdropFilter: "blur(15px)",
                      }}
                    >
                      <i
                        className="fas fa-cocktail mb-3"
                        style={{
                          fontSize: "2rem",
                          color: "var(--gold-accent)",
                        }}
                      ></i>
                      <h4
                        className="mb-3"
                        style={{
                          fontFamily: "Cinzel, serif",
                          color: "var(--gold-accent)",
                          fontSize: "1.3rem",
                        }}
                      >
                        Signature Cocktails
                      </h4>
                      <p
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          color: "var(--silver)",
                          opacity: "0.9",
                        }}
                      >
                        Explore our enchanted libations, each perfectly paired
                        with musical performances for a truly magical evening.
                      </p>
                      <Link to="/cocktails" className="btn btn-luxury btn-sm">
                        View Cocktails
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
