// Contact.jsx
import React, { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/contact-hero-wide.png"
          title="Connect with Us"
          subtitle="Your portal to the world of Extremely Social and the Sanderson Sisters"
          height="70vh"
        />

        {/* Contact Section */}
        <section className="contact-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              General Inquiries
            </h2>
            <div className="contact-content">
              <div className="contact-form-container p-5">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="mb-4 text-center">Send Us a Message</h3>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-gold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-gold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label text-gold">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-gold">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-info">
                <div className="contact-card p-4 text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="mb-3">Our Location</h3>
                  <p className="mb-2">123 Spooky Lane</p>
                  <p className="mb-0">Salem, MA 01970</p>
                </div>

                <div className="contact-card p-4 text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3 className="mb-3">Email Us</h3>
                  <p className="mb-0">
                    <a href="mailto:info@extremelysocial.com">
                      info@extremelysocial.com
                    </a>
                  </p>
                </div>

                <div className="contact-card p-4 text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3 className="mb-3">Call Us</h3>
                  <p className="mb-0">
                    <a href="tel:+12165550911">(216) 555-0911</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section className="office-hours py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">Office Hours</h2>
            <div className="hours-content">
              <div className="hours-info">
                <h3 className="mb-4">When We're Available</h3>
                <p className="hours-list">
                  <span className="day">Monday:</span> 9:00 AM - 5:00 PM
                  <br />
                  <span className="day">Tuesday:</span> 9:00 AM - 5:00 PM
                  <br />
                  <span className="day">Wednesday:</span> 9:00 AM - 5:00 PM
                  <br />
                  <span className="day">Thursday:</span> 9:00 AM - 5:00 PM
                  <br />
                  <span className="day">Friday:</span> 9:00 AM - 3:00 PM
                  <br />
                  <span className="day">Saturday:</span> Closed
                  <br />
                  <span className="day">Sunday:</span> Closed
                </p>
              </div>
              <div className="location-map p-4 text-center">
                <h3 className="mb-4 text-gold">Find Us Here</h3>
                <div className="map-placeholder mb-4 rounded-0">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <p className="text-silver opacity-90">
                  While our events take place in various enchanting locations,
                  our main office is here to assist you with inquiries and
                  planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">Stay Connected</h2>
            <div className="social-grid">
              <div className="social-card">
                <i className="fab fa-instagram mb-3"></i>
                <h4 className="text-uppercase mb-3">Instagram</h4>
                <p className="mb-3">
                  Follow us for behind-the-scenes glimpses, event highlights,
                  and daily doses of magic.
                </p>
                <a
                  href="https://www.instagram.com/extremelysocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  @extremelysocial
                </a>
              </div>

              <div className="social-card">
                <i className="fab fa-facebook-f mb-3"></i>
                <h4 className="text-uppercase mb-3">Facebook</h4>
                <p className="mb-3">
                  Like our page to stay updated on new shows, special offers,
                  and community events.
                </p>
                <a
                  href="https://www.facebook.com/extremelysocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Extremely Social
                </a>
              </div>

              <div className="social-card">
                <i className="fab fa-youtube mb-3"></i>
                <h4 className="text-uppercase mb-3">YouTube</h4>
                <p className="mb-3">
                  Watch trailers, past performances, and exclusive content from
                  our immersive productions.
                </p>
                <a
                  href="https://www.youtube.com/extremelysocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Watch Now
                </a>
              </div>

              <div className="social-card">
                <i className="fas fa-rss-square mb-3"></i>
                <h4 className="text-uppercase mb-3">Newsletter</h4>
                <p className="mb-3">
                  Sign up for our newsletter to receive exclusive updates, early
                  bird ticket access, and news.
                </p>
                <a
                  href="mailto:info@extremelysocial.com?subject=Newsletter Signup"
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
        <section className="emergency-contact py-5">
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
