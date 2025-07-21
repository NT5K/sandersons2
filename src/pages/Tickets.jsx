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

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        backgroundImage="./assets/images/hero/tickets-hero-wide.png"
        title="Reserve Your Experience"
        subtitle="An Evening with the Sanderson Sisters"
        height="60vh"
      />

      {/* Ticket Packages Section */}
      <section className="ticket-packages">
        <div className="container">
          <h2 className="section-title">Experience Packages</h2>
          <p className="section-subtitle">
            Choose your level of enchantment for an unforgettable evening in
            Salem
          </p>

          <div className="package-grid" id="packages">
            {/* Essential Enchantment Package */}
            <div className="package-card">
              <div className="package-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h3 className="package-name">Essential Enchantment</h3>
              <p className="package-subtitle">The Classic Salem Experience</p>
              <div className="package-price">$75</div>
              <p className="package-price-note">per person</p>

              <ul className="package-features">
                <li>2.5-hour immersive theatrical experience</li>
                <li>Welcome cocktail upon arrival</li>
                <li>Interactive participation in spell-casting rituals</li>
                <li>Professional performance by the Sanderson Sisters</li>
                <li>Atmospheric setting with period décor</li>
                <li>Complimentary themed appetizers</li>
                <li>Photo opportunities throughout the evening</li>
              </ul>

              <a href="#contact" className="package-button">
                Select Package
              </a>
            </div>

            {/* Deluxe Spellbinding Package (Featured) */}
            <div className="package-card package-featured">
              <div className="package-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="package-name">Deluxe Spellbinding</h3>
              <p className="package-subtitle">The Premium Salem Adventure</p>
              <div className="package-price">$125</div>
              <p className="package-price-note">per person</p>

              <ul className="package-features">
                <li>Everything in Essential Enchantment</li>
                <li>Three signature cocktails (one per sister)</li>
                <li>Priority seating in the front section</li>
                <li>Personal interaction with each Sanderson Sister</li>
                <li>Exclusive behind-the-scenes mini-tour</li>
                <li>Gourmet themed dinner service</li>
                <li>Commemorative spell book and quill</li>
                <li>Professional photos delivered digitally</li>
              </ul>

              <a href="#contact" className="package-button">
                Select Package
              </a>
            </div>

            {/* Black Flame VIP Package */}
            <div className="package-card">
              <div className="package-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3 className="package-name">Black Flame VIP</h3>
              <p className="package-subtitle">The Ultimate Luxury Experience</p>
              <div className="package-price">$200</div>
              <p className="package-price-note">per person</p>

              <ul className="package-features">
                <li>Everything in Deluxe Spellbinding</li>
                <li>Private pre-show meet & greet with the Sisters</li>
                <li>Reserved VIP lounge area with premium service</li>
                <li>Black Flame Candle signature cocktail experience</li>
                <li>Luxury three-course plated dinner</li>
                <li>Personalized spell scroll with your name</li>
                <li>Exclusive VIP gift bag with memorabilia</li>
                <li>Complimentary valet parking</li>
                <li>Private photo session with the Sisters</li>
              </ul>

              <a href="#contact" className="package-button">
                Select Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="event-details">
        <div className="container">
          <h2 className="section-title">Event Information</h2>
          <div className="details-grid">
            <div className="detail-info-card">
              <div className="detail-info-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Schedule</h3>
              <p>
                <strong>October 12-31, 2025</strong>
                <br />
                Fridays & Saturdays: 7:00 PM
                <br />
                Special Halloween Shows: Oct 29-31
                <br />
                Duration: 2.5 hours
              </p>
            </div>
            <div className="detail-info-card">
              <div className="detail-info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Venue</h3>
              <p>
                <strong>The Salem Sanctuary</strong>
                <br />
                Historic venue in downtown Salem
                <br />
                Intimate 60-seat capacity
                <br />
                Full accessibility accommodations
              </p>
            </div>
            <div className="detail-info-card">
              <div className="detail-info-icon">
                <i className="fas fa-id-card"></i>
              </div>
              <h3>Requirements</h3>
              <p>
                <strong>21+ Event</strong>
                <br />
                Valid photo ID required
                <br />
                Cocktail attire recommended
                <br />
                Costumes encouraged but optional
              </p>
            </div>
            <div className="detail-info-card">
              <div className="detail-info-icon">
                <i className="fas fa-parking"></i>
              </div>
              <h3>Logistics</h3>
              <p>
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
      </section>

      {/* Private Events Section */}
      <section className="private-events">
        <div className="container">
          <h2 className="section-title">Private Events & Group Bookings</h2>
          <div className="private-content">
            <div className="private-text">
              <h3>Exclusive Gatherings</h3>
              <p>
                Transform your special occasion into an unforgettable theatrical
                experience. Whether celebrating a birthday, bachelorette party,
                corporate event, or intimate gathering, the Sanderson Sisters
                can be exclusively yours.
              </p>

              <p>
                Our private events offer complete customization of the
                experience, from personalized interactions to custom cocktail
                menus that reflect your group's preferences.
              </p>

              <ul className="private-features">
                <li>Exclusive venue rental for groups of 20-60</li>
                <li>Customized performance elements</li>
                <li>Personalized welcome and farewell ceremonies</li>
                <li>Flexible menu and cocktail options</li>
                <li>Photography and videography permissions</li>
                <li>Dedicated event coordinator</li>
                <li>Corporate team-building activities available</li>
              </ul>

              <a href="#contact" className="btn-luxury">
                Inquire About Private Events
              </a>
            </div>
            <div className="private-image">
              <img
                src="https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?w=600&h=400&fit=crop"
                alt="Private Event at Salem Sanctuary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
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
      <section className="experience" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Ready to Experience the Magic?</h2>
            <p
              className="section-subtitle"
              style={{ maxWidth: "600px", margin: "0 auto 50px" }}
            >
              Join us for an evening where Salem's most legendary witches come
              to life in an unforgettable theatrical experience designed for the
              sophisticated adult audience.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-luxury">
                Book Your Experience
              </a>
              <a href="#contact" className="btn-luxury">
                Contact for Private Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;