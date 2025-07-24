import React, { useState } from "react";
import PageHero from "../components/PageHero";

const Tickets = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What should I expect during the experience?",
      answer:
        "You'll be transported into the world of the Sanderson Sisters through immersive storytelling, live performance, interactive spell-casting, and atmospheric entertainment. The experience combines theater, cocktails, and audience participation in an intimate, candlelit setting that brings the magic of Salem to life.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "We recommend cocktail attire for the sophisticated atmosphere. Costumes are welcomed and encouraged—many guests enjoy dressing as witches, in period attire, or Halloween-themed outfits. However, costumes are entirely optional, and elegant evening wear is equally appropriate.",
    },
    {
      question: "Are there dietary accommodations available?",
      answer:
        "Yes, we accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and other allergies. Please inform us of any dietary needs when making your reservation, and our culinary team will ensure appropriate alternatives are prepared.",
    },
    {
      question: "Can I purchase tickets as gifts?",
      answer:
        "Absolutely! Our experience makes an exceptional gift. Gift certificates are available for all package levels and can be purchased for specific dates or as open-ended vouchers. Digital gift certificates can be delivered immediately via email with custom messaging.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 7+ days before the event receive a full refund. Cancellations 3-6 days prior receive a 50% refund. Cancellations within 48 hours are non-refundable, though we offer date transfers subject to availability. We understand plans change and work with guests when possible.",
    },
    {
      question: "Is photography allowed during the show?",
      answer:
        "Photography is welcome during designated moments and intermissions. We provide guided photo opportunities with the Sisters and sets. Flash photography is not permitted during performances to maintain the atmospheric lighting and respect for other guests' immersion.",
    },
  ];

  const faqComponentStyles = `
    .faq-question:hover {
        background: rgba(26, 26, 26, 0.8);
    }
    .faq-icon {
        font-size: 1rem;
        transition: transform 0.3s ease;
    }
    .faq-item.active .faq-icon {
        transform: rotate(45deg);
    }
    .faq-answer {
        display: none; /* Hide by default */
        padding: 0 30px 25px; /* Original padding */
    }
    .faq-answer.active {
        display: block; /* Show when active */
    }
    /* Keeping some specific custom styles not directly replaced by Bootstrap */
    .package-card {
        background: linear-gradient(145deg, rgba(26, 26, 26, 0.95), rgba(42, 42, 42, 0.8));
        border: 2px solid rgba(212, 175, 55, 0.3);
        backdrop-filter: blur(15px);
        transition: all 0.6s ease;
        position: relative;
        overflow: hidden;
    }
    .package-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
        transition: left 0.8s ease;
    }
    .package-card:hover::before {
        left: 100%;
    }
    .package-card:hover {
        transform: translateY(-10px);
        border-color: var(--gold-accent);
        box-shadow: 0 25px 50px rgba(212, 175, 55, 0.3);
    }
    .package-featured {
        border-color: var(--gold-accent);
        background: linear-gradient(145deg, rgba(45, 27, 105, 0.2), rgba(26, 26, 26, 0.95));
    }
      .package-featured::after {
        content: "MOST POPULAR";
        position: absolute;
        top: 35px;
        right: -45px;
        background: var(--gold-accent);
        color: var(--deep-black);
        padding: 10px 45px;
        font-family: "Cinzel", serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 1px;
        transform: rotate(45deg);
        z-index: 3;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .package-icon {
        font-size: 3rem;
        color: var(--gold-accent);
        filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
    }
    .package-name {
        font-family: "Playfair Display", serif;
        font-size: 2.2rem;
        font-weight: 700;
        color: var(--gold-accent);
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    .package-subtitle {
        font-family: "Cinzel", serif;
        font-size: 1rem;
        color: var(--silver);
        opacity: 0.8;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .package-price {
        font-family: "Playfair Display", serif;
        font-size: 3rem;
        font-weight: 700;
        color: var(--gold-accent);
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    .package-price-note {
        font-family: "Cormorant Garamond", serif;
        font-size: 1rem;
        color: var(--silver);
        opacity: 0.7;
    }
    .package-features li {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.1rem;
        color: var(--silver);
        padding-left: 25px;
        position: relative;
        text-align: left;
        opacity: 0.9;
    }
    .package-features li::before {
        content: "✦";
        position: absolute;
        left: 0;
        color: var(--gold-accent);
        font-size: 1rem;
    }
    .package-button {
        background: linear-gradient(45deg, var(--deep-black), var(--charcoal));
        border: 2px solid var(--gold-accent);
        color: var(--gold-accent);
        font-family: "Cinzel", serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 18px 35px;
        font-size: 1rem;
        border-radius: 0;
        position: relative;
        overflow: hidden;
        transition: all 0.4s ease;
        text-decoration: none;
        display: inline-block;
        width: 100%;
    }
    .package-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
        transition: left 0.6s ease;
    }
    .package-button:hover {
        background: var(--gold-accent);
        color: var(--deep-black);
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        text-decoration: none;
    }
    .package-button:hover::before {
        left: 100%;
    }

    .detail-info-card {
        background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(42, 42, 42, 0.6));
        border: 1px solid rgba(212, 175, 55, 0.3);
        backdrop-filter: blur(15px);
        transition: all 0.5s ease;
    }
    .detail-info-card:hover {
        transform: translateY(-5px);
        border-color: var(--gold-accent);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }
    .detail-info-icon {
        font-size: 2.5rem;
        color: var(--gold-accent);
    }
    .detail-info-card h3 {
        font-family: "Playfair Display", serif;
        font-size: 1.6rem;
        color: var(--gold-accent);
        letter-spacing: 1px;
    }
    .detail-info-card p {
        font-family: "Cormorant Garamond", serif;
        color: var(--silver);
        line-height: 1.6;
        font-size: 1.1rem;
        opacity: 0.9;
    }

    .private-text h3 {
        font-family: "Playfair Display", serif;
        font-size: 2.5rem;
        color: var(--gold-accent);
        letter-spacing: 1px;
    }
    .private-text p {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.3rem;
        line-height: 1.8;
        color: var(--silver);
        opacity: 0.9;
    }
    .private-features li {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.2rem;
        color: var(--silver);
        padding-left: 25px;
        position: relative;
        opacity: 0.9;
    }
    .private-features li::before {
        content: "★";
        position: absolute;
        left: 0;
        color: var(--gold-accent);
        font-size: 1rem;
    }
    .private-image {
        border: 1px solid rgba(212, 175, 55, 0.3);
        overflow: hidden;
    }
    .private-image img {
        transition: transform 0.6s ease;
    }
    .private-image:hover img {
        transform: scale(1.05);
    }

    .faq-item {
        background: rgba(26, 26, 26, 0.6);
        border: 1px solid rgba(212, 175, 55, 0.3);
        transition: all 0.3s ease;
    }
    .faq-item:hover {
        border-color: var(--gold-accent);
    }
    .faq-question {
        background: none;
        border: none;
        text-align: left;
        font-family: "Cinzel", serif;
        font-size: 1.2rem;
        color: var(--gold-accent);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
        /* Call Now to Reserve Section */
    .call-now-section {
        background: linear-gradient(180deg, rgba(45, 27, 105, 0.1) 0%, transparent 100%);
        border-top: 1px solid rgba(212, 175, 55, 0.3);
        border-bottom: 1px solid rgba(212, 175, 55, 0.3);
    }

    .call-now-title {
        font-family: "Playfair Display", serif;
        font-size: 2.5rem;
        color: var(--gold-accent);
        letter-spacing: 2px;
        text-transform: uppercase;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }

    .call-now-description {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.4rem;
        color: var(--silver);
        opacity: 0.9;
        line-height: 1.8;
    }

    .call-now-icon {
        font-size: 2rem;
        color: var(--gold-accent);
        filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
    }

    .call-now-phone {
        font-family: "Cinzel", serif;
        font-size: 2.2rem;
        color: var(--gold-accent);
        font-weight: 600;
        letter-spacing: 3px;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        transition: all 0.3s ease;
    }

    .call-now-phone:hover {
        color: var(--silver);
        text-shadow: 0 0 25px rgba(212, 175, 55, 0.5);
        transform: scale(1.02);
    }

    .call-now-hours {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.1rem;
        color: var(--silver);
        opacity: 0.8;
    }

    .call-now-hours strong {
        color: var(--gold-accent);
    }

    /* Responsive adjustments for call now section */
    @media (max-width: 768px) {
        .call-now-title {
            font-size: 2rem;
        }
        
        .call-now-phone {
            font-size: 1.8rem;
            letter-spacing: 2px;
        }
        
        .call-now-description {
            font-size: 1.2rem;
        }

        .package-grid {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        /* Adjust FAQ answer padding for smaller screens to prevent wobble */
        .faq-answer {
            padding: 0 15px 25px; /* Reduced horizontal padding */
        }
    }

    /* Ensure consistent horizontal centering for all main sections */
    .container {
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
    }
  `;

  return (
    <>
      <style>{faqComponentStyles}</style>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/tickets-hero-wide.png"
          title="Reserve Your Experience"
          subtitle="An Evening with the Sanderson Sisters"
          height="60vh"
        />

        {/* Ticket Packages Section */}
        <section className="py-5" style={{ position: "relative", zIndex: 2 }}>
          <div className="container">
            <h2 className="text-center mb-4 section-title">
              Experience Packages
            </h2>
            <p className="text-center mb-5 section-subtitle">
              Choose your level of enchantment for an unforgettable evening in
              Salem
            </p>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              {/* Essential Enchantment Package */}
              <div className="col">
                <div className="card h-100 p-4 text-center package-card">
                  <div className="package-icon mb-3">
                    <i className="fas fa-moon"></i>
                  </div>
                  <h3 className="card-title package-name">
                    Essential Enchantment
                  </h3>
                  <p className="card-subtitle mb-3 package-subtitle">
                    The Classic Salem Experience
                  </p>
                  <div className="package-price">$75</div>
                  <p className="package-price-note">per person</p>

                  <ul className="list-unstyled text-start package-features flex-grow-1">
                    <li>
                      <i className="fas fa-magic text-gold me-2"></i>2.5-hour
                      immersive theatrical experience
                    </li>
                    <li>
                      <i className="fas fa-cocktail text-gold me-2"></i>Welcome
                      cocktail upon arrival
                    </li>
                    <li>
                      <i className="fas fa-hat-wizard text-gold me-2"></i>
                      Interactive participation in spell-casting rituals
                    </li>
                    <li>
                      <i className="fas fa-mask text-gold me-2"></i>Professional
                      performance by the Sanderson Sisters
                    </li>
                    <li>
                      <i className="fas fa-lamp text-gold me-2"></i>Atmospheric
                      setting with period décor
                    </li>
                    <li>
                      <i className="fas fa-bread-slice text-gold me-2"></i>
                      Complimentary themed appetizers
                    </li>
                    <li>
                      <i className="fas fa-camera text-gold me-2"></i>Photo
                      opportunities throughout the evening
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning mt-auto package-button"
                  >
                    Select Package
                  </a>
                </div>
              </div>

              {/* Deluxe Spellbinding Package (Featured) */}
              <div className="col">
                <div className="card h-100 p-4 text-center package-card package-featured">
                  <div className="package-icon mb-3">
                    <i className="fas fa-star"></i>
                  </div>
                  <h3 className="card-title package-name">
                    Deluxe Spellbinding
                  </h3>
                  <p className="card-subtitle mb-3 package-subtitle">
                    The Premium Salem Adventure
                  </p>
                  <div className="package-price">$125</div>
                  <p className="package-price-note">per person</p>

                  <ul className="list-unstyled text-start package-features flex-grow-1">
                    <li>
                      <i className="fas fa-check text-gold me-2"></i>Everything
                      in Essential Enchantment
                    </li>
                    <li>
                      <i className="fas fa-cocktail text-gold me-2"></i>Three
                      signature cocktails (one per sister)
                    </li>
                    <li>
                      <i className="fas fa-chair text-gold me-2"></i>Priority
                      seating in the front section
                    </li>
                    <li>
                      <i className="fas fa-handshake text-gold me-2"></i>
                      Personal interaction with each Sanderson Sister
                    </li>
                    <li>
                      <i className="fas fa-camera text-gold me-2"></i>Exclusive
                      behind-the-scenes mini-tour
                    </li>
                    <li>
                      <i className="fas fa-utensils text-gold me-2"></i>Gourmet
                      themed dinner service
                    </li>
                    <li>
                      <i className="fas fa-book-sparkles text-gold me-2"></i>
                      Commemorative spell book and quill
                    </li>
                    <li>
                      <i className="fas fa-images text-gold me-2"></i>
                      Professional photos delivered digitally
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning mt-auto package-button"
                  >
                    Select Package
                  </a>
                </div>
              </div>

              {/* Black Flame VIP Package */}
              <div className="col">
                <div className="card h-100 p-4 text-center package-card">
                  <div className="package-icon mb-3">
                    <i className="fas fa-crown"></i>
                  </div>
                  <h3 className="card-title package-name">Black Flame VIP</h3>
                  <p className="card-subtitle mb-3 package-subtitle">
                    The Ultimate Luxury Experience
                  </p>
                  <div className="package-price">$200</div>
                  <p className="package-price-note">per person</p>

                  <ul className="list-unstyled text-start package-features flex-grow-1">
                    <li>
                      <i className="fas fa-check-double text-gold me-2"></i>
                      Everything in Deluxe Spellbinding
                    </li>
                    <li>
                      <i className="fas fa-users text-gold me-2"></i>Private
                      pre-show meet & greet with the Sisters
                    </li>
                    <li>
                      <i className="fas fa-couch text-gold me-2"></i>Reserved
                      VIP lounge area with premium service
                    </li>
                    <li>
                      <i className="fas fa-fire text-gold me-2"></i>Black Flame
                      Candle signature cocktail experience
                    </li>
                    <li>
                      <i className="fas fa-plate-utensils text-gold me-2"></i>
                      Luxury three-course plated dinner
                    </li>
                    <li>
                      <i className="fas fa-scroll text-gold me-2"></i>
                      Personalized spell scroll with your name
                    </li>
                    <li>
                      <i className="fas fa-gift text-gold me-2"></i>Exclusive
                      VIP gift bag with memorabilia
                    </li>
                    <li>
                      <i className="fas fa-car text-gold me-2"></i>Complimentary
                      valet parking
                    </li>
                    <li>
                      <i className="fas fa-camera-retro text-gold me-2"></i>
                      Private photo session with the Sisters
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning mt-auto package-button"
                  >
                    Select Package
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call Now to Reserve Section */}
        <section className="py-5 text-center call-now-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3 className="mb-4 call-now-title">Reserve by Phone</h3>
                <p className="mb-4 call-now-description">
                  Prefer to speak with our enchantment specialists? Call now to
                  reserve your magical evening and receive personalized
                  assistance with your Salem experience.
                </p>
                <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                  <i className="fas fa-phone-alt call-now-icon"></i>
                  <a
                    href="tel:+1-216-555-0199"
                    className="text-decoration-none call-now-phone"
                  >
                    (216) 555-0199
                  </a>
                </div>
                <p className="mb-0 call-now-hours">
                  <strong>Hours:</strong> Monday - Friday: 10 AM - 6 PM |
                  Saturday: 10 AM - 4 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section
          className="py-5 bg-dark"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="text-center mb-4 section-title">
              Event Information
            </h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
              <div className="col">
                <div className="card h-100 p-4 text-center detail-info-card">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h3 className="card-title text-gold mb-3">Schedule</h3>
                  <p className="card-text text-silver">
                    <strong>October 12-31, 2025</strong>
                    <br />
                    Fridays & Saturdays: 7:00 PM
                    <br />
                    Special Halloween Shows: Oct 29-31
                    <br />
                    Duration: 2.5 hours
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 p-4 text-center detail-info-card">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="card-title text-gold mb-3">Venue</h3>
                  <p className="card-text text-silver">
                    <strong>The Salem Sanctuary</strong>
                    <br />
                    Historic venue in downtown Salem
                    <br />
                    Intimate 60-seat capacity
                    <br />
                    Full accessibility accommodations
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 p-4 text-center detail-info-card">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <h3 className="card-title text-gold mb-3">Requirements</h3>
                  <p className="card-text text-silver">
                    <strong>21+ Event</strong>
                    <br />
                    Valid photo ID required
                    <br />
                    Cocktail attire recommended
                    <br />
                    Costumes encouraged but optional
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 p-4 text-center detail-info-card">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-parking"></i>
                  </div>
                  <h3 className="card-title text-gold mb-3">Logistics</h3>
                  <p className="card-text text-silver">
                    <strong>Arrival</strong>
                    <br />
                    Please arrive 30 minutes early
                    <br />
                    Street parking available
                    <br />
                    VIP packages include valet service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Events Section */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(45, 27, 105, 0.1) 50%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="text-center mb-4 section-title">
              Private Events & Group Bookings
            </h2>
            <div className="row g-5 align-items-center mt-4">
              <div className="col-lg-6">
                <div className="private-text">
                  <h3 className="text-gold mb-4">Exclusive Gatherings</h3>
                  <p className="text-silver mb-3">
                    Transform your special occasion into an unforgettable
                    theatrical experience. Whether celebrating a birthday,
                    bachelorette party, corporate event, or intimate gathering,
                    the Sanderson Sisters can be exclusively yours.
                  </p>

                  <p className="text-silver mb-4">
                    Our private events offer complete customization of the
                    experience, from personalized interactions to custom
                    cocktail menus that reflect your group's preferences.
                  </p>

                  <ul className="list-unstyled mb-4 private-features">
                    <li>
                      <i className="fas fa-house-chimney text-gold me-2"></i>
                      Exclusive venue rental for groups of 20-60
                    </li>
                    <li>
                      <i className="fas fa-wand-magic-sparkles text-gold me-2"></i>
                      Customized performance elements
                    </li>
                    <li>
                      <i className="fas fa-bell text-gold me-2"></i>Personalized
                      welcome and farewell ceremonies
                    </li>
                    <li>
                      <i className="fas fa-cocktail text-gold me-2"></i>Flexible
                      menu and cocktail options
                    </li>
                    <li>
                      <i className="fas fa-camera-retro text-gold me-2"></i>
                      Photography and videography permissions
                    </li>
                    <li>
                      <i className="fas fa-handshake-angle text-gold me-2"></i>
                      Dedicated event coordinator
                    </li>
                    <li>
                      <i className="fas fa-briefcase text-gold me-2"></i>
                      Corporate team-building activities available
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning btn-luxury"
                  >
                    Inquire About Private Events
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="private-image border border-warning overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?w=600&h=400&fit=crop"
                    alt="Private Event at Salem Sanctuary"
                    className="img-fluid w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5 faq-section">
          <div className="container">
            <h2 className="text-center mb-4 section-title">
              Frequently Asked Questions
            </h2>
            <div
              className="faq-container mx-auto"
              style={{ maxWidth: "800px" }}
            >
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                >
                  <button
                    className="faq-question w-100 py-3 px-4" // Added Bootstrap padding/width
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <i
                      className={`fas fa-plus faq-icon ${
                        activeFaq === index ? "active" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`faq-answer ${
                      activeFaq === index ? "active" : ""
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-5"
          style={{
            padding: "100px 0",
            position: "relative",
            zIndex: 2,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(26, 26, 26, 0.5) 50%, transparent 100%)",
          }}
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-3">
                Ready to Experience the Magic?
              </h2>
              <p
                className="section-subtitle mb-5 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                Join us for an evening where Salem's most legendary witches come
                to life in an unforgettable theatrical experience designed for
                the sophisticated adult audience.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="btn btn-outline-warning btn-lg btn-luxury"
                >
                  Book Your Experience
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-warning btn-lg btn-luxury"
                >
                  Contact for Private Events
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tickets;
