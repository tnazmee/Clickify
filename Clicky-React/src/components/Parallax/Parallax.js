import React from "react";
import "./Parallax.css";

const Parallax = props => (
  
  <div className="parallax-bg">
    <div className="info-container">
        <div className="info-title">Instructions:</div>
        <div className="info">
            Click on any of these basketball players below to earn points, but don't click on any more than once!
            If you do click any of the same players twice, the game will reset. 
        </div>
    </div>
  </div>
  
);

export default Parallax;