// Contact.jsx
import React, { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import Card from "../../components/ContactCard/ContactCard";
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
              <div className="contact-info text-white">
                <h3 className="mb-4">Get in Touch</h3>
                <p className="mb-4">
                  We're eager to hear from you! For all inquiries regarding the
                  Sanderson Sisters experience, private events, or general
                  questions, please reach out.
                </p>

                {/* Email Contact Card with Shimmer Effect */}
                <div className="email-shimmer-card p-4 mb-4">
                  <div className="d-flex align-items-center w-100">
                    {" "}
                    {/* Use d-flex to align content horizontally */}
                    <i
                      className="fas fa-envelope me-4"
                      style={{
                        fontSize: "1.5rem",
                        color: "var(--gold-accent)",
                        minWidth: "30px",
                      }}
                    ></i>
                    <span>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:info@extremelysocial.com"
                        className="text-silver"
                      >
                        info@extremelysocial.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="info-item mb-4">
                  <i className="fas fa-phone-alt me-4"></i>
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+1-216-555-0199" className="text-silver">
                      (216) 555-0199
                    </a>
                  </span>
                </div>
                <div className="info-item mb-4">
                  <i className="fas fa-map-marker-alt me-4"></i>
                  <span>
                    <strong>Address:</strong> 123 Witchcraft Way, Salem, MA
                  </span>
                </div>
              </div>
              <div className="contact-form-container text-white">
                <h3 className="mb-4 text-center section-subtitle">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
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
                    <label htmlFor="email" className="form-label">
                      Your Email
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
                    <label htmlFor="subject" className="form-label">
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
                    <label htmlFor="message" className="form-label">
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
                  <button type="submit" className="btn btn-luxury w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section className="office-hours py-5 text-center">
          <div className="container">
            <h2 className="section-title mb-5">Office Hours</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col">
                <Card
                  type="hours"
                  iconClass="fas fa-clock"
                  title="General Inquiries"
                  description={
                    <>
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                      <br />
                      Saturday: 10:00 AM - 2:00 PM EST
                    </>
                  }
                />
              </div>
              <div className="col">
                <Card
                  type="hours"
                  iconClass="fas fa-ticket-alt"
                  title="Ticket Support"
                  description={
                    <>
                      Monday - Friday: 10:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM EST
                    </>
                  }
                />
              </div>
              <div className="col">
                <Card
                  type="hours"
                  iconClass="fas fa-handshake"
                  title="Private Events"
                  description={
                    <>
                      By Appointment Only:
                      <br />
                      Please email to schedule a consultation.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="social-section py-5 text-center">
          <div className="container">
            <h2 className="section-title mb-5">Stay Connected</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <Card
                  type="social"
                  iconClass="fab fa-instagram"
                  title="Instagram"
                  description="Follow us for daily magic, behind-the-scenes glimpses, and event highlights."
                  link="https://www.instagram.com/extremelysocialcle/"
                  linkText="@ExtremelySocialCLE"
                />
              </div>
              <div className="col">
                <Card
                  type="social"
                  iconClass="fab fa-facebook-f"
                  title="Facebook"
                  description="Join our community for event updates, photos, and special discounts."
                  link="https://www.facebook.com/extremelysocial/"
                  linkText="Extremely Social"
                />
              </div>
              <div className="col">
                <Card
                  type="social"
                  iconClass="fas fa-bell-concierge"
                  title="Newsletter"
                  description="Sign up for our newsletter to receive exclusive offers and news directly."
                  link="mailto:info@extremelysocial.com?subject=Newsletter%20Subscription"
                  linkText="Subscribe"
                />
              </div>

              <div className="col">
                <Card
                  type="social"
                  iconClass="fas fa-calendar-star"
                  title="Events"
                  description="Join our mailing list for invitations to special events, season announcements, and VIP experiences."
                  link="mailto:info@extremelysocial.com?subject=VIP Events List"
                  linkText="Join VIP List"
                />
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
