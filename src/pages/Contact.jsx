import React, { useState } from "react";
import PageHero from "../components/PageHero";

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
  );
};

export default Contact;