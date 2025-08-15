import React, { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import { Link } from "react-router-dom";
import "./Tickets.css";

const Tickets = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What's included in the Sanderson Sisters Soirée?",
      answer:
        "The 90-minute Soirée includes four live musical numbers by professional Sanderson Sisters impersonators, Billy Butcherson as theatrical greeter, four themed cocktails paired with each performance, guest interaction, spooky decor, photo opportunities, and a complete immersive experience that transports you into the world of Hocus Pocus.",
    },
    {
      question: "How do the Appearances differ from the Soirée?",
      answer:
        "Appearances are shorter format visits (1-2 hours) perfect for bars, restaurants, and private parties. They include three spine-tingling songs, wicked banter, mingling, photo opportunities, and character interactions. They're more flexible and can adapt to various venue types and event needs.",
    },
    {
      question: "Can you customize the experience for our venue?",
      answer:
        "Absolutely! We've successfully adapted our magic for various venues and events. We can create custom experiences like our popular Sanderson Sisters Brunch (hosted at Valenti's Restaurant with three sold-out seatings) or tailor the performance to your space and audience needs.",
    },
    {
      question: "What do you provide vs. what does the venue need?",
      answer:
        "We provide: professional cast, costumes, scripts, music, coordinated drink pairings (menu recommendations), decor, branded backdrop for photos, full run-of-show timeline, social media posts, and promotion to our 7,000+ email database. The venue provides the space, bar service, and basic audio setup.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "We recommend booking as early as possible. Last year we were completely sold out for three months straight. This year, five dates are already booked and October weekends fill up especially fast. We're only accepting bookings from late September through October 31st.",
    },
    {
      question: "What makes this different from other Halloween entertainment?",
      answer:
        "People are burnt out on the same old murder mysteries and haunted houses. This immersive cocktail experience is the new trend sweeping the country. Our guests don't just watch—they participate in spell-casting, interact with professional performers, and enjoy themed cocktails in an authentic Hocus Pocus experience.",
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/witches-hero-wide.png"
          title="Choose Your Experience"
          subtitle="Two Magical Offerings from Extremely Social"
          height="70vh"
        />

        {/* Introduction Section */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="section-title mb-4">
                  Now in Our Second Spellbinding Year
                </h2>
                <p
                  className="fs-5 text-silver mb-4"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    lineHeight: "1.8",
                  }}
                >
                  Last season, our Sanderson Sisters were{" "}
                  <strong style={{ color: "var(--gold-accent)" }}>
                    completely sold out
                  </strong>{" "}
                  the entire month of October, half of September, and even into
                  November. This year, we've expanded the magic with two
                  enchanting options to bring the Hocus Pocus experience to any
                  venue or event.
                </p>
                <div
                  className="alert"
                  style={{
                    background: "rgba(212, 175, 55, 0.1)",
                    border: "1px solid var(--gold-accent)",
                    color: "var(--gold-accent)",
                  }}
                >
                  <i className="fas fa-fire me-2"></i>
                  <strong>Limited Run:</strong> Only booking late September
                  through October 31st – Five dates already reserved!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Packages */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Choose Your Enchantment
            </h2>

            <div className="row g-5 justify-content-center">
              {/* Sanderson Sisters Soirée */}
              <div className="col-lg-6">
                <div className="package-card package-featured p-5 h-100 text-center position-relative">
                  <div className="package-icon mb-4">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="package-name mb-2">
                    Sanderson Sisters Soirée
                  </h3>
                  <p className="package-subtitle mb-4">
                    The Complete 90-Minute Experience
                  </p>

                  <div className="mb-4">
                    <div className="package-price">Custom</div>
                    <div className="package-price-note">
                      Pricing based on venue capacity & ticket price
                    </div>
                  </div>

                  <ul className="list-unstyled package-features mb-4">
                    <li className="mb-3">
                      Four live musical numbers with professional cast
                    </li>
                    <li className="mb-3">
                      Billy Butcherson as theatrical greeter
                    </li>
                    <li className="mb-3">
                      Four themed cocktails paired with performances
                    </li>
                    <li className="mb-3">
                      Interactive spell-casting and audience participation
                    </li>
                    <li className="mb-3">
                      Complete run-of-show timeline (90 minutes)
                    </li>
                    <li className="mb-3">
                      Spooky decor and branded photo backdrop
                    </li>
                    <li className="mb-3">Marketing to 7,000+ email database</li>
                    <li className="mb-3">
                      Professional costumes, scripts & music included
                    </li>
                  </ul>

                  <Link to="/contact" className="btn btn-luxury w-100">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Sanderson Sisters Appearances */}
              <div className="col-lg-6">
                <div className="package-card p-5 h-100 text-center position-relative">
                  <div className="package-icon mb-4">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="package-name mb-2">
                    Sanderson Sisters Appearances
                  </h3>
                  <p className="package-subtitle mb-4">
                    Flexible High-Impact Visits
                  </p>

                  <div className="mb-4">
                    <div className="package-price">$450-$750</div>
                    <div className="package-price-note">
                      1 to 2 hours • Perfect for any venue
                    </div>
                  </div>

                  <ul className="list-unstyled package-features mb-4">
                    <li className="mb-3">
                      Three spine-tingling musical performances
                    </li>
                    <li className="mb-3">
                      Professional Sanderson Sisters cast
                    </li>
                    <li className="mb-3">
                      Wicked banter and character interactions
                    </li>
                    <li className="mb-3">Mingling and photo opportunities</li>
                    <li className="mb-3">
                      Perfect for bars, restaurants, private parties
                    </li>
                    <li className="mb-3">
                      Optional spellbinding photo setup upgrade
                    </li>
                    <li className="mb-3">
                      Flexible duration: 1 hour ($450), 1.5 hours ($600), 2
                      hours ($750)
                    </li>
                    <li className="mb-3">
                      Adaptable to house parties and special events
                    </li>
                  </ul>

                  <a href="/contact" className="btn btn-luxury w-100">
                    Book an Appearance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Soirée Experience Details */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(45, 27, 105, 0.05) 50%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="section-title text-center mb-5">
              The Soirée Experience Breakdown
            </h2>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-door-open"></i>
                  </div>
                  <h3 className="text-gold mb-3">Guest Arrival</h3>
                  <p className="text-silver">
                    Billy Butcherson greets guests in full character and
                    costume, setting the theatrical mood while restaurant staff
                    handles check-in.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-gold mb-3">Four Musical Numbers</h3>
                  <p className="text-silver">
                    "I Put a Spell on You," "One Way or Another," "The Witches
                    Are Back," and "Carol of the Witches" with full audience
                    interaction.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-cocktail"></i>
                  </div>
                  <h3 className="text-gold mb-3">Themed Cocktails</h3>
                  <p className="text-silver">
                    Witch's Welcome, The Betrayal Brew, Black Flame Elixir, and
                    Soul Sucker Sangria—each paired with performances.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="text-gold mb-3">Interactive Magic</h3>
                  <p className="text-silver">
                    Guests participate in spell-casting, play "the virgin" in
                    hilarious gags, and enjoy close-up character interactions
                    throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Potential for Venues */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Revenue Potential for Venues
            </h2>

            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="detail-info-card p-4">
                  <h3 className="text-gold mb-4">Soirée Weekend Projections</h3>
                  <div className="table-responsive">
                    <table className="table table-dark">
                      <thead>
                        <tr style={{ color: "var(--gold-accent)" }}>
                          <th>Day</th>
                          <th>Shows</th>
                          <th>Guests</th>
                          <th>@ $50</th>
                          <th>@ $80</th>
                        </tr>
                      </thead>
                      <tbody style={{ color: "var(--silver)" }}>
                        <tr>
                          <td>Friday</td>
                          <td>2</td>
                          <td>100</td>
                          <td>$5,000</td>
                          <td>$8,000</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>2</td>
                          <td>100</td>
                          <td>$5,000</td>
                          <td>$8,000</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>1</td>
                          <td>50</td>
                          <td>$2,500</td>
                          <td>$4,000</td>
                        </tr>
                        <tr
                          style={{
                            borderTop: "2px solid var(--gold-accent)",
                            fontWeight: "bold",
                          }}
                        >
                          <td>Total</td>
                          <td>5</td>
                          <td>250</td>
                          <td>$12,500</td>
                          <td>$20,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-silver mt-3">
                    <small>
                      Show costs: $2,600 (Fri/Sat), $2,000 (Sun) = $7,200 total
                    </small>
                    <br />
                    <strong style={{ color: "var(--gold-accent)" }}>
                      Net venue revenue: $13,000 - $28,000 per weekend
                    </strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="private-text">
                  <h3 className="text-gold mb-4">Why Venues Choose Us</h3>
                  <ul className="list-unstyled private-features">
                    <li className="mb-3">
                      You set the ticket price and keep the revenue
                    </li>
                    <li className="mb-3">
                      We provide performers, costumes, music, scripts, decor
                    </li>
                    <li className="mb-3">
                      Marketing support through our 7,000+ email database
                    </li>
                    <li className="mb-3">
                      Boost bar/food revenue with themed experiences
                    </li>
                    <li className="mb-3">
                      Attract bachelorette parties, themed events, girls' nights
                    </li>
                    <li className="mb-3">
                      Social media content and branded photo opportunities
                    </li>
                    <li className="mb-3">
                      Proven track record: sold out 3 months last year
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Information */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Venue Information
            </h2>

            <div className="row g-4">
              <div className="col-lg-4">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h3 className="text-gold mb-3">Availability</h3>
                  <p className="text-silver">
                    <strong>Limited Run:</strong> Late September through October
                    31st
                    <br />
                    <strong>Booking Status:</strong> 5 dates already reserved
                    <br />
                    <strong>Note:</strong> October weekends booking fastest
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="text-gold mb-3">Capacity</h3>
                  <p className="text-silver">
                    <strong>Soirée:</strong> 50 guests per performance
                    <br />
                    <strong>Appearances:</strong> Flexible for any venue size
                    <br />
                    <strong>Weekend:</strong> Up to 5 shows possible
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="detail-info-card h-100 p-4 text-center">
                  <div className="detail-info-icon mb-3">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3 className="text-gold mb-3">Booking</h3>
                  <p className="text-silver">
                    <strong>Contact:</strong> Dominick Palazzo
                    <br />
                    <strong>Phone:</strong> (216) 375-2550
                    <br />
                    <strong>Email:</strong> dominick@extrememp.com
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
              Custom Experiences & Private Events
            </h2>
            <div className="row g-5 align-items-center mt-4">
              <div className="col-lg-6">
                <div className="private-text">
                  <h3 className="text-gold mb-4">
                    Beyond the Standard Offerings
                  </h3>
                  <p className="text-silver mb-3">
                    We get creative! If neither of our standard options fits
                    exactly what you need, we can adapt. We've successfully
                    hosted a Sanderson Sisters Brunch at Valenti's Restaurant in
                    Broadview Heights with three seatings—all sold out.
                  </p>

                  <p className="text-silver mb-4">
                    Our flexibility extends to house parties, corporate events,
                    bachelorette parties, themed birthdays, and special
                    occasions. We can tailor the experience to your venue,
                    audience, and creative vision while maintaining our
                    professional standards.
                  </p>

                  <ul className="list-unstyled mb-4 private-features">
                    <li className="mb-3">
                      Custom themed experiences (brunches, dinners, cocktail
                      hours)
                    </li>
                    <li className="mb-3">
                      Adaptable to any venue size or type
                    </li>
                    <li className="mb-3">
                      House parties and intimate gatherings
                    </li>
                    <li className="mb-3">
                      Corporate team-building with a magical twist
                    </li>
                    <li className="mb-3">
                      Bachelorette parties and girls' nights out
                    </li>
                    <li className="mb-3">Themed birthday celebrations</li>
                    <li className="mb-3">
                      Holiday and special occasion entertainment
                    </li>
                  </ul>

                  <a href="/contact" className="btn btn-luxury">
                    Discuss Custom Options
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="private-image border border-warning overflow-hidden">
                  <img
                    src="./assets/images/edits/2.png"
                    alt="Custom Sanderson Sisters Experience"
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
                Ready to Bring the Magic to Your Venue?
              </h2>
              <p
                className="section-subtitle mb-5 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                Don't let your October dates vanish into thin air! This is the
                hottest act in town, and we're only booking a limited number of
                venues to keep the experience exclusive.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-luxury">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tickets;
