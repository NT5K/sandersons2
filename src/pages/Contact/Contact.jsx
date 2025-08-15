import React, { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import Card from "../../components/ContactCard/ContactCard";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    venueType: "",
    eventDate: "",
    experienceType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to a server
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry! Dominick will get back to you within 24 hours to discuss bringing the Sanderson Sisters to your venue."
    );
    setFormData({
      name: "",
      email: "",
      venueType: "",
      eventDate: "",
      experienceType: "",
      message: "",
    });
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/contact-hero-wide.png"
          title="Book the Magic"
          subtitle="Contact Extremely Social to bring the Sanderson Sisters to your venue"
          height="70vh"
        />

        {/* Primary Contact Section */}
        <section className="contact-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Booking Information
            </h2>
            <div className="contact-content">
              <div className="contact-info text-white">
                <h3 className="mb-4">Get the Magic Started</h3>
                <p className="mb-4">
                  Ready to bring the Sanderson Sisters to your venue? Dominick
                  Palazzo, owner of Extremely Social, is standing by to help
                  create an unforgettable experience for your guests. With five
                  dates already booked this season, October weekends are filling
                  fast!
                </p>

                <div className="info-item">
                  <i className="fas fa-user"></i>
                  <span>
                    <strong>Primary Contact:</strong> Dominick Palazzo
                  </span>
                </div>

                <div className="info-item">
                  <i className="fas fa-briefcase"></i>
                  <span>
                    <strong>Title:</strong> Owner, Extremely Social
                  </span>
                </div>

                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:2163752550">(216) 375-2550</a>
                  </span>
                </div>

                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:dominick@extrememp.com">
                      dominick@extrememp.com
                    </a>
                  </span>
                </div>

                <div className="info-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>
                    <strong>Season:</strong> Late September - October 31st
                  </span>
                </div>

                <div className="info-item">
                  <i className="fas fa-fire"></i>
                  <span>
                    <strong>Status:</strong> 5 dates already booked - Limited
                    availability
                  </span>
                </div>

                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <span>
                    <strong>Response Time:</strong> Within 24 hours
                  </span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container">
                <h3 className="mb-4 text-center">Quick Inquiry Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="your.email@venue.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="venueType" className="form-label">
                      Venue Type
                    </label>
                    <select
                      className="form-select"
                      id="venueType"
                      name="venueType"
                      value={formData.venueType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your venue type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="bar">Bar/Pub</option>
                      <option value="event-space">Event Space</option>
                      <option value="hotel">Hotel/Resort</option>
                      <option value="private-party">Private Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="experienceType" className="form-label">
                      Experience Interest
                    </label>
                    <select
                      className="form-select"
                      id="experienceType"
                      name="experienceType"
                      value={formData.experienceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select experience type</option>
                      <option value="soiree">
                        Sanderson Sisters Soirée (90-minute full experience)
                      </option>
                      <option value="appearance">
                        Sanderson Sisters Appearance (1-2 hours)
                      </option>
                      <option value="custom">
                        Custom Experience (Brunch, etc.)
                      </option>
                      <option value="not-sure">Not sure - need guidance</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">
                      Preferred Date(s)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventDate"
                      name="eventDate"
                      placeholder="October 14th, or October weekends, etc."
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Additional Details
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Venue capacity, preferred timing, special requests, or any questions..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit w-100">
                    Send Inquiry to Dominick
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Options Quick Reference */}
        <section className="office-hours py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Experience Options & Pricing
            </h2>
            <div className="row g-4">
              <div className="col-lg-6">
                <Card
                  type="social"
                  iconClass="fas fa-theater-masks"
                  title="Sanderson Sisters Soirée"
                  description="Complete 90-minute immersive experience with four musical numbers, Billy Butcherson greeter, themed cocktails, and full audience interaction. Custom pricing based on venue capacity with revenue sharing model available."
                  link="/tickets"
                  linkText="View Soirée Details"
                />
              </div>
              <div className="col-lg-6">
                <Card
                  type="social"
                  iconClass="fas fa-magic"
                  title="Sanderson Sisters Appearances"
                  description="Flexible 1-2 hour visits perfect for any venue size, featuring three songs, character interactions, and photo opportunities. Pricing: 1 hour ($450), 1.5 hours ($600), 2 hours ($750)."
                  link="/tickets"
                  linkText="View Appearance Details"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Marketing Support */}
        <section className="social-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Marketing Support & Social Media
            </h2>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-3 col-md-6">
                <Card
                  type="social"
                  iconClass="fab fa-youtube"
                  title="YouTube Channel"
                  description="Watch performance clips and see what makes our Sanderson Sisters special."
                  link="https://www.youtube.com/@extremelysocial7946/videos"
                  linkText="@ExtremelySocial"
                />
              </div>
              <div className="col-lg-3 col-md-6">
                <Card
                  type="social"
                  iconClass="fab fa-instagram"
                  title="Instagram"
                  description="Follow us for behind-the-scenes content, event photos, and booking updates."
                  link="https://www.instagram.com/extremelysocialcle/"
                  linkText="@ExtremelySocialCLE"
                />
              </div>
              <div className="col-lg-3 col-md-6">
                <Card
                  type="social"
                  iconClass="fab fa-facebook-f"
                  title="Facebook"
                  description="Join our community for event updates, customer photos, and special announcements."
                  link="https://www.facebook.com/extremelysocial/"
                  linkText="Extremely Social"
                />
              </div>
              <div className="col-lg-3 col-md-6">
                <Card
                  type="social"
                  iconClass="fas fa-envelope-open-text"
                  title="Email Database"
                  description="We'll promote your event to our 7,000+ subscriber database for maximum attendance."
                  link="mailto:dominick@extrememp.com?subject=Email Marketing Support"
                  linkText="Learn More"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Venue Requirements */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="section-title text-center mb-5">
              What Venues Need to Know
            </h2>
            <div className="row g-4">
              <div className="col-lg-4">
                <Card
                  type="social"
                  iconClass="fas fa-calendar-check"
                  title="Availability"
                  description="Season: Late September through October 31st. Peak Times: October weekends. Current Status: 5 dates already booked. Book Early: Last year sold out 3 months straight."
                  link="mailto:dominick@extrememp.com?subject=Availability Check"
                  linkText="Check Availability"
                />
              </div>
              <div className="col-lg-4">
                <Card
                  type="social"
                  iconClass="fas fa-handshake"
                  title="What We Provide"
                  description="Professional cast & costumes, complete scripts & music, decor & photo backdrop, marketing support & social posts, 7,000+ email database promotion, full run-of-show timeline."
                  link="/about"
                  linkText="Learn More"
                />
              </div>
              <div className="col-lg-4">
                <Card
                  type="social"
                  iconClass="fas fa-building"
                  title="Venue Requirements"
                  description="Basic audio system, space for performers to move, bar service for cocktails, seating arrangement flexibility, parking for guests. We handle the rest!"
                  link="mailto:dominick@extrememp.com?subject=Venue Requirements"
                  linkText="Discuss Setup"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Call to Action */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(145deg, rgba(139, 0, 0, 0.2), rgba(26, 26, 26, 0.8))",
            border: "1px solid var(--ember)",
          }}
        >
          <div className="container">
            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2.5rem",
                  color: "var(--ember)",
                }}
              >
                Don't Let October Vanish Into Thin Air!
              </h3>
              <p
                className="mb-4"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.3rem",
                  color: "var(--silver)",
                }}
              >
                This is the hottest act in town, and we're only booking a
                limited number of venues to keep the experience exclusive.
                October weekends are booking up fast!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="tel:2163752550" className="btn btn-luxury">
                  <i className="fas fa-phone me-2"></i>
                  Call (216) 375-2550 Now
                </a>
                <a
                  href="mailto:dominick@extrememp.com"
                  className="btn btn-luxury"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Email Dominick
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
