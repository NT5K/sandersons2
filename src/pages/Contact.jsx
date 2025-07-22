import React, { useState } from "react";
import PageHero from "../components/PageHero";

// Component-specific styles
const contactStyles = `
/* Contact Page Styles */

.contact-section {
  padding: 120px 0;
  position: relative;
  z-index: 2;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-form-container {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.95),
    rgba(42, 42, 42, 0.8)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 50px 40px;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
}

.contact-form-container::before {
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

.contact-form-container:hover::before {
  left: 100%;
}

.contact-form {
  position: relative;
  z-index: 2;
}

.contact-form h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: var(--gold-accent);
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

.btn-submit {
  background: linear-gradient(45deg, var(--deep-black), var(--charcoal));
  border: 2px solid var(--gold-accent);
  color: var(--gold-accent);
  font-family: "Cinzel", serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 18px 45px;
  font-size: 1rem;
  border-radius: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  width: 100%;
  margin-top: 20px;
}

.btn-submit::before {
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

.btn-submit:hover {
  background: var(--gold-accent);
  color: var(--deep-black);
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(212, 175, 55, 0.3);
}

.btn-submit:hover::before {
  left: 100%;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-card {
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
  position: relative;
  overflow: hidden;
}

.contact-card::before {
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

.contact-card:hover::before {
  left: 100%;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.contact-icon {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px;
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
}

.contact-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
  color: var(--gold-accent);
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.contact-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 10px;
}

.contact-card a {
  color: var(--silver);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-card a:hover {
  color: var(--gold-accent);
}

/* Office Hours Section */
.office-hours {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.hours-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hours-info h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.hours-list {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  color: var(--silver);
  line-height: 2;
}

.hours-list .day {
  color: var(--gold-accent);
  font-weight: 600;
  display: inline-block;
  width: 140px;
}

.location-map {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 30px;
  text-align: center;
}

.map-placeholder {
  background: linear-gradient(45deg, var(--charcoal), var(--smoke));
  border: 1px solid rgba(212, 175, 55, 0.3);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.map-placeholder i {
  font-size: 3rem;
  color: var(--gold-accent);
  opacity: 0.7;
}

/* Social Media Section */
.social-section {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.1) 50%,
    transparent 100%
  );
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.social-card {
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

.social-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.social-card i {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px;
}

.social-card h4 {
  font-family: "Cinzel", serif;
  color: var(--gold-accent);
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.social-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 20px;
}

.social-link {
  color: var(--gold-accent);
  text-decoration: none;
  font-family: "Cinzel", serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--silver);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

/* Emergency Contact Section */
.emergency-contact {
  padding: 80px 0;
  background: rgba(139, 0, 0, 0.1);
  border-top: 1px solid rgba(139, 0, 0, 0.3);
  border-bottom: 1px solid rgba(139, 0, 0, 0.3);
}

.emergency-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.emergency-content h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: var(--ember);
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.emergency-content p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.2rem;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 15px;
}

.emergency-phone {
  font-family: "Cinzel", serif;
  font-size: 1.4rem;
  color: var(--gold-accent);
  font-weight: 600;
  letter-spacing: 2px;
}

/* Responsive adjustments for contact */
@media (max-width: 768px) {
  .contact-content,
  .hours-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form-container {
    padding: 40px 30px;
  }

  .contact-section,
  .office-hours,
  .social-section {
    padding: 80px 0;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }
}
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    preferredDate: "",
    guestCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage(
        "Thank you for your message! We'll get back to you within 24 hours."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        preferredDate: "",
        guestCount: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage(
        "There was an error sending your message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{contactStyles}</style>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/contact-hero-wide.png"
          title="Contact Us"
          subtitle="Begin Your Enchanted Journey"
          height="60vh"
        />

        {/* Contact Form Section */}
        <section className="contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to experience the magic? Let us help you plan your perfect
              evening with the Sanderson Sisters.
            </p>

            <div className="contact-content">
              <div className="contact-form-container">
                <div className="contact-form">
                  <h3>Send Us a Message</h3>

                  {submitMessage && (
                    <div
                      className="alert alert-info"
                      style={{
                        background: "rgba(212, 175, 55, 0.1)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        color: "var(--gold-accent)",
                        padding: "15px",
                        marginBottom: "25px",
                        fontFamily: '"Cormorant Garamond", serif',
                      }}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(216) 555-0123"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType" className="form-label">
                      Inquiry Type
                    </label>
                    <select
                      className="form-select"
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your inquiry type</option>
                      <option value="general-booking">
                        General Ticket Booking
                      </option>
                      <option value="private-event">Private Event Inquiry</option>
                      <option value="corporate-event">Corporate Event</option>
                      <option value="group-booking">
                        Group Booking (10+ people)
                      </option>
                      <option value="gift-certificate">Gift Certificate</option>
                      <option value="media-press">Media & Press</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guestCount" className="form-label">
                      Number of Guests
                    </label>
                    <select
                      className="form-select"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                    >
                      <option value="">Select guest count</option>
                      <option value="1-2">1-2 guests</option>
                      <option value="3-5">3-5 guests</option>
                      <option value="6-10">6-10 guests</option>
                      <option value="11-20">11-20 guests</option>
                      <option value="21-40">21-40 guests</option>
                      <option value="40+">40+ guests (Full venue)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your event, special requests, dietary restrictions, or any questions you have about the Sanderson Sisters experience..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="btn-submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+1-216-555-0199">(216) 555-0199</a>
                  </p>
                  <p>
                    Monday - Friday: 10 AM - 6 PM
                    <br />
                    Saturday: 10 AM - 4 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@extremelysocial.com">
                      info@extremelysocial.com
                    </a>
                  </p>
                  <p>General inquiries and bookings</p>
                  <p>
                    <a href="mailto:private@extremelysocial.com">
                      private@extremelysocial.com
                    </a>
                  </p>
                  <p>Private events and corporate bookings</p>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>Location</h3>
                  <p>
                    <strong>Extremely Social</strong>
                    <br />
                    Cleveland, Ohio
                  </p>
                  <p>
                    Event venues vary by booking.
                    <br />
                    Specific location details provided
                    <br />
                    upon reservation confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & Location */}
        <section className="office-hours">
          <div className="container">
            <h2 className="section-title">Visit Our Studio</h2>
            <div className="hours-content">
              <div className="hours-info">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <p>
                    <span className="day">Monday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="day">Tuesday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="day">Wednesday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="day">Thursday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="day">Friday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="day">Saturday:</span> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <span className="day">Sunday:</span> Closed
                  </p>
                </div>
                <p
                  style={{
                    marginTop: "30px",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1.2rem",
                    color: "var(--silver)",
                    opacity: "0.8",
                  }}
                >
                  <em>
                    During event season (October - November), extended hours
                    available by appointment.
                  </em>
                </p>
              </div>
              <div className="location-map">
                <div className="map-placeholder">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <p
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: "var(--gold-accent)",
                    marginBottom: "10px",
                  }}
                >
                  Cleveland, Ohio
                </p>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: "var(--silver)",
                    fontSize: "1.1rem",
                  }}
                >
                  Detailed address provided upon booking confirmation for security
                  and exclusivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-section">
          <div className="container">
            <h2 className="section-title">Follow Our Journey</h2>
            <p className="section-subtitle">
              Stay connected with Extremely Social for the latest updates,
              behind-the-scenes content, and upcoming events.
            </p>

            <div className="social-grid">
              <div className="social-card">
                <i className="fab fa-facebook-f"></i>
                <h4>Facebook</h4>
                <p>
                  Get updates on upcoming shows, exclusive content, and connect
                  with our community of magic enthusiasts.
                </p>
                <a
                  href="https://www.facebook.com/extremelysocial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Follow Us
                </a>
              </div>

              <div className="social-card">
                <i className="fab fa-instagram"></i>
                <h4>Instagram</h4>
                <p>
                  Behind-the-scenes photos, costume details, cocktail creations,
                  and glimpses into the mystical world we create.
                </p>
                <a
                  href="https://www.instagram.com/extremelysocialcle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Follow Us
                </a>
              </div>

              <div className="social-card">
                <i className="fas fa-envelope-open-text"></i>
                <h4>Newsletter</h4>
                <p>
                  Be the first to know about new shows, early bird discounts, and
                  exclusive subscriber-only events.
                </p>
                <a
                  href="mailto:info@extremelysocial.com?subject=Newsletter Subscription"
                  className="social-link"
                >
                  Subscribe
                </a>
              </div>

              <div className="social-card">
                <i className="fas fa-calendar-star"></i>
                <h4>Events</h4>
                <p>
                  Join our mailing list for invitations to special events, season
                  announcements, and VIP experiences.
                </p>
                <a
                  href="mailto:info@extremelysocial.com?subject=VIP Events List"
                  className="social-link"
                >
                  Join VIP List
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="emergency-contact">
          <div className="container">
            <div className="emergency-content">
              <h3>Day-of-Event Contact</h3>
              <p>
                For urgent matters on the day of your event, including late
                arrivals, emergencies, or last-minute changes:
              </p>
              <p className="emergency-phone">Emergency Line: (216) 555-0911</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;