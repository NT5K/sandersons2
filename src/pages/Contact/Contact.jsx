import React from "react";
import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import Card from "../../components/ContactCard/ContactCard";
import "./Contact.css";

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactReason: "Other",
    venueType: "",
    eventDate: "",
    message: "",
  });

  // State to manage the visibility of the success message
  const [isSubmitted, setIsSubmitted] = useState(false);
  // State to manage validation errors
  const [validationErrors, setValidationErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate required fields
  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "Please enter your first name.";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Please enter your last name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.eventDate.trim()) {
      errors.eventDate = "Please enter your preferred date(s).";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter additional details.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Form submission started");
    console.log("Current form data:", formData);

    // Validate the form before submission
    if (!validateForm()) {
      console.log("Form validation failed:", validationErrors);
      return; // Stop submission if validation fails
    }

    // IMPORTANT: Make sure this matches your Google Form ID exactly
    const formId = "1FAIpQLSfNF1sD5L2JRCdWuTVrovuRoNS-C8GaZ9kix3qNjFLZLvgBYw";
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    console.log("Submitting to URL:", formUrl);

    // Create a FormData object to send the data.
    const formDataToSend = new FormData();

    // Map form fields to Google Form entry IDs (from your prefilled URL)
    formDataToSend.append("entry.192242539", formData.firstName || ""); // First Name
    formDataToSend.append("entry.202404098", formData.lastName || ""); // Last Name
    formDataToSend.append("entry.779890641", formData.email || ""); // Email
    formDataToSend.append("entry.80092182", formData.phone || ""); // Phone
    formDataToSend.append("entry.1432619189", formData.contactReason || ""); // Contact Reason
    formDataToSend.append("entry.228855407", formData.venueType || ""); // Venue Type
    formDataToSend.append("entry.1954645428", formData.eventDate || ""); // Event Date
    formDataToSend.append("entry.850683340", formData.message || ""); // Message

    // Log what we're sending
    console.log("FormData entries:");
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, ":", value);
    }

    // Use fetch to send the form data to the Google Form.
    fetch(formUrl, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors", // This is required for Google Forms submissions like this.
    })
      .then((response) => {
        console.log("Form submission response:", response);
        // Clear all form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          contactReason: "Soirée Experience",
          venueType: "",
          eventDate: "",
          message: "",
        });
        setValidationErrors({}); // Clear any validation errors
        setIsSubmitted(true); // Show the success message
        // Hide the success message after a few seconds
        setTimeout(() => setIsSubmitted(false), 5000);
        console.log("Form submitted successfully");
      })
      .catch((error) => {
        // Log any errors to the console.
        console.error("Error submitting form:", error);
        // More specific error handling
        if (
          error.name === "TypeError" &&
          error.message.includes("Failed to fetch")
        ) {
          console.log("This might be a CORS issue or network problem");
        }
        alert(
          "There was an error submitting your form. Please try again or contact us directly."
        );
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
                    <a href="mailto:booking@sistaaasentertainment.com">
                      booking@sistaaasentertainment.com
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
                    <strong>Status:</strong> Only booking late September to
                    November 1st! - Limited availability
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
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                >
                  {/* First Name */}
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        validationErrors.firstName ? "is-invalid" : ""
                      }`}
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    {validationErrors.firstName && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.firstName}
                      </div>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        validationErrors.lastName ? "is-invalid" : ""
                      }`}
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    {validationErrors.lastName && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.lastName}
                      </div>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        validationErrors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      placeholder="your.email@venue.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {validationErrors.email && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.email}
                      </div>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="(216) 555-0123"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Contact Reason - Radio Buttons */}
                  <div className="mb-3">
                    <label className="form-label">Reason for Contact</label>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactReason"
                          id="reason_other"
                          value="Other"
                          checked={formData.contactReason === "Other"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reason_other"
                        >
                          Other Inquiry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactReason"
                          id="reason_soiree"
                          value="Soirée Experience"
                          checked={
                            formData.contactReason === "Soirée Experience"
                          }
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reason_soiree"
                        >
                          Sanderson Sisters Soirée (90-minute full experience)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactReason"
                          id="reason_custom"
                          value="Custom Experience"
                          checked={
                            formData.contactReason === "Custom Experience"
                          }
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reason_custom"
                        >
                          Custom Experience (Brunch, Private Party, etc.)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactReason"
                          id="reason_other"
                          value="Other"
                          checked={formData.contactReason === "Other"}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reason_other"
                        >
                          Other Inquiry
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Venue Type */}
                  <div className="mb-3">
                    <label htmlFor="venueType" className="form-label">
                      Venue Type
                    </label>
                    <select
                      className="form-select"
                      id="venueType"
                      name="venueType"
                      value={formData.venueType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your venue type</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Bar/Pub">Bar/Pub</option>
                      <option value="Event Space">Event Space</option>
                      <option value="Hotel/Resort">Hotel/Resort</option>
                      <option value="Private Party">Private Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Date(s) */}
                  <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">
                      Preferred Date(s) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        validationErrors.eventDate ? "is-invalid" : ""
                      }`}
                      id="eventDate"
                      name="eventDate"
                      placeholder="October 14th, or October weekends, etc."
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                    />
                    {validationErrors.eventDate && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.eventDate}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Additional Details <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${
                        validationErrors.message ? "is-invalid" : ""
                      }`}
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Venue capacity, preferred timing, special requests, or any questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    {validationErrors.message && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-submit w-100">
                    Send Inquiry to Dominick
                  </button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="alert alert-success mt-3" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      Thanks for reaching out! Dominick will get back to you
                      within 24 hours to discuss bringing the Sanderson Sisters
                      to your venue.
                    </div>
                  )}
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
                  link="mailto:booking@sistaaasentertainment.com?subject=Email Marketing Support"
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
                  description="Season: Late September through October 31st. Peak Times: October weekends. Limited Run: Only booking late September to November 1st!. Book Early: Last year sold out 3 months straight."
                  link="mailto:booking@sistaaasentertainment.com?subject=Availability Check"
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
                  link="mailto:booking@sistaaasentertainment.com?subject=Venue Requirements"
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
                  href="mailto:booking@sistaaasentertainment.com"
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
