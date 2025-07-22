import React, { useState } from "react";
import PageHero from "../components/PageHero";

const contactStyles = `
/* Contact Page Styles */

/* Section Padding (Unified) */
.contact-section,
.office-hours,
.social-section {
  padding: 120px 0; /* Consistent vertical padding for main sections */
  position: relative;
  z-index: 2;
}

/* Contact Content Grid */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; /* Keep custom gap for grid */
  align-items: start;
}

/* Form Container */
.contact-form-container {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.95),
    rgba(42, 42, 42, 0.8)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 50px 40px; /* Keep custom padding */
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
  margin-bottom: 30px; /* Keep custom margin */
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

/* Form Controls (Bootstrap handles most of this, keeping custom resize) */
textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

/* Submit Button */
.btn-submit {
  background: linear-gradient(45deg, var(--deep-black), var(--charcoal));
  border: 2px solid var(--gold-accent);
  color: var(--gold-accent);
  font-family: "Cinzel", serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 18px 45px; /* Keep custom padding */
  font-size: 1rem;
  border-radius: 0; /* Bootstrap applies rounding, explicitly remove */
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  width: 100%;
  margin-top: 20px; /* Keep custom margin */
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

/* Contact Info Section */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Keep custom gap for flex items */
}

.contact-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8),
    rgba(42, 42, 42, 0.6)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px; /* Keep custom padding */
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
  margin-bottom: 20px; /* Keep custom margin */
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
}

.contact-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
  color: var(--gold-accent);
  margin-bottom: 15px; /* Keep custom margin */
  letter-spacing: 1px;
  text-transform: uppercase;
}

.contact-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 10px; /* Keep custom margin */
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
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.hours-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; /* Keep custom gap for grid */
  align-items: center;
}

.hours-info h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 30px; /* Keep custom margin */
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
  padding: 30px; /* Keep custom padding */
  text-align: center;
}

.map-placeholder {
  background: linear-gradient(45deg, var(--charcoal), var(--smoke));
  border: 1px solid rgba(212, 175, 55, 0.3);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Keep custom margin */
}

.map-placeholder i {
  font-size: 3rem;
  color: var(--gold-accent);
  opacity: 0.7;
}

/* Social Media Section */
.social-section {
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
  gap: 40px; /* Keep custom gap for grid */
}

.social-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8),
    rgba(42, 42, 42, 0.6)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px; /* Keep custom padding */
  text-align: center;
  transition: all 0.5s ease;
  backdrop-filter: blur(15px);
  height: 100%; /* Ensure cards are same height */
}

.social-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.social-card i {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px; /* Keep custom margin */
}

.social-card h4 {
  font-family: "Cinzel", serif;
  color: var(--gold-accent);
  margin-bottom: 15px; /* Keep custom margin */
  text-transform: uppercase;
  letter-spacing: 1px;
}

.social-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 20px; /* Keep custom margin */
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
  padding: 80px 0; /* Keep custom padding */
  background: rgba(139, 0, 0, 0.1);
  border-top: 1px solid rgba(139, 0, 0, 0.3);
  border-bottom: 1px solid rgba(139, 0, 0, 0.3);
}

.emergency-content {
  max-width: 600px;
}

.emergency-content h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: var(--ember);
  margin-bottom: 20px; /* Keep custom margin */
  letter-spacing: 1px;
}

.emergency-content p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.2rem;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 15px; /* Keep custom margin */
}

.emergency-phone {
  font-family: "Cinzel", serif;
  font-size: 1.4rem;
  color: var(--gold-accent);
  font-weight: 600;
  letter-spacing: 2px;
}

/* Section Titles (reused from Home.jsx or global styles) */
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

/* Section Subtitle (reused from Home.jsx or global styles) */
.section-subtitle {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.5rem;
  color: var(--silver);
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0.9;
  max-width: 800px; /* Added max-width for better readability */
  margin-left: auto;
  margin-right: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-content,
  .hours-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form-container {
    padding: 40px 30px;
  }

  /* Unified padding adjustment for smaller screens */
  .contact-section,
  .office-hours,
  .social-section {
    padding: 80px 0;
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

            <div className="contact-content mt-5">
              <div className="contact-form-container">
                <div className="contact-form">
                  <h3 className="text-uppercase mb-4">Send Us a Message</h3>

                  {submitMessage && (
                    <div
                      className="alert alert-info mb-4"
                      style={{
                        background: "rgba(212, 175, 55, 0.1)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        color: "var(--gold-accent)",
                        padding: "15px",
                        fontFamily: '"Cormorant Garamond", serif',
                      }}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
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
                      <div className="form-group mb-3">
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

                  <div className="form-group mb-3">
                    {" "}
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

                  <div className="form-group mb-3">
                    {" "}
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

                  <div className="form-group mb-3">
                    {" "}
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
                      <option value="private-event">
                        Private Event Inquiry
                      </option>
                      <option value="corporate-event">Corporate Event</option>
                      <option value="group-booking">
                        Group Booking (10+ people)
                      </option>
                      <option value="gift-certificate">Gift Certificate</option>
                      <option value="media-press">Media & Press</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    {" "}
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

                  <div className="form-group mb-3">
                    {" "}
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

                  <div className="form-group mb-4">
                    {" "}
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
                    className="btn-submit w-100 mt-3"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
              <div className="contact-info d-flex flex-column gap-4">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3 className="text-uppercase mb-3">Phone</h3>
                  <p className="mb-2">
                    {" "}
                    <a href="tel:+1-216-555-0199">(216) 555-0199</a>
                  </p>
                  <p className="mb-0">
                    {" "}
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
                  <h3 className="text-uppercase mb-3">Email</h3>
                  <p className="mb-2">
                    <a href="mailto:info@extremelysocial.com">
                      info@extremelysocial.com
                    </a>
                  </p>
                  <p className="mb-3">General inquiries and bookings</p>
                  <p className="mb-2">
                    <a href="mailto:private@extremelysocial.com">
                      private@extremelysocial.com
                    </a>
                  </p>
                  <p className="mb-0">Private events and corporate bookings</p>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="text-uppercase mb-3">Location</h3>
                  <p className="mb-2">
                    <strong>Extremely Social</strong>
                    <br />
                    Cleveland, Ohio
                  </p>
                  <p className="mb-0">
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
            <div className="hours-content mt-5">
              <div className="hours-info">
                <h3 className="mb-4">Business Hours</h3>
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
                  <p className="mb-0">
                    <span className="day">Sunday:</span> Closed
                  </p>
                </div>
                <p
                  className="mt-4 mb-0"
                  style={{
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
                <div className="map-placeholder mb-4">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: "var(--gold-accent)",
                  }}
                >
                  Cleveland, Ohio
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: "var(--silver)",
                    fontSize: "1.1rem",
                  }}
                >
                  Detailed address provided upon booking confirmation for
                  security and exclusivity.
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

            <div className="social-grid mt-5">
              <div className="social-card">
                <i className="fab fa-facebook-f mb-3"></i>
                <h4 className="text-uppercase mb-3">Facebook</h4>
                <p className="mb-3">
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
                <i className="fab fa-instagram mb-3"></i>
                <h4 className="text-uppercase mb-3">Instagram</h4>
                <p className="mb-3">
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
                <i className="fas fa-envelope-open-text mb-3"></i>
                <h4 className="text-uppercase mb-3">Newsletter</h4>
                <p className="mb-3">
                  Be the first to know about new shows, early bird discounts,
                  and exclusive subscriber-only events.
                </p>
                <a
                  href="mailto:info@extremelysocial.com?subject=Newsletter Subscription"
                  className="social-link"
                >
                  Subscribe
                </a>
              </div>

              <div className="social-card">
                <i className="fas fa-calendar-star mb-3"></i>
                <h4 className="text-uppercase mb-3">Events</h4>
                <p className="mb-3">
                  Join our mailing list for invitations to special events,
                  season announcements, and VIP experiences.
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
            <div className="emergency-content text-center mx-auto">
              <h3 className="mb-3">Day-of-Event Contact</h3>
              <p className="mb-3">
                For urgent matters on the day of your event, including late
                arrivals, emergencies, or last-minute changes:
              </p>
              <p className="emergency-phone mb-0">
                Emergency Line: (216) 555-0911
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
