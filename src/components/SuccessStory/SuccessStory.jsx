import React from "react";
import "./SuccessStory.css";

const SuccessStory = () => {
  return (
    <section className="py-5 success-story-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="mb-4">
              <h3 className="mb-3 success-story-title">
                Now in Our Second Spellbinding Year
              </h3>
              <p className="text-white-50 mb-4 success-story-text">
                Last season, our Sanderson Sisters were{" "}
                <strong style={{ color: "var(--gold-accent)" }}>
                  completely sold out
                </strong>{" "}
                the entire month of October, half of September, and even into
                November. This year, we've expanded the magic with two
                enchanting options to bring the Hocus Pocus experience to any
                venue or event.
              </p>
              <div className="alert success-story-alert">
                <i className="fas fa-fire me-2"></i>
                <strong>Limited Run:</strong> Only booking late September to November 1st!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
