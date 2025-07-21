import React from "react";

const Cocktails = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="cocktails-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h1>Signature Cocktails</h1>
                <h2>Enchanted Libations of Salem</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                {/* <p className="cocktail-price">$18</p> */}
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
                {/* <p className="cocktail-price">$16</p> */}
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
                {/* <p className="cocktail-price">$15</p> */}
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
                {/* <p className="cocktail-price">$22</p> */}
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
  );
};

export default Cocktails;
