import React from "react";
import PageHero from "../components/PageHero";

const aboutStyles = `
/* About Page Styles */

/* About Section */
.about-section,
.production-details,
.company-section,
.experience-highlights {
  padding: 100px 0; /* Consistent vertical padding for all main sections */
  position: relative;
  z-index: 2;
}

.about-content {
  max-width: 800px; /* Keep max-width for content */
}

.about-content p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.4rem;
  line-height: 1.8;
  color: var(--silver);
  margin-bottom: 30px; /* Keep custom margin for p if not using Bootstrap spacing */
  opacity: 0.9;
}

/* Production Details */
.production-details {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px; /* Keep custom gap for grid */
}

.detail-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8),
    rgba(42, 42, 42, 0.6)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px; /* Keep custom padding */
  transition: all 0.5s ease;
  backdrop-filter: blur(15px);
  height: 100%; /* Ensure cards are same height */
}

.detail-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* Keep custom shadow */
}

.detail-icon {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px; /* Keep custom margin */
}

.detail-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
  color: var(--gold-accent);
  margin-bottom: 15px; /* Keep custom margin */
  letter-spacing: 1px;
}

.detail-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Company Section */
.company-section {
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(45, 27, 105, 0.1) 50%,
    transparent 100%
  );
}

.company-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; /* Keep custom gap for grid */
  align-items: center;
}

.company-text h3 {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 30px; /* Keep custom margin */
  letter-spacing: 1px;
}

.company-text p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--silver);
  opacity: 0.9;
  margin-bottom: 20px; /* Keep custom margin */
}

.company-image {
  border: 1px solid rgba(212, 175, 55, 0.3);
  overflow: hidden;
}

.company-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.company-image:hover img {
  transform: scale(1.05);
}

/* Experience Highlights */
.highlight-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px; /* Keep custom gap for grid */
}

.highlight-item {
  background: rgba(26, 26, 26, 0.6);
  border-left: 3px solid var(--gold-accent);
  padding: 30px 25px; /* Keep custom padding */
  transition: all 0.3s ease;
  height: 100%; /* Ensure cards are same height */
}

.highlight-item:hover {
  background: rgba(26, 26, 26, 0.8);
  transform: translateX(10px);
}

.highlight-item h4 {
  font-family: "Cinzel", serif;
  color: var(--gold-accent);
  margin-bottom: 15px; /* Keep custom margin */
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.highlight-item p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  opacity: 0.9;
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

/* Custom Button (reused from Home.jsx or global styles) */
.btn-luxury {
  display: inline-block;
  font-family: "Cinzel", serif;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  margin: 0 1rem 1rem 0;
  border: 2px solid var(--gold-accent);
  color: var(--gold-accent);
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
  text-decoration: none;
}

.btn-luxury:hover {
  background-color: var(--gold-accent);
  color: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .company-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
`;

const About = () => {
  return (
    <>
      <style>{aboutStyles}</style>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/hero/witches-hero-wide.png"
          title="About the Experience"
          subtitle="Extremely Social Presents The Sanderson Sisters"
          height="60vh"
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
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-theater-masks"></i>
                </div>
                <h3 className="mb-3 text-uppercase">Theatrical Excellence</h3>
                <p>
                  Professional performers trained in character work, vocal
                  performance, and audience engagement bring Winifred, Sarah,
                  and Mary to life with authenticity and theatrical flair.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="mb-3 text-uppercase">Immersive Design</h3>
                <p>
                  Every element—from atmospheric lighting to period-inspired set
                  pieces—is meticulously designed to create an authentic 1600s
                  Salem environment that envelops guests completely.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="mb-3 text-uppercase">Interactive Experience</h3>
                <p>
                  Guests become part of the story through carefully orchestrated
                  moments of participation, spell-casting rituals, and direct
                  engagement with the Sisters themselves.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-cocktail"></i>
                </div>
                <h3 className="mb-3 text-uppercase">Curated Refreshments</h3>
                <p>
                  Themed cocktails and libations are seamlessly woven into the
                  narrative, enhancing the immersive experience while providing
                  sophisticated refreshment throughout the evening.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h3 className="mb-3 text-uppercase">Musical Performance</h3>
                <p>
                  Live musical elements and carefully curated soundscapes create
                  an authentic atmospheric backdrop that supports both intimate
                  moments and grand theatrical reveals.
                </p>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="mb-3 text-uppercase">Intimate Setting</h3>
                <p>
                  Limited seating ensures every guest enjoys optimal sightlines
                  and personal interaction opportunities, creating an exclusive,
                  premium experience for each attendee.
                </p>
              </div>
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
