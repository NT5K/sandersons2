// About.jsx
import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import "./About.css";

const About = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/witches-hero-wide.png"
          title="About the Experience"
          subtitle="Extremely Social Presents The Sanderson Sisters"
          height="70vh"
        />

        {/* About Section - UPDATED WITH EXTREMELY SOCIAL INFO */}
        <section className="about-section">
          <div className="container">
            <h2 className="section-title">Our Vision</h2>
            <div className="about-content mx-auto text-center">
              <p>
                Extremely Social is an immersive experience creation company
                specializing in over-the-top themed events designed to engage
                guests and create unforgettable moments. Now in our second year,
                The Sanderson Sisters experience represents our commitment to
                bringing beloved characters to life through professional
                theatrical excellence.
              </p>

              <p>
                Last season, our Sanderson Sisters were completely sold out the
                entire month of October, half of September, and even into
                November. This unprecedented success stems from our dedication
                to creating something far beyond traditional murder mysteries
                and haunted houses—we craft immersive cocktail experiences that
                are sweeping the country.
              </p>

              <p className="mb-0">
                Our sophisticated interpretation honors the iconic Hocus Pocus
                characters while elevating the narrative through professional
                performance artistry, atmospheric design, and interactive
                storytelling that places guests at the heart of Salem's most
                captivating legend.
              </p>
            </div>
          </div>
        </section>

        {/* Production Details - UPDATED WITH REAL SHOW INFO */}
        <section className="production-details">
          <div className="container">
            <h2 className="section-title">The Production</h2>
            <div className="detail-grid mt-5">
              <DetailsCard
                iconClass="fas fa-theater-masks"
                title="Professional Cast"
                description="Professional Sanderson Sisters impersonators bring Winifred, Sarah, and Mary to life with authentic costumes, masterful character work, and theatrical flair that rivals any professional production."
              />
              <DetailsCard
                iconClass="fas fa-user-tie"
                title="Billy Butcherson"
                description="Our loyal companion Billy Butcherson serves as the theatrical greeter, welcoming guests in full character and costume, setting the enchanting mood from the moment of arrival."
              />
              <DetailsCard
                iconClass="fas fa-music"
                title="Musical Performances"
                description="Four live musical numbers including 'I Put a Spell on You,' 'One Way or Another,' 'The Witches Are Back,' and 'Carol of the Witches' with full choreography and audience interaction."
              />
              <DetailsCard
                iconClass="fas fa-cocktail"
                title="Themed Cocktails"
                description="Four signature cocktails expertly paired with each performance: Witch's Welcome, The Betrayal Brew, Black Flame Elixir, and Soul Sucker Sangria—each crafted to enhance the magical experience."
              />
              <DetailsCard
                iconClass="fas fa-users"
                title="Interactive Magic"
                description="Guests become part of the story through spell-casting rituals, selecting 'the virgin' for hilarious recurring gags, and intimate character interactions throughout the evening."
              />
              <DetailsCard
                iconClass="fas fa-camera"
                title="Photo Opportunities"
                description="Spooky decor, branded backdrop for photos, and opportunities to mingle with the Sisters create lasting memories that guests will treasure long after the evening ends."
              />
            </div>
          </div>
        </section>

        {/* Company Section - EXTREMELY SOCIAL BACKGROUND */}
        <section className="company-section">
          <div className="container">
            <h2 className="section-title">About Extremely Social</h2>
            <div className="company-grid">
              <div className="company-text">
                <h3>Creating Unforgettable Experiences</h3>
                <p>
                  Founded by Dominick Palazzo, Extremely Social specializes in
                  immersive experience creation that goes far beyond traditional
                  entertainment. We understand that people are burnt out on the
                  same old offerings, which is why we've pioneered immersive
                  cocktail experiences that are setting new standards across the
                  country.
                </p>
                <p>
                  Our approach combines professional theatrical performances
                  with carefully curated libations, atmospheric design, and
                  interactive storytelling. Every detail is meticulously planned
                  to transport guests into fully realized worlds where they
                  become active participants rather than passive observers.
                </p>
                <p>
                  From our sold-out Sanderson Sisters experiences to custom
                  venue partnerships, we bring creativity and innovation to
                  every project. We don't just host events—we create magical
                  moments that guests will talk about long after the night is
                  over.
                </p>
              </div>
              <div className="company-image">
                <img
                  src="./assets/images/edits/5.jpg"
                  alt="Extremely Social - The Sanderson Sisters"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights - UPDATED WITH REAL DIFFERENTIATORS */}
        <section className="experience-highlights">
          <div className="container">
            <h2 className="section-title">What Sets Us Apart</h2>
            <div className="highlight-list">
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Proven Success</h4>
                <p>
                  Completely sold out for three consecutive months in our first
                  year, with five dates already booked for the current season.
                  Our track record speaks to the exceptional quality and demand
                  for our experiences.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Venue Flexibility</h4>
                <p>
                  We can adapt our magic to various venues and events, from our
                  full 90-minute Soirée to shorter appearances. We've
                  successfully hosted everything from intimate restaurant
                  experiences to large venue productions.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Complete Service</h4>
                <p>
                  We provide everything needed for success: professional
                  performers, costumes, music, scripts, decor, branded
                  backdrops, social media promotion, and access to our 7,000+
                  email database for marketing support.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Custom Options</h4>
                <p>
                  Beyond our standard offerings, we create custom experiences
                  like our popular Sanderson Sisters Brunch, hosted at Valenti's
                  Restaurant with three sold-out seatings. We adapt to venue
                  needs and creative visions.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Professional Excellence</h4>
                <p>
                  Our performers are trained professionals who bring
                  authenticity and theatrical excellence to every interaction.
                  From costume design to character development, every detail
                  meets the highest standards.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Exclusive Experience</h4>
                <p className="mb-0">
                  We maintain exclusivity by booking only a limited number of
                  venues, ensuring each experience feels special and unique.
                  This isn't mass-market entertainment—it's premium theatrical
                  artistry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION - THE DIFFERENCE */}
        <section className="production-details">
          <div className="container">
            <h2 className="section-title">Why Choose Extremely Social?</h2>
            <div className="about-content mx-auto text-center">
              <p>
                This immersive cocktail experience is the new trend sweeping the
                country, and we're leading the way. While others stick to the
                same old murder mysteries and haunted houses, we've created
                something that genuinely surprises and delights guests.
              </p>
              <p>
                Our guests don't just watch a show—they become part of the
                story. They don't just drink cocktails—they participate in
                spell-casting rituals. They don't just take photos— they create
                memories that will haunt them in the best possible way.
              </p>
              <p className="mb-0">
                When you partner with Extremely Social, you're not just booking
                entertainment. You're investing in an experience that will have
                guests talking about your venue long after the night is over,
                ensuring they return and bring friends to your establishment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
