import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Link } from "react-router-dom";
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
                Four signature cocktails expertly paired with each musical
                performance in our Sanderson Sisters Soirée. From the welcoming
                spell to the soul-sucking finale, each libation is crafted to
                enhance the magical journey and immerse guests deeper into the
                mystical world of Salem's most infamous witches.
              </p>
            </div>
          </div>
        </section>

        {/* Cocktails Section */}
        <section className="cocktails-section py-5">
          <div className="container">
            {/* Cocktail 1: Witch's Welcome */}
            <div className="cocktail-card winifred-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-0">
                  <img
                    src="./assets/images/drinks/winifreds-revenge.png"
                    alt="Witch's Welcome Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-1">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Witch's Welcome
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ Paired with "I Put a Spell on You" ~
                  </p>
                  <p className="cocktail-description mb-4">
                    The perfect greeting as the Sanderson Sisters make their
                    grand entrance. This enchanting elixir puts a playful spell
                    on guests, "claiming" them for the next 90 minutes of
                    magical mayhem. A bewitching blend that sets the tone for an
                    unforgettable evening of interactive entertainment.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Mystical Elements
                    </p>
                    <p className="ingredients-list">
                      A welcoming concoction designed to enchant and delight •
                      Crafted to complement the Sisters' dramatic entrance •
                      Sets the magical tone for the evening's entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cocktail 2: The Betrayal Brew */}
            <div className="cocktail-card sarah-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-1 order-lg-0">
                  <img
                    src="./assets/images/drinks/sarahs-seduction.png"
                    alt="The Betrayal Brew Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-0 order-lg-1">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    The Betrayal Brew
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ Paired with "One Way or Another" ~
                  </p>
                  <p className="cocktail-description mb-4">
                    A dramatically bittersweet libation that accompanies
                    Winifred's comedic storytelling moment about Billy's
                    betrayal with her younger sister, Sarah. This cocktail
                    perfectly captures the drama of sisterly rivalry and
                    forbidden romance, providing the perfect liquid
                    accompaniment to the evening's most theatrical revelation.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Dramatic Components
                    </p>
                    <p className="ingredients-list">
                      A tale of love and betrayal in liquid form • Bittersweet
                      notes reflecting sisterly drama • Perfect pairing for
                      comedic storytelling and crowd interaction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cocktail 3: Black Flame Elixir */}
            <div className="cocktail-card black-flame-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-0">
                  <img
                    src="./assets/images/drinks/marys-mischief.png"
                    alt="Black Flame Elixir Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-1">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Black Flame Elixir
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ Paired with "The Witches Are Back" ~
                  </p>
                  <p className="cocktail-description mb-4">
                    The most mystical of our offerings, served as the Sisters
                    return from the grave— all thanks to a virgin lighting the
                    black flame candle! This high-energy libation accompanies
                    the audience spotlight moment when someone from the crowd is
                    chosen to play "the virgin" in a hilarious recurring gag
                    that delights guests throughout the evening.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Resurrection Elements
                    </p>
                    <p className="ingredients-list">
                      Dark and mysterious with flickering flames • Channels the
                      power of the legendary black flame candle • Served during
                      the evening's most interactive and energetic moment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cocktail 4: Soul Sucker Sangria */}
            <div className="cocktail-card mary-card rounded-0 mb-5">
              <div className="cocktail-content d-flex flex-column flex-lg-row min-h-400 position-relative z-2">
                <div className="cocktail-image w-100 w-lg-50 min-h-300 order-1 order-lg-0">
                  <img
                    src="./assets/images/drinks/winifreds-revenge.png"
                    alt="Soul Sucker Sangria Cocktail"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="cocktail-info p-5 d-flex flex-column justify-content-center w-100 w-lg-50 order-0 order-lg-1">
                  <h3 className="cocktail-name mb-3 text-uppercase">
                    Soul Sucker Sangria
                  </h3>
                  <p className="cocktail-sister mb-4 text-uppercase">
                    ~ Paired with "Carol of the Witches" ~
                  </p>
                  <p className="cocktail-description mb-4">
                    The perfect finale as the Sanderson Sisters cast their most
                    haunting, melodic spell. This deep red sangria or
                    blackberry-vodka-based cocktail is garnished with dry ice or
                    a "soul swirl" of silver edible glitter. Dark, mysterious,
                    and delicious—served as the sisters circle the room and
                    "choose" their next victims for eternal youth.
                  </p>
                  <div className="cocktail-ingredients mb-4">
                    <p className="ingredients-title mb-3 text-uppercase">
                      Soul-Stealing Components
                    </p>
                    <p className="ingredients-list">
                      Deep red sangria or blackberry-vodka base • Garnished with
                      mystical dry ice for dramatic effect • Silver edible
                      glitter creates the signature "soul swirl" • The chilling
                      finale to your evening's enchantment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Enhancement Section */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="section-title text-center mb-5">
              More Than Just Cocktails
            </h2>
            <div className="row g-4">
              <div className="col-lg-4">
                <DetailsCard
                  iconClass="fas fa-theater-masks"
                  title="Performance Pairing"
                  description="Each cocktail is expertly timed and paired with specific musical numbers, 
                      creating a synchronized experience where every sip enhances the theatrical magic 
                      unfolding before your eyes."
                />
              </div>
              <div className="col-lg-4">
                <DetailsCard
                  iconClass="fas fa-magic"
                  title="Interactive Elements"
                  description="More than just drinks—these cocktails become part of the show through 
                      spell-casting rituals, dramatic presentations, and moments where guests participate 
                      in the Sisters' magical ceremonies."
                />
              </div>
              <div className="col-lg-4">
                <DetailsCard
                  iconClass="fas fa-users"
                  title="Atmospheric Service"
                  description="Our professional cast serves each cocktail with theatrical flair and 
                      character interaction, ensuring every drink delivery becomes a memorable moment 
                      in your Sanderson Sisters journey."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Venue Customization Section */}
        <section
          className="py-5"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(45, 27, 105, 0.05) 50%, transparent 100%)",
          }}
        >
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Venue Customization
            </h2>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="private-text">
                  <h3 className="text-gold mb-4">
                    Adaptable to Your Bar Program
                  </h3>
                  <p
                    className="text-silver mb-3"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      lineHeight: "1.8",
                    }}
                  >
                    We provide coordinated drink pairing recommendations and
                    work with your bartending team to ensure these signature
                    cocktails can be executed with your existing bar setup and
                    inventory.
                  </p>

                  <p
                    className="text-silver mb-4"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      lineHeight: "1.8",
                    }}
                  >
                    Our cocktail menu recommendations are flexible and can be
                    adapted based on your venue's capabilities, preferred
                    spirits, and price points while maintaining the theatrical
                    presentation that makes each drink special.
                  </p>

                  <ul className="list-unstyled mb-4 private-features">
                    <li className="mb-3">
                      Menu recommendations tailored to your bar capabilities
                    </li>
                    <li className="mb-3">
                      Flexible ingredients based on your inventory preferences
                    </li>
                    <li className="mb-3">
                      Theatrical presentation training for your bartending staff
                    </li>
                    <li className="mb-3">
                      Timing coordination with musical performances
                    </li>
                    <li className="mb-3">
                      Special effects guidance (dry ice, garnishes, glitter)
                    </li>
                    <li className="mb-3">
                      Pricing strategies that maximize your bar revenue
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn-luxury">
                    Discuss Your Bar Program
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="private-image border border-warning overflow-hidden">
                  <img
                    src="./assets/images/edits/1.png"
                    alt="Venue Bar Setup"
                    className="img-fluid w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>
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
              <h2 className="section-title mb-3">Ready to Serve Some Magic?</h2>
              <p
                className="section-subtitle mb-5 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                These signature cocktails are an integral part of the complete
                Sanderson Sisters experience. Contact us to learn how we can
                help integrate these mystical libations into your venue's bar
                program for maximum guest engagement and revenue.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/tickets" className="btn btn-luxury">
                  <i className="fas fa-magic me-2"></i>
                  View Experiences
                </Link>
                <Link to="/contact" className="btn btn-luxury">
                  <i className="fas fa-cocktail me-2"></i>
                  Customize Bar Program
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cocktails;
