import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h1>About the Experience</h1>
                <h2>Extremely Social Presents The Sanderson Sisters</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <div className="about-content">
            <p>Extremely Social presents The Sanderson Sisters—an immersive theatrical experience that transforms the beloved Halloween tale into a sophisticated evening of entertainment for discerning adults.</p>
            
            <p>Our interpretation honors the iconic characters while elevating the narrative through professional performance artistry, atmospheric design, and interactive storytelling that places guests at the heart of Salem's most captivating legend.</p>
            
            <p>This is not merely entertainment—it's a carefully crafted journey into a world where ancient mystique meets modern luxury, where every detail is designed to transport you beyond the ordinary into an evening of unforgettable theatrical magic.</p>
          </div>
        </div>
      </section>

      {/* Production Details */}
      <section className="production-details">
        <div className="container">
          <h2 className="section-title">The Production</h2>
          <div className="detail-grid">
            <div className="detail-card">
              <div className="detail-icon">
                <i className="fas fa-theater-masks"></i>
              </div>
              <h3>Theatrical Excellence</h3>
              <p>Professional performers trained in character work, vocal performance, and audience engagement bring Winifred, Sarah, and Mary to life with authenticity and theatrical flair.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Immersive Design</h3>
              <p>Every element—from atmospheric lighting to period-inspired set pieces—is meticulously designed to create an authentic 1600s Salem environment that envelops guests completely.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Interactive Experience</h3>
              <p>Guests become part of the story through carefully orchestrated moments of participation, spell-casting rituals, and direct engagement with the Sisters themselves.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <i className="fas fa-cocktail"></i>
              </div>
              <h3>Curated Refreshments</h3>
              <p>Themed cocktails and libations are seamlessly woven into the narrative, enhancing the immersive experience while providing sophisticated refreshment throughout the evening.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Musical Performance</h3>
              <p>Live musical elements and carefully curated soundscapes create an authentic atmospheric backdrop that supports both intimate moments and grand theatrical reveals.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Intimate Setting</h3>
              <p>Limited seating ensures every guest enjoys optimal sightlines and personal interaction opportunities, creating an exclusive, premium experience for each attendee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="company-section">
        <div className="container">
          <h2 className="section-title">About Extremely Social</h2>
          <div className="company-grid">
            <div className="company-text">
              <h3>Crafting Unforgettable Experiences</h3>
              <p>Based in Cleveland, Ohio, Extremely Social specializes in creating immersive, emotionally effective life experiences that transcend traditional entertainment boundaries.</p>
              
              <p>We believe that exceptional events are more than gatherings—they're transformative experiences that create lasting memories and meaningful connections. Our approach combines theatrical artistry with sophisticated event production to deliver experiences that are both entertaining and emotionally resonant.</p>
              
              <p>The Sanderson Sisters represents our commitment to elevating beloved stories through professional artistry, creating an experience that honors the source material while offering something entirely new and sophisticated for adult audiences.</p>
              
              <a href="#contact" className="btn-luxury">Contact Us</a>
            </div>
            <div className="company-image">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop" 
                   alt="Extremely Social Event Production" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="experience-highlights">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="highlight-list">
            <div className="highlight-item">
              <h4>Adult-Focused Approach</h4>
              <p>Sophisticated interpretation designed specifically for mature audiences, featuring themes and interactions that resonate with adult sensibilities.</p>
            </div>
            <div className="highlight-item">
              <h4>Professional Artistry</h4>
              <p>Every performer is professionally trained, ensuring consistent, high-caliber entertainment that meets the expectations of discerning guests.</p>
            </div>
            <div className="highlight-item">
              <h4>Narrative Innovation</h4>
              <p>While honoring the beloved source material, we expand and deepen the story, creating new moments and revelations that surprise even devoted fans.</p>
            </div>
            <div className="highlight-item">
              <h4>Atmospheric Authenticity</h4>
              <p>Historical research informs every design choice, from costuming to set pieces, creating an authentic period atmosphere that enhances immersion.</p>
            </div>
            <div className="highlight-item">
              <h4>Exclusive Access</h4>
              <p>Limited audience size ensures intimate interaction opportunities and premium service that larger productions cannot provide.</p>
            </div>
            <div className="highlight-item">
              <h4>Memorable Moments</h4>
              <p>Carefully orchestrated surprises and interactive elements ensure every guest leaves with unique, personal memories of their evening with the Sisters.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;