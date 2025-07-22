import React, { useState } from "react";
import PageHero from "../components/PageHero";

// Component-specific styles
const ticketsStyles = `
/* Tickets Page Styles */

.ticket-packages {
  padding: 120px 0;
  position: relative;
  z-index: 2;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 80px;
}

.package-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.95),
    rgba(42, 42, 42, 0.8)
  );
  border: 2px solid rgba(212, 175, 55, 0.3);
  padding: 50px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  transition: all 0.6s ease;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.package-card::before {
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
  background: linear-gradient(
    145deg,
    rgba(45, 27, 105, 0.2),
    rgba(26, 26, 26, 0.95)
  );
  transform: scale(1.05);
}

.package-featured::after {
  content: "MOST POPULAR";
  position: absolute;
  top: 20px;
  right: -30px;
  background: var(--gold-accent);
  color: var(--deep-black);
  padding: 8px 40px;
  font-family: "Cinzel", serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  transform: rotate(45deg);
  z-index: 3;
}

.package-icon {
  font-size: 3rem;
  color: var(--gold-accent);
  margin-bottom: 25px;
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
}

.package-name {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--gold-accent);
  margin-bottom: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.package-subtitle {
  font-family: "Cinzel", serif;
  font-size: 1rem;
  color: var(--silver);
  opacity: 0.8;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.package-price {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--gold-accent);
  margin-bottom: 10px;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.package-price-note {
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
  color: var(--silver);
  opacity: 0.7;
  margin-bottom: 35px;
}

.package-features {
  list-style: none;
  padding: 0;
  margin: 35px 0;
  flex-grow: 1;
}

.package-features li {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.1rem;
  color: var(--silver);
  margin-bottom: 15px;
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
  margin-top: auto;
}

.package-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.2),
    transparent
  );
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

/* Event Details Section */
.event-details {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.detail-info-card {
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
}

.detail-info-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.detail-info-icon {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px;
}

.detail-info-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
  color: var(--gold-accent);
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.detail-info-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Private Events Section */
.private-events {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.1) 50%,
    transparent 100%
  );
}

.private-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-top: 60px;
}

.private-text h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.private-text p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 20px;
}

.private-features {
  list-style: none;
  padding: 0;
  margin: 30px 0;
}

.private-features li {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.2rem;
  color: var(--silver);
  margin-bottom: 12px;
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
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.3);
  overflow: hidden;
}

.private-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.private-image:hover img {
  transform: scale(1.05);
}

/* FAQ Section */
.faq-section {
  padding: 100px 0;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(212, 175, 55, 0.3);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--gold-accent);
}

.faq-question {
  background: none;
  border: none;
  width: 100%;
  padding: 25px 30px;
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

.faq-question:hover {
  background: rgba(26, 26, 26, 0.8);
}

.faq-answer {
  padding: 0 30px 25px;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.1rem;
  color: var(--silver);
  line-height: 1.7;
  opacity: 0.9;
  display: none;
}

.faq-answer.active {
  display: block;
}

.faq-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

/* Experience section for call to action */
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Responsive adjustments for tickets */
@media (max-width: 768px) {
  .package-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .package-featured {
    transform: none;
  }

  .package-card {
    padding: 40px 30px;
    min-height: auto;
  }

  .private-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .ticket-packages,
  .event-details,
  .private-events,
  .faq-section {
    padding: 80px 0;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
`;

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
      <style>{ticketsStyles}</style>
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
    </>
  );
};

export default Tickets;