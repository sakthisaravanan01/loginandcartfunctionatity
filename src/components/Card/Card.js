import React from "react";
import "./Card.css";
function Card({ name, image, price }) {
  return (
    <div>
      <div className="fruit-name">{name}</div>
      <div>
        <img src={image} alt={name} className="fruit-image" />
      </div>
      <div className="fruit-prizes">price:{price}</div>
    </div>
  );
}

export default Card;
