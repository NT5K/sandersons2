import React, { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import "./Tickets.css";

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

  return (
    <>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/tickets-hero-wide.png"
          title="Reserve Your Experience"
          subtitle="An Evening with the Sanderson Sisters"
          height="70vh"
        />

        {/* Ticket Packages Section */}
        <section className="py-5 position-relative z-index-2">
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
                  <p className="package-subtitle mb-3">
                    The Classic Salem Experience
                  </p>
                  <div className="package-price">$75</div>
                  <p className="package-price-note mb-4">per person</p>

                  <ul className="list-unstyled text-start package-features flex-grow-1">
                    <li className="mb-3">
                      <i className="fas fa-magic text-gold me-2"></i>2.5-hour
                      immersive theatrical experience
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-cocktail text-gold me-2"></i>Welcome
                      cocktail upon arrival
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-hat-wizard text-gold me-2"></i>
                      Interactive participation in spell-casting rituals
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-mask text-gold me-2"></i>Professional
                      performance by the Sanderson Sisters
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-lamp text-gold me-2"></i>Atmospheric
                      setting with period décor
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-bread-slice text-gold me-2"></i>
                      Complimentary themed appetizers
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-camera text-gold me-2"></i>Photo
                      opportunities throughout the evening
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning mt-auto btn-luxury w-100"
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
                  <p className="package-subtitle mb-3">
                    The Premium Salem Adventure
                  </p>
                  <div className="package-price">$125</div>
                  <p className="package-price-note mb-4">per person</p>

                  <ul className="list-unstyled text-start package-features flex-grow-1">
                    <li className="mb-3">
                      <i className="fas fa-check text-gold me-2"></i>Everything
                      in Essential Enchantment
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-cocktail text-gold me-2"></i>Three
                      signature cocktails (one per sister)
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-chair text-gold me-2"></i>Priority
                      seating in the front section
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-handshake text-gold me-2"></i>
                      Personal interaction with each Sanderson Sister
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-camera text-gold me-2"></i>Exclusive
                      behind-the-scenes mini-tour
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-utensils text-gold me-2"></i>Gourmet
                      themed dinner service
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-book-sparkles text-gold me-2"></i>
                      Commemorative spell book and quill
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-images text-gold me-2"></i>
                      Professional photos delivered digitally
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning mt-auto btn-luxury w-100"
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
                  <p className="package-subtitle mb-3">
                    The Ultimate Luxury Experience
                  </p>
                  <div className="package-price">$200</div>
                  <p className="package-price-note mb-4">per person</p>

                  <ul className="list-unstyled text-start package-features flex-grow-1">
                    <li className="mb-3">
                      <i className="fas fa-check-double text-gold me-2"></i>
                      Everything in Deluxe Spellbinding
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-users text-gold me-2"></i>Private
                      pre-show meet & greet with the Sisters
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-couch text-gold me-2"></i>Reserved
                      VIP lounge area with premium service
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-fire text-gold me-2"></i>Black Flame
                      Candle signature cocktail experience
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-plate-utensils text-gold me-2"></i>
                      Luxury three-course plated dinner
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-scroll text-gold me-2"></i>
                      Personalized spell scroll with your name
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-gift text-gold me-2"></i>Exclusive
                      VIP gift bag with memorabilia
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-car text-gold me-2"></i>Complimentary
                      valet parking
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-camera-retro text-gold me-2"></i>
                      Private photo session with the Sisters
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn btn-outline-warning mt-auto btn-luxury w-100"
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
                    <li className="mb-3">
                      <i className="fas fa-house-chimney text-gold me-2"></i>
                      Exclusive venue rental for groups of 20-60
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-wand-magic-sparkles text-gold me-2"></i>
                      Customized performance elements
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-bell text-gold me-2"></i>Personalized
                      welcome and farewell ceremonies
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-cocktail text-gold me-2"></i>Flexible
                      menu and cocktail options
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-camera-retro text-gold me-2"></i>
                      Photography and videography permissions
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-handshake-angle text-gold me-2"></i>
                      Dedicated event coordinator
                    </li>
                    <li className="mb-3">
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
                  className={`faq-item ${
                    activeFaq === index ? "active" : ""
                  } mb-3`}
                >
                  <button
                    className="faq-question w-100 py-3 px-4"
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
                    <p className="pb-3 px-4 mb-0">{faq.answer}</p>
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
