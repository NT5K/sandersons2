import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Initialize nanogallery2 when component mounts
    const initializeGallery = (galleryID, items, title, description) => {
      if (window.jQuery && window.jQuery.fn.nanogallery2) {
        window.jQuery(`#${galleryID}`).nanogallery2({
          itemsBaseURL: `./assets/images/`,
          items: items,
          galleryMaxRows: 2,
          galleryDisplayMode: 'rows',
          thumbnailHeight: '200',
          thumbnailWidth: 'auto',
          thumbnailAlignment: 'scaled',
          thumbnailGutterWidth: 10,
          thumbnailGutterHeight: 10,
          thumbnailBorderHorizontal: 2,
          thumbnailBorderVertical: 2,
          thumbnailLabel: {
            valign: "bottom",
            position: 'overImage',
            hideIcons: true,
            display: true,
            titleFontSize: '1.2em',
            descriptionFontSize: '1.05em',
          },
          galleryDisplayTransitionDuration: 1500,
          thumbnailDisplayTransition: 'imageSlideUp',
          thumbnailDisplayTransitionDuration: 1200,
          thumbnailDisplayTransitionEasing: 'easeInOutQuint',
          thumbnailDisplayInterval: 60,
          thumbnailBuildInit2: 'image_scale_1.00',
          thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.00_300|image_scale_1.00_1.05',
          touchAnimation: true,
          touchAutoOpenDelay: 500,
          viewerToolbar: { display: false },
          viewerTools: {
            topLeft: 'label',
            topRight: 'shareButton, closeButton'
          },
          galleryTheme: {
            thumbnail: {
              background: 'rgba(26, 26, 26, 0.8)',
              borderColor: 'rgba(212, 175, 55, 0.3)'
            },
          },
          locationHash: true,
          displayBreadcrumb: false
        });
      }
    };

    // Wait for jQuery and nanogallery2 to load
    const checkLibraries = () => {
      if (window.jQuery && window.jQuery.fn.nanogallery2) {
        initializeGallery('sanderson_gallery', [
          {
            src: 'sample1.png',
            srct: 'sample1.png',
            title: 'Enchanted Entrance',
            description: "Step into Salem's mystical world.",
          },
          {
            src: 'sample2.png',
            srct: 'sample2.png',
            title: 'Spellbinding Performance',
            description: "The Sanderson Sisters cast their spell.",
          },
          {
            src: 'sample3.png',
            srct: 'sample3.png',
            title: 'Witch\'s Brew',
            description: "Signature cocktails for every guest.",
          },
          {
            src: 'sample4.png',
            srct: 'sample4.png',
            title: 'Intimate Venue',
            description: "Atmospheric candlelit setting.",
          },
          {
            src: 'sample6.png',
            srct: 'sample5.png',
            title: 'Guests in Costume',
            description: "Guests embrace the spirit of Salem.",
          },
          {
            src: 'sample5.png',
            srct: 'sample6.png',
            title: 'Live Music',
            description: "Haunting melodies fill the night.",
          },
          {
            src: 'sample7.png',
            srct: 'sample7.png',
            title: 'Magical Finale',
            description: "A night to remember forever.",
          },
          {
            src: 'sample3.png',
            srct: 'sample7.png',
            title: 'Magical Finale',
            description: "A night to remember forever.",
          },
          {
            src: 'sample6.png',
            srct: 'sample7.png',
            title: 'Magical Finale',
            description: "A night to remember forever.",
          },
          {
            src: 'sample2.png',
            srct: 'sample7.png',
            title: 'Magical Finale',
            description: "A night to remember forever.",
          },
        ], 'gallery', 'Sanderson Sisters Experience');
      } else {
        setTimeout(checkLibraries, 100);
      }
    };

    checkLibraries();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="video-background">
          <source src="./assets/videos/sample.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h1>Sanderson Sisters</h1>
                <h2>An Exclusive Salem Experience</h2>
                <p>Step into the shadows of Salem's most notorious witches. An immersive theatrical experience
                  where ancient mystique meets modern luxury in an unforgettable evening of spells, spirits,
                  and sophisticated entertainment.</p>
                <div className="cta-buttons">
                  <a href="#tickets" className="btn-luxury">
                    Reserve Experience
                  </a>
                  <a href="#about" className="btn-luxury">
                    Discover More
                  </a>
                </div>
                <div className="hero-icons">
                  <div className="hero-icon">
                    <i className="fas fa-cocktail"></i>
                    <span>Themed Cocktails<br />Included</span>
                  </div>
                  <div className="hero-icon">
                    <i className="fas fa-theater-masks"></i>
                    <span>Live Performance<br />Experience</span>
                  </div>
                  <div className="hero-icon">
                    <i className="fas fa-users"></i>
                    <span>Intimate Venue<br />Limited Seating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="about">
        <div className="container">
          <h2 className="section-title">The Experience</h2>
          <div className="experience-content">
            <div className="experience-text">
              <h3>A Tale of Salem's Most Infamous</h3>
              <p>Immerse yourself in the legendary story of Winifred, Sarah, and Mary Sanderson. Our sophisticated
                interpretation brings these iconic characters to life through masterful storytelling,
                atmospheric design, and interactive entertainment.</p>
              <p>Set in an intimate venue that captures the essence of 1600s Salem, guests are invited to
                witness—and participate in—the sisters' most bewitching evening. From spell-casting rituals to
                musical performances, every moment is crafted to transport you into their mystical world.</p>
              <p>This is not merely dinner theater—this is an immersive journey into the heart of Salem's most
                captivating legend, elevated for the discerning adult audience.</p>
            </div>
            <div className="experience-image">
              <img src="./assets/images/sample1.png"
                alt="Atmospheric Salem setting" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Exclusive Offerings</h2>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <h3>Premium Performance</h3>
                <p>Experience theatrical excellence with professionally trained performers delivering an
                  immersive, high-caliber interpretation of the legendary Sanderson Sisters in an intimate
                  setting.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-glass-cheers"></i>
                </div>
                <h3>Curated Libations</h3>
                <p>Sophisticated audience engagement paired with carefully crafted themed cocktails and bespoke
                  entertainment tailored to discerning guests who appreciate theatrical artistry.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h3>Luxury Events</h3>
                <p>Elevated Halloween experiences designed for exclusive venues, private parties, corporate
                  events, and upscale gatherings seeking unparalleled entertainment and atmosphere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="practical-info" id="tickets">
        <div className="container">
          <h2 className="section-title">Information</h2>
          <div className="info-grid">
            <div className="info-video">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/idc0EOmKr30?si=Ln52qSfUqzX7QFFY"
                title="The Sanderson Sisters - The Witches Are Back (Music Video) Hocus Pocus 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen style={{border: '1px solid rgba(212, 175, 55, 0.3)'}}></iframe>
            </div>
            <div className="info-content">
              <div className="info-item p-0">
                <i className="fas fa-calendar-alt"></i>
                <span><strong>Dates:</strong> October - November, select evenings</span>
              </div>
              <div className="info-item p-0">
                <i className="fas fa-clock"></i>
                <span><strong>Duration:</strong> 2.5 hours immersive experience</span>
              </div>
              <div className="info-item p-0">
                <i className="fas fa-map-marker-alt"></i>
                <span><strong>Location:</strong> Exclusive Salem venue</span>
              </div>
              <div className="info-item p-0">
                <i className="fas fa-id-card"></i>
                <span><strong>Age Requirement:</strong> 21+ with valid ID</span>
              </div>
              <div className="info-item p-0">
                <i className="fas fa-tshirt"></i>
                <span><strong>Dress Code:</strong> Cocktail attire or costume</span>
              </div>
              <div className="info-item p-0">
                <i className="fas fa-cocktail"></i>
                <span><strong>Included:</strong> Welcome cocktails & themed libations</span>
              </div>

              <a href="#contact" className="btn-luxury" style={{marginTop: '2rem'}}>
                Reserve Your Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Glimpses into the mystical world of the Sanderson Sisters</p>

          <div id="sanderson_gallery"></div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="container">
          <h2 className="section-title">Reviews</h2>
          <p className="section-subtitle">What our guests say about their enchanted evening</p>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="review-card">
                <p className="review-text">"An absolutely spellbinding experience. The attention to detail and the
                  performers' commitment to their roles created an evening I'll never forget. Sophisticated
                  Halloween entertainment at its finest."</p>
                <div className="review-author">Margaret S.</div>
                <div className="review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="review-card">
                <p className="review-text">"The perfect blend of theater, cocktails, and atmosphere. My friends and
                  I felt like we were truly part of the Sanderson Sisters' world. Exceptional production
                  quality throughout."</p>
                <div className="review-author">Robert K.</div>
                <div className="review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="review-card">
                <p className="review-text">"Elegantly executed and thoroughly immersive. The venue was intimate yet
                  grand, and the cocktails were as bewitching as the performance itself. A truly unique Salem
                  experience."</p>
                <div className="review-author">Diana L.</div>
                <div className="review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location" id="location">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '40px'}}>Extremely Social</h2>
              <p className="location-description"
                style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', lineHeight: '1.8', color: 'var(--silver)', marginBottom: '40px'}}>
                Based in Cleveland, Ohio, Extremely Social specializes in creating immersive, emotionally
                effective life experiences. We don't just plan events—we craft unforgettable experiences that
                transport guests into extraordinary worlds of entertainment and sophistication.
              </p>
              <div className="location-info" style={{marginBottom: '40px'}}>
                <div className="info-item" style={{display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-map-marker-alt"
                    style={{fontSize: '1.5rem', color: 'var(--gold-accent)', marginRight: '20px', minWidth: '30px'}}></i>
                  <span style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem'}}>
                    <strong style={{color: 'var(--gold-accent)'}}>Location:</strong> Cleveland, Ohio
                  </span>
                </div>
                <div className="info-item" style={{display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-envelope"
                    style={{fontSize: '1.5rem', color: 'var(--gold-accent)', marginRight: '20px', minWidth: '30px'}}></i>
                  <span style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem'}}>
                    <strong style={{color: 'var(--gold-accent)'}}>Contact:</strong>
                    <a href="mailto:info@extremelysocial.com"
                      style={{color: 'var(--silver)', textDecoration: 'none'}}>info@extremelysocial.com</a>
                  </span>
                </div>
                <div className="info-item" style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                  <i className="fas fa-users"
                    style={{fontSize: '1.5rem', color: 'var(--gold-accent)', marginRight: '20px', minWidth: '30px'}}></i>
                  <span style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem'}}>
                    <strong style={{color: 'var(--gold-accent)'}}>Follow Us:</strong>
                    <a href="https://www.facebook.com/extremelysocial/" target="_blank" rel="noopener noreferrer"
                      style={{color: 'var(--silver)', textDecoration: 'none', marginLeft: '10px'}}>
                      <i className="fab fa-facebook" style={{fontSize: '1.3rem', marginRight: '15px'}}></i>
                    </a>
                    <a href="https://www.instagram.com/extremelysocialcle/" target="_blank" rel="noopener noreferrer"
                      style={{color: 'var(--silver)', textDecoration: 'none'}}>
                      <i className="fab fa-instagram" style={{fontSize: '1.3rem'}}></i>
                    </a>
                  </span>
                </div>
              </div>
              <a href="#contact" className="btn-luxury" style={{marginTop: '20px'}}>
                Get In Touch
              </a>
            </div>
            <div className="col-lg-5">
              <div className="location-image" style={{border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden'}}>
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop"
                  alt="Cleveland Event Space" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;