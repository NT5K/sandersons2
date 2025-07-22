import React from "react";
import PageHero from "../components/PageHero";

// Component-specific styles
const cocktailsStyles = `
/* Cocktails Page Styles */

.cocktails-section {
  padding: 120px 0;
  position: relative;
  z-index: 2;
}

.cocktail-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.95),
    rgba(42, 42, 42, 0.8)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 60px;
  position: relative;
  backdrop-filter: blur(15px);
  transition: all 0.6s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cocktail-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.1),
    transparent
  );
  transition: left 0.8s ease;
  z-index: 1;
}

.cocktail-card:hover::before {
  left: 100%;
}

.cocktail-card:hover {
  transform: translateY(-10px);
  border-color: var(--gold-accent);
  box-shadow: 0 25px 50px rgba(212, 175, 55, 0.2);
}

.cocktail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
  position: relative;
  z-index: 2;
}

.cocktail-image {
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, var(--rich-purple), var(--burgundy));
}

.cocktail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  filter: brightness(0.9) contrast(1.1);
}

.cocktail-card:hover .cocktail-image img {
  transform: scale(1.05);
}

.cocktail-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(45, 27, 105, 0.3),
    rgba(114, 47, 55, 0.3)
  );
  mix-blend-mode: multiply;
}

.cocktail-info {
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.9),
    rgba(42, 42, 42, 0.7)
  );
}

.cocktail-name {
  font-family: "Playfair Display", serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--gold-accent);
  margin-bottom: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.cocktail-sister {
  font-family: "Cinzel", serif;
  font-size: 1.1rem;
  color: var(--silver);
  opacity: 0.8;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cocktail-description {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--silver);
  margin-bottom: 30px;
  opacity: 0.9;
}

.cocktail-ingredients {
  margin-bottom: 30px;
}

.ingredients-title {
  font-family: "Cinzel", serif;
  font-size: 1.2rem;
  color: var(--gold-accent);
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ingredients-list {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.1rem;
  color: var(--silver);
  opacity: 0.9;
  line-height: 1.6;
}

.cocktail-price {
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--gold-accent);
  text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

/* Special styling for Winifred's cocktail */
.winifred-card {
  border-color: rgba(139, 0, 0, 0.5);
}

.winifred-card .cocktail-image {
  background: linear-gradient(45deg, var(--ember), var(--burgundy));
}

.winifred-card:hover {
  border-color: var(--ember);
  box-shadow: 0 25px 50px rgba(139, 0, 0, 0.3);
}

/* Special styling for Sarah's cocktail */
.sarah-card {
  border-color: rgba(45, 27, 105, 0.5);
}

.sarah-card .cocktail-image {
  background: linear-gradient(45deg, var(--rich-purple), #4a0e4e);
}

.sarah-card:hover {
  border-color: var(--rich-purple);
  box-shadow: 0 25px 50px rgba(45, 27, 105, 0.3);
}

/* Special styling for Mary's cocktail */
.mary-card {
  border-color: rgba(114, 47, 55, 0.5);
}

.mary-card .cocktail-image {
  background: linear-gradient(45deg, var(--burgundy), #8b4513);
}

.mary-card:hover {
  border-color: var(--burgundy);
  box-shadow: 0 25px 50px rgba(114, 47, 55, 0.3);
}

/* Special styling for Black Flame cocktail */
.black-flame-card {
  border-color: rgba(212, 175, 55, 0.8);
  background: linear-gradient(
    145deg,
    rgba(10, 10, 10, 0.95),
    rgba(26, 26, 26, 0.9)
  );
}

.black-flame-card .cocktail-image {
  background: linear-gradient(45deg, var(--deep-black), var(--gold-accent));
}

.black-flame-card:hover {
  border-color: var(--gold-accent);
  box-shadow: 0 25px 50px rgba(212, 175, 55, 0.4);
}

.black-flame-card .cocktail-name {
  color: var(--gold-accent);
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
}

/* Cocktail Menu Section */
.cocktail-menu-section {
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.3) 0%,
    transparent 100%
  );
}

.menu-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.menu-intro p {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.4rem;
  line-height: 1.8;
  color: var(--silver);
  opacity: 0.9;
}

/* Service Cards - Extending global card base */
.service-card {
  background: linear-gradient(
    145deg,
    rgba(26, 26, 26, 0.8),
    rgba(42, 42, 42, 0.6)
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 40px 30px;
  text-align: center;
  transition: all 0.5s ease;
  backdrop-filter: blur(15px);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.1),
    transparent
  );
  transition: left 0.8s ease;
}

.service-card:hover::before {
  left: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 20px;
  transition: all 0.4s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.05);
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4));
}

.service-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gold-accent);
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.service-card p {
  font-family: "Cormorant Garamond", serif;
  color: var(--silver);
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.9;
}

/* Experience enhancement section */
.experience {
  padding: 120px 0;
  position: relative;
  z-index: 2;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 26, 26, 0.5) 50%,
    transparent 100%
  );
}

/* Responsive adjustments for cocktails */
@media (max-width: 768px) {
  .cocktail-content {
    grid-template-columns: 1fr;
  }

  .cocktail-info {
    padding: 40px 30px;
  }

  .cocktail-name {
    font-size: 2.2rem;
  }

  .cocktail-image {
    min-height: 300px;
  }

  .cocktails-section {
    padding: 80px 0;
  }
}
`;

const Cocktails = () => {
  return (
    <>
      <style>{cocktailsStyles}</style>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/drinks/hero_cocktail_mashup.png"
          title="Signature Cocktails"
          subtitle="Enchanted Libations of Salem"
          height="60vh"
        />

        {/* Cocktail Menu Introduction */}
        <section className="cocktail-menu-section">
          <div className="container">
            <h2 className="section-title">Bewitching Beverages</h2>
            <div className="menu-intro">
              <p>
                Each cocktail in our collection is carefully crafted to embody the
                essence of Salem's most notorious sisters. From Winifred's
                commanding presence to Sarah's ethereal charm, Mary's earthy
                warmth, and the legendary Black Flame Candle's mystical
                power—every sip tells a story of magic, mischief, and mastery.
              </p>
            </div>
          </div>
        </section>

        {/* Cocktails Section */}
        <section className="cocktails-section">
          <div className="container">
            {/* Winifred's Revenge */}
            <div className="cocktail-card winifred-card">
              <div className="cocktail-content">
                <div className="cocktail-image">
                  <img
                    src="./assets/images/drinks/winifreds-revenge.png"
                    alt="Winifred's Revenge Cocktail"
                  />
                </div>
                <div className="cocktail-info">
                  <h3 className="cocktail-name">Winifred's Revenge</h3>
                  <p className="cocktail-sister">
                    ~ The Eldest Sister's Elixir ~
                  </p>
                  <p className="cocktail-description">
                    A commanding blend as fierce and complex as the eldest
                    Sanderson sister herself. This dark crimson libation combines
                    the boldness of aged bourbon with the mystique of blackberry
                    liqueur, balanced by hints of rosemary and a touch of smoke
                    that lingers like ancient spells.
                  </p>
                  <div className="cocktail-ingredients">
                    <p className="ingredients-title">Enchanted Ingredients</p>
                    <p className="ingredients-list">
                      Aged bourbon whiskey • Blackberry liqueur • Fresh rosemary •
                      Smoked simple syrup • Blood orange juice • Angostura bitters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sarah's Seduction */}
            <div className="cocktail-card sarah-card">
              <div className="cocktail-content">
                <div className="cocktail-info">
                  <h3 className="cocktail-name">Sarah's Seduction</h3>
                  <p className="cocktail-sister">~ The Enchantress's Elixir ~</p>
                  <p className="cocktail-description">
                    Light and beguiling like Sarah's ethereal voice, this
                    lavender-hued creation captures her whimsical yet dangerous
                    nature. Floral notes of elderflower dance with botanical gin,
                    while butterfly pea flower creates a mesmerizing
                    color-changing effect when citrus touches the glass.
                  </p>
                  <div className="cocktail-ingredients">
                    <p className="ingredients-title">Enchanted Ingredients</p>
                    <p className="ingredients-list">
                      Premium gin • Elderflower liqueur • Butterfly pea flower tea
                      • Fresh lavender • Lemon juice • Vanilla simple syrup •
                      Edible glitter
                    </p>
                  </div>
                </div>
                <div className="cocktail-image">
                  <img
                    src="./assets/images/drinks/sarahs-seduction.png"
                    alt="Sarah's Seduction Cocktail"
                  />
                </div>
              </div>
            </div>

            {/* Mary's Mischief */}
            <div className="cocktail-card mary-card">
              <div className="cocktail-content">
                <div className="cocktail-image">
                  <img
                    src="./assets/images/drinks/marys-mischief.png"
                    alt="Mary's Mischief Cocktail"
                  />
                </div>
                <div className="cocktail-info">
                  <h3 className="cocktail-name">Mary's Mischief</h3>
                  <p className="cocktail-sister">
                    ~ The Youngest Sister's Brew ~
                  </p>
                  <p className="cocktail-description">
                    Warm and comforting with a mischievous twist, this
                    amber-colored concoction reflects Mary's playful yet
                    unpredictable nature. Spiced rum mingles with apple cider
                    reduction, cinnamon, and a hint of maple, finished with a
                    dramatic flaming orange peel presentation.
                  </p>
                  <div className="cocktail-ingredients">
                    <p className="ingredients-title">Enchanted Ingredients</p>
                    <p className="ingredients-list">
                      Spiced rum • Apple cider reduction • Maple syrup • Fresh
                      cinnamon • Orange bitters • Flaming orange peel • Star anise
                      garnish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Black Flame Candle */}
            <div className="cocktail-card black-flame-card">
              <div className="cocktail-content">
                <div className="cocktail-info">
                  <h3 className="cocktail-name">Black Flame Candle</h3>
                  <p className="cocktail-sister">~ The Ultimate Resurrection ~</p>
                  <p className="cocktail-description">
                    The pinnacle of our mystical menu—a theatrical masterpiece
                    that embodies the legendary Black Flame Candle's power. This
                    dark, smoky creation features activated charcoal for its
                    midnight hue, topped with a flame that dances atop the glass,
                    creating an unforgettable spectacle of taste and theater.
                  </p>
                  <div className="cocktail-ingredients">
                    <p className="ingredients-title">Enchanted Ingredients</p>
                    <p className="ingredients-list">
                      Premium mezcal • Activated charcoal • Black walnut bitters •
                      Agave nectar • Fresh lime • Smoked salt rim • Flaming
                      absinthe float
                    </p>
                  </div>
                </div>
                <div className="cocktail-image">
                  <img
                    src="./assets/images/drinks/black-flame-candle.png"
                    alt="Black Flame Candle Cocktail"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Enhancement Section */}
        <section className="experience" style={{ padding: "100px 0" }}>
          <div className="container">
            <h2 className="section-title">The Complete Experience</h2>
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="service-card">
                  <div className="service-icon">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3>Theatrical Presentation</h3>
                  <p>
                    Each cocktail is presented with dramatic flair, incorporating
                    smoke effects, color-changing elements, and theatrical
                    garnishes that enhance the mystical atmosphere.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card">
                  <div className="service-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Premium Ingredients</h3>
                  <p>
                    We source only the finest spirits and craft each cocktail with
                    house-made syrups, fresh herbs, and unique ingredients that
                    cannot be found elsewhere.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card">
                  <div className="service-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Interactive Service</h3>
                  <p>
                    Our servers, trained in the art of theatrical presentation,
                    deliver each cocktail with a story, enhancing your immersion
                    in the Sanderson Sisters' world.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center" style={{ marginTop: "60px" }}>
              <a href="#tickets" className="btn-luxury">
                Reserve Your Magical Evening
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cocktails;