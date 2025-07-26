import React from "react";
import "./DetailsCard.css";

const DetailsCard = ({ iconClass, title, description }) => {
  return (
    <div className="details-card">
      <div className="detail-icon">
        <i className={iconClass}></i>
      </div>
      <h3 className="mb-3 text-uppercase">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DetailsCard;
