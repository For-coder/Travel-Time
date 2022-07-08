import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/main.mp4" autoPlay loop muted />
      <h1>TRAVEL TIME</h1>
      <p>Go and change yourself.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GO!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WHAT WAITS <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
