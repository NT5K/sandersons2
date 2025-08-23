import React from "react";
import { Link } from "react-router-dom";
import "./ContactCard.css";

const Card = ({ iconClass, title, description, link, linkText, type }) => {
  const cardClass = `card h-100 p-4 text-white ${type}-card`;

  return (
    <div className={cardClass}>
      {iconClass && (
        <div className={`${type}-icon mb-3`}>
          <i className={iconClass}></i>
        </div>
      )}
      <h4 className="card-title mb-3">{title}</h4>
      <p className="card-text mb-3">{description}</p>
      {link && linkText && (
        <Link to={link} className={`${type}-link`}>
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default Card;
