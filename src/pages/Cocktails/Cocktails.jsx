import React from "react";
import PageHero from "../../components/PageHero/PageHero";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Link } from "react-router-dom";
import "./Cocktails.css";

// --- Data for each cocktail, separated from presentation ---
const cocktailsData = [
  {
    id: "winifred",
    name: "Witch's Welcome",
    pairing: `~ Paired with "I Put a Spell on You" ~`,
    description: `The perfect greeting as the Sanderson Sisters make their grand entrance. This enchanting elixir puts a playful spell on guests, "claiming" them for the next 90 minutes of magical mayhem. A bewitching blend that sets the tone for an unforgettable evening of interactive entertainment.`,
    ingredientsTitle: "Mystical Elements",
    ingredientsList: `A welcoming concoction designed to enchant and delight • Crafted to complement the Sisters' dramatic entrance • Sets the magical tone for the evening's entertainment`,
    imageSrc: "./assets/images/drinks/winifreds-revenge.png",
    imageAlt: "Witch's Welcome Cocktail",
    layout: "image-left",
  },
  {
    id: "sarah",
    name: "The Betrayal Brew",
    pairing: `~ Paired with "One Way or Another" ~`,
    description: `A dramatically bittersweet libation that accompanies Winifred's comedic storytelling moment about Billy's betrayal with her younger sister, Sarah. This cocktail perfectly captures the drama of sisterly rivalry and forbidden romance, providing the perfect liquid accompaniment to the evening's most theatrical revelation.`,
    ingredientsTitle: "Dramatic Components",
    ingredientsList: `A tale of love and betrayal in liquid form • Bittersweet notes reflecting sisterly drama • Perfect pairing for comedic storytelling and crowd interaction`,
    imageSrc: "./assets/images/drinks/sarahs-seduction.png",
    imageAlt: "The Betrayal Brew Cocktail",
    layout: "image-right",
  },
  {
    id: "mary",
    name: "Soul Sucker Sangria",
    pairing: `~ Paired with "Carol of the Witches" ~`,
    description: `The perfect finale as the Sanderson Sisters cast their most haunting, melodic spell. This deep red sangria or blackberry-vodka-based cocktail is garnished with dry ice or a "soul swirl" of silver edible glitter. Dark, mysterious, and delicious—served as the sisters circle the room and "choose" their next victims for eternal youth.`,
    ingredientsTitle: "Soul-Stealing Components",
    ingredientsList: `Deep red sangria or blackberry-vodka base • Garnished with mystical dry ice for dramatic effect • Silver edible glitter creates the signature "soul swirl" • The chilling finale to your evening's enchantment`,
    imageSrc: "./assets/images/drinks/marys-mischief.png",
    imageAlt: "Soul Sucker Sangria Cocktail",
    layout: "image-left",
  },
  {
    id: "black-flame",
    name: "Black Flame Elixir",
    pairing: `~ Paired with "The Witches Are Back" ~`,
    description: `The most mystical of our offerings, served as the Sisters return from the grave— all thanks to a virgin lighting the black flame candle! This high-energy libation accompanies the audience spotlight moment when someone from the crowd is chosen to play "the virgin" in a hilarious recurring gag that delights guests throughout the evening.`,
    ingredientsTitle: "Resurrection Elements",
    ingredientsList: `Dark and mysterious with flickering flames • Channels the power of the legendary black flame candle • Served during the evening's most interactive and energetic moment`,
    imageSrc: "./assets/images/drinks/black-flame-candle.png",
    imageAlt: "Black Flame Elixir Cocktail",
    layout: "image-rigt",
  },
];

// --- Reusable component for a single cocktail card ---
const CocktailCard = ({ cocktail }) => {
  const isImageLeft = cocktail.layout === "image-left";

  return (
    <div className={`cocktail-card ${cocktail.id}-card`}>
      <div className="cocktail-content row g-0">
        <div
          className={`cocktail-image col-lg-6 ${
            !isImageLeft ? "order-lg-1" : ""
          }`}
        >
          <img
            src={cocktail.imageSrc}
            alt={cocktail.imageAlt}
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <div
          className={`cocktail-info p-5 d-flex flex-column justify-content-center col-lg-6 ${
            !isImageLeft ? "order-lg-0" : ""
          }`}
        >
          <h3 className="cocktail-name">{cocktail.name}</h3>
          <p className="cocktail-sister">{cocktail.pairing}</p>
          <p className="cocktail-description">{cocktail.description}</p>
          <div className="cocktail-ingredients">
            <p className="ingredients-title">{cocktail.ingredientsTitle}</p>
            <p className="ingredients-list">{cocktail.ingredientsList}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Cocktails Page Component ---
const Cocktails = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Hero Section */}
        <PageHero
          backgroundImage="./assets/images/drinks/hero_cocktail_mashup.png"
          title="Signature Cocktails"
          subtitle="Enchanted Libations of Salem"
          height="70vh"
        />

        {/* Cocktail Menu Introduction */}
        <section className="cocktail-menu-section">
          <div className="container">
            <h2 className="section-title text-center">
              Inspirational Cocktail Concepts
            </h2>
            <div className="menu-intro col-lg-8 mx-auto text-center">
              <p>
                Our Sanderson Sisters Soirée is enhanced by signature cocktails
                expertly paired with each musical performance. Below are four
                inspirational concepts designed to spark the imagination. The
                final drink menu is always customized in collaboration with each
                venue, ensuring a unique and perfectly integrated bar program
                that enhances the magical journey for your guests.
              </p>
            </div>
          </div>
        </section>

        {/* Cocktails Section */}
        <section className="cocktails-section">
          <div className="container">
            {cocktailsData.map((cocktail) => (
              <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        </section>

        {/* Experience Enhancement Section */}
        <section className="enhancement-section">
          <div className="container">
            <h2 className="section-title text-center">
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
        <section className="customization-section pt-5">
          <div className="container">
            <h2 className="section-title text-center">
              Customized For Your Venue
            </h2>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="private-text">
                  <h3 className="text-gold">
                    Inspirational Concepts, Practical Solutions
                  </h3>
                  <p className="text-silver">
                    The cocktails featured on this page are inspirational
                    concepts that demonstrate how we pair libations with key
                    moments in the show. Our primary goal is to collaborate with
                    your bartending team to design a custom menu that utilizes
                    your existing bar setup and inventory while still capturing
                    the theatrical spirit of the event.
                  </p>
                  <p className="text-silver">
                    Whether you adapt our ideas or create something entirely
                    new, our recommendations are flexible. We'll help you craft
                    a menu that meets your venue's capabilities, preferred
                    spirits, and price points, all while maintaining the magical
                    presentation that makes each drink special.
                  </p>
                  <ul className="list-unstyled private-features">
                    <li>
                      Menu recommendations tailored to your bar capabilities
                    </li>
                    <li>
                      Flexible ingredients based on your inventory preferences
                    </li>
                    <li>
                      Theatrical presentation training for your bartending staff
                    </li>
                    <li>Timing coordination with musical performances</li>
                    <li>
                      Special effects guidance (dry ice, garnishes, glitter)
                    </li>
                    <li>Pricing strategies that maximize your bar revenue</li>
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
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section pt-5">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Ready to Serve Some Magic?</h2>
              <p className="section-subtitle">
                Our signature cocktail concepts are an integral part of the
                complete Sanderson Sisters experience. Contact us to learn how
                we can collaborate with you to integrate a custom, mystical bar
                program that maximizes guest engagement and revenue.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
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
