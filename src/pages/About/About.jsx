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
        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="section-title">Our Vision</h2>
            <div className="about-content mx-auto text-center">
              <p>
                Extremely Social presents The Sanderson Sisters—an immersive
                theatrical experience that transforms the beloved Halloween tale
                into a sophisticated evening of entertainment for discerning
                adults.
              </p>

              <p>
                Our interpretation honors the iconic characters while elevating
                the narrative through professional performance artistry,
                atmospheric design, and interactive storytelling that places
                guests at the heart of Salem's most captivating legend.
              </p>

              <p className="mb-0">
                This is not merely entertainment—it's a carefully crafted
                journey into a world where ancient mystique meets modern luxury,
                where every detail is designed to transport you beyond the
                ordinary into an evening of unforgettable theatrical magic.
              </p>
            </div>
          </div>
        </section>

        {/* Production Details */}
        <section className="production-details">
          <div className="container">
            <h2 className="section-title">The Production</h2>
            <div className="detail-grid mt-5">
              <DetailsCard
                iconClass="fas fa-theater-masks"
                title="Theatrical Excellence"
                description="Professional performers trained in character work, vocal performance, and audience engagement bring Winifred, Sarah, and Mary to life with authenticity and theatrical flair."
              />
              <DetailsCard
                iconClass="fas fa-eye"
                title="Immersive Design"
                description="Every element—from atmospheric lighting to period-inspired set pieces—is meticulously designed to create an authentic 1600s Salem environment that envelops guests completely."
              />
              <DetailsCard
                iconClass="fas fa-users"
                title="Interactive Experience"
                description="Guests become part of the story through carefully orchestrated moments of participation, spell-casting rituals, and direct engagement with the Sisters themselves."
              />
              <DetailsCard
                iconClass="fas fa-cocktail"
                title="Curated Refreshments"
                description="Themed cocktails and libations are seamlessly woven into the narrative, enhancing the immersive experience while providing sophisticated refreshment throughout the evening."
              />
              <DetailsCard
                iconClass="fas fa-music"
                title="Musical Performance"
                description="Live musical elements and carefully curated soundscapes create an authentic atmospheric backdrop that supports both intimate moments and grand theatrical reveals."
              />
              <DetailsCard
                iconClass="fas fa-star"
                title="Intimate Setting"
                description="Limited seating ensures every guest enjoys optimal sightlines and personal interaction opportunities, creating an exclusive, premium experience for each attendee."
              />
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="company-section">
          <div className="container">
            <h2 className="section-title">About Extremely Social</h2>
            <div className="company-grid mt-5">
              <div className="company-text">
                <h3 className="mb-4">Crafting Unforgettable Experiences</h3>
                <p className="mb-3">
                  Based in Cleveland, Ohio, Extremely Social specializes in
                  creating immersive, emotionally effective life experiences
                  that transcend traditional entertainment boundaries.
                </p>

                <p className="mb-3">
                  We believe that exceptional events are more than
                  gatherings—they're transformative experiences that create
                  lasting memories and meaningful connections. Our approach
                  combines theatrical artistry with sophisticated event
                  production to deliver experiences that are both entertaining
                  and emotionally resonant.
                </p>

                <p className="mb-4">
                  The Sanderson Sisters represents our commitment to elevating
                  beloved stories through professional artistry, creating an
                  experience that honors the source material while offering
                  something entirely new and sophisticated for adult audiences.
                </p>

                <a href="#contact" className="btn-luxury mt-3">
                  Contact Us
                </a>
              </div>
              <div className="company-image rounded-0">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop"
                  alt="Extremely Social Event Production"
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Experience Highlights */}
        <section className="experience-highlights">
          <div className="container">
            <h2 className="section-title">What Makes Us Different</h2>
            <div className="highlight-list mt-4">
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Adult-Focused Approach</h4>
                <p>
                  Sophisticated interpretation designed specifically for mature
                  audiences, featuring themes and interactions that resonate
                  with adult sensibilities.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Professional Artistry</h4>
                <p>
                  Every performer is professionally trained, ensuring
                  consistent, high-caliber entertainment that meets the
                  expectations of discerning guests.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Narrative Innovation</h4>
                <p>
                  While honoring the beloved source material, we expand and
                  deepen the story, creating new moments and revelations that
                  surprise even devoted fans.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">
                  Atmospheric Authenticity
                </h4>
                <p>
                  Historical research informs every design choice, from
                  costuming to set pieces, creating an authentic period
                  atmosphere that enhances immersion.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Exclusive Access</h4>
                <p>
                  Limited audience size ensures intimate interaction
                  opportunities and premium service that larger productions
                  cannot provide.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="mb-3 text-uppercase">Memorable Moments</h4>
                <p className="mb-0">
                  Carefully orchestrated surprises and interactive elements
                  ensure every guest leaves with unique, personal memories of
                  their evening with the Sisters.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
