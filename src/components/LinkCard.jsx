import React from "react";
import "./LinkCard.css";

const LinkCard = ({ title, description, url, image, price }) => {
  return (
    <div className="link-card">
      <img src={image} alt={title} className="link-card-image" />
      <h3 className="link-card-title">{title}</h3>
      <p className="link-card-description">{description}</p>
      <p className="link-card-price">{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="link-card-link">
        Acessar Produto
      </a>
    </div>
  );
};

export default LinkCard;
