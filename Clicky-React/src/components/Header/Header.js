import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
  <div className="row justify-content-center fixed-top">
  <div className="col-8 header-nav">

    <div className="title">{props.children}</div>
    <div className="scores">
      <div className="current-score">Current Score: {props.score}</div>
      <div className="top-score">Top Score: {props.highscore}</div>
    </div>

  </div>
  </div>
  </div>

  
);

export default Header;