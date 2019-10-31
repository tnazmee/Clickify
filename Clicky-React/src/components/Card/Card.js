import React from "react";
import "./Card.css";
import "./hover.css";

const Card = props => (
  
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container hvr-buzz-out">
      <img className="hvr-buzz-out" alt={props.name} src={props.image} />
    </div>
  </div>
  
);

export default Card;