import React, { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import SuccessStory from "../../components/SuccessStory/SuccessStory";
import { Link } from "react-router-dom";
import "./Tickets.css";

// --- Data for Experience Packages ---
const packagesData = [
  {
    isFeatured: true,
    icon: "fas fa-theater-masks",
    name: "Sanderson Sisters Soirée",
    subtitle: "The Complete 90-Minute Experience",
    price: "Custom",
    priceNote: "Pricing based on venue capacity & ticket price",
    features: [
      "Four live musical numbers with professional cast",
      "Billy Butcherson as theatrical greeter",
      "Four themed cocktails paired with performances",
      "Interactive spell-casting and audience participation",
      "Complete run-of-show timeline (90 minutes)",
      "Spooky decor and branded photo backdrop",
      "Marketing to 7,000+ email database",
      "Professional costumes, scripts & music included",
    ],
    link: "/contact",
    buttonText: "Learn More",
  },
  {
    isFeatured: false,
    icon: "fas fa-magic",
    name: "Sanderson Sisters Appearances",
    subtitle: "Flexible High-Impact Visits",
    price: "$450-$750",
    priceNote: "1 to 2 hours • Perfect for any venue",
    features: [
      "Three spine-tingling musical performances",
      "Professional Sanderson Sisters cast",
      "Wicked banter and character interactions",
      "Mingling and photo opportunities",
      "Perfect for bars, restaurants, private parties",
      "Optional spellbinding photo setup upgrade",
      "Flexible duration: 1 hour ($450), 1.5 hours ($600), 2 hours ($750)",
      "Adaptable to house parties and special events",
    ],
    link: "/contact",
    buttonText: "Book an Appearance",
  },
];

// --- Data for Soirée Experience Details ---
const soireeDetailsData = [
  {
    icon: "fas fa-door-open",
    title: "Guest Arrival",
    description:
      "Billy Butcherson greets guests in full character and costume, setting the theatrical mood while restaurant staff handles check-in.",
  },
  {
    icon: "fas fa-music",
    title: "Four Musical Numbers",
    description:
      '"I Put a Spell on You," "One Way or Another," "The Witches Are Back," and "Carol of the Witches" with full audience interaction.',
  },
  {
    icon: "fas fa-cocktail",
    title: "Themed Cocktails",
    description:
      "Witch's Welcome, The Betrayal Brew, Black Flame Elixir, and Soul Sucker Sangria—each paired with performances.",
  },
  {
    icon: "fas fa-users",
    title: "Interactive Magic",
    description:
      'Guests participate in spell-casting, play "the virgin" in hilarious gags, and enjoy close-up character interactions throughout.',
  },
];

// --- Data for Venue Information ---
const venueInfoData = [
  {
    icon: "fas fa-calendar-alt",
    title: "Availability",
    description:
      "<strong>Limited Run:</strong> Late September through October 31st<br /><strong>Booking Status:</strong> Only booking late September to November 1st!<br /><strong>Note:</strong> October weekends booking fastest",
  },
  {
    icon: "fas fa-users",
    title: "Capacity",
    description:
      "<strong>Soirée:</strong> 50 guests per performance<br /><strong>Appearances:</strong> Flexible for any venue size<br /><strong>Weekend:</strong> Up to 5 shows possible",
  },
  {
    icon: "fas fa-handshake",
    title: "Booking",
    description:
      "<strong>Contact:</strong> Dominick Palazzo<br /><strong>Phone:</strong> (216) 375-2550<br /><strong>Email:</strong> dominick@extrememp.com",
  },
];

// --- Reusable Component for Package Cards ---
const PackageCard = ({ pkg }) => (
  <div className="col-lg-6">
    <div
      className={`package-card ${
        pkg.isFeatured ? "package-featured" : ""
      } p-5 h-100 text-center position-relative`}
    >
      <div className="package-icon mb-4">
        <i className={pkg.icon}></i>
      </div>
      <h3 className="package-name mb-2">{pkg.name}</h3>
      <p className="package-subtitle mb-4">{pkg.subtitle}</p>
      <div className="mb-4">
        <div className="package-price">{pkg.price}</div>
        <div className="package-price-note">{pkg.priceNote}</div>
      </div>
      <ul className="list-unstyled package-features mb-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="mb-3">
            {feature}
          </li>
        ))}
      </ul>
      <Link to={pkg.link} className="btn btn-luxury w-100">
        {pkg.buttonText}
      </Link>
    </div>
  </div>
);

// --- Reusable Component for Detail Info Cards ---
const DetailInfoCard = ({ detail }) => (
  <div className="col-lg-3 col-md-6">
    <div className="detail-info-card h-100 p-4 text-center">
      <div className="detail-info-icon mb-3">
        <i className={detail.icon}></i>
      </div>
      <h3 className="text-gold mb-3">{detail.title}</h3>
      <p
        className="text-silver"
        dangerouslySetInnerHTML={{ __html: detail.description }}
      ></p>
    </div>
  </div>
);

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
      <div className="page-wrapper">
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/witches-hero-wide.png"
          title="Choose Your Experience"
          subtitle="Two Magical Offerings from Extremely Social"
          height="70vh"
        />

        <SuccessStory />

        {/* Experience Packages */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Choose Your Enchantment
            </h2>
            <div className="row g-5 justify-content-center">
              {packagesData.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} />
              ))}
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
              {soireeDetailsData.map((detail, index) => (
                <DetailInfoCard key={index} detail={detail} />
              ))}
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
              {venueInfoData.map((detail, index) => (
                <div key={index} className="col-lg-4">
                  <div className="detail-info-card h-100 p-4 text-center">
                    <div className="detail-info-icon mb-3">
                      <i className={detail.icon}></i>
                    </div>
                    <h3 className="text-gold mb-3">{detail.title}</h3>
                    <p
                      className="text-silver"
                      dangerouslySetInnerHTML={{ __html: detail.description }}
                    ></p>
                  </div>
                </div>
              ))}
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
                  <Link to="/contact" className="btn btn-luxury">
                    Discuss Custom Options
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="private-image border border-warning overflow-hidden">
                  <img
                    src="./assets/images/edits/2.png"
                    alt="Custom Sanderson Sisters Experience"
                    className="img-fluid w-100"
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
