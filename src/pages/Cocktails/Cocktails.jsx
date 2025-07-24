import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import "./Cocktails.css";

const Cocktails = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/drinks/hero_cocktail_mashup.png"
          title="Signature Cocktails"
          subtitle="Enchanted Libations of Salem"
          height="70vh"
        />

        {/* Cocktail Menu Introduction */}
        <section className="cocktail-menu-section py-5">
          <div className="container">
            <h2 className="section-title text-center">Bewitching Beverages</h2>
            <div className="menu-intro text-center mx-auto mb-5">
              <p className="fs-4 lh-base text-silver opacity-90">
                Each cocktail in our collection is carefully crafted to embody
                the essence of Salem's most notorious sisters. From Winifred's
                commanding presence to Sarah's ethereal charm, Mary's earthy
                warmth, and the legendary Black Flame Candle's mystical
                power—every sip tells a story of magic, mischief, and mastery.
              </p>
            </div>
          </div>
        </section>

        {/* Cocktails Section */}
        <section className="cocktails-section py-5">
          <div className="container">
            <div className="cocktail-card winifred-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-0">
                  <img
                    src="./assets/images/drinks/winifreds-revenge.png"
                    alt="Winifred's Revenge Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-1">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Winifred's Revenge
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ The Eldest Sister's Elixir ~
                  </p>
                  <p className="cocktail-description mb-4">
                    A commanding blend as fierce and complex as the eldest
                    Sanderson sister herself. This dark crimson libation
                    combines the boldness of aged bourbon with the mystique of
                    blackberry liqueur, balanced by hints of rosemary and a
                    touch of smoke that lingers like ancient spells.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Enchanted Ingredients
                    </p>
                    <p className="ingredients-list">
                      Aged bourbon whiskey • Blackberry liqueur • Fresh rosemary
                      • Smoked simple syrup • Blood orange juice • Angostura
                      bitters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cocktail-card sarah-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-0 order-lg-1">
                  <img
                    src="./assets/images/drinks/sarahs-seduction.png"
                    alt="Sarah's Seduction Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-1 order-lg-0">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Sarah's Seduction
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ The Enchantress's Elixir ~
                  </p>
                  <p className="cocktail-description mb-4">
                    Light and beguiling like Sarah's ethereal voice, this
                    lavender-hued creation captures her whimsical yet dangerous
                    nature. Floral notes of elderflower dance with botanical
                    gin, while butterfly pea flower creates a mesmerizing
                    color-changing effect when citrus touches the glass.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Enchanted Ingredients
                    </p>
                    <p className="ingredients-list">
                      Premium gin • Elderflower liqueur • Butterfly pea flower
                      tea • Fresh lavender • Lemon juice • Vanilla simple syrup
                      • Edible glitter
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cocktail-card mary-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-0">
                  <img
                    src="./assets/images/drinks/marys-mischief.png"
                    alt="Mary's Mischief Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-1">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Mary's Mischief
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ The Youngest Sister's Brew ~
                  </p>
                  <p className="cocktail-description mb-4">
                    Warm and comforting with a mischievous twist, this
                    amber-colored concoction reflects Mary's playful yet
                    unpredictable nature. Spiced rum mingles with apple cider
                    reduction, cinnamon, and a hint of maple, finished with a
                    dramatic flaming orange peel presentation.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Enchanted Ingredients
                    </p>
                    <p className="ingredients-list">
                      Spiced rum • Apple cider reduction • Maple syrup • Fresh
                      cinnamon • Orange bitters • Flaming orange peel • Star
                      anise garnish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cocktail-card black-flame-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-0 order-lg-1">
                  <img
                    src="./assets/images/drinks/black-flame-candle.png"
                    alt="Black Flame Candle Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-1 order-lg-0">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Black Flame Candle
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ The Ultimate Resurrection ~
                  </p>
                  <p className="cocktail-description mb-4">
                    The pinnacle of our mystical menu—a theatrical masterpiece
                    that embodies the legendary Black Flame Candle's power. This
                    dark, smoky creation features activated charcoal for its
                    midnight hue, topped with a flame that dances atop the
                    glass, creating an unforgettable spectacle of taste and
                    theater.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Enchanted Ingredients
                    </p>
                    <p className="ingredients-list">
                      Premium mezcal • Activated charcoal • Black walnut bitters
                      • Agave nectar • Fresh lime • Smoked salt rim • Flaming
                      absinthe float
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Enhancement Section */}
        <section className="experience py-5">
          <div className="container">
            <h2 className="section-title text-center">
              The Complete Experience
            </h2>
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="service-card text-center p-4">
                  <div className="service-icon mb-4">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="mb-3 text-uppercase">
                    Theatrical Presentation
                  </h3>
                  <p className="fw-light">
                    Each cocktail is presented with dramatic flair,
                    incorporating smoke effects, color-changing elements, and
                    theatrical garnishes that enhance the mystical atmosphere.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card text-center p-4">
                  <div className="service-icon mb-4">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3 className="mb-3 text-uppercase">Premium Ingredients</h3>
                  <p className="fw-light">
                    We source only the finest spirits and craft each cocktail
                    with house-made syrups, fresh herbs, and unique ingredients
                    that cannot be found elsewhere.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card text-center p-4">
                  <div className="service-icon mb-4">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="mb-3 text-uppercase">Interactive Service</h3>
                  <p className="fw-light">
                    Our servers, trained in the art of theatrical presentation,
                    deliver each cocktail with a story, enhancing your immersion
                    in the Sanderson Sisters' world.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
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
