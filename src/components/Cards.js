import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Explore these Unique Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/one.jpg"
              text="Lenvik, Troms, Norway"
              label="Hot"
              path="/sign-up"
            />
            <CardItem
              src="images/two.jpg"
              text="Fukuoka, Fukuoka, Japan"
              label="Hot"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/three.jpg"
              text="Central Province, Maldives"
              label="Luxury"
              path="/sign-up"
            />
            <CardItem
              src="images/four.jpg"
              text="Lake Louise, AB, Canada"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="images/five.jpg"
              text="Erbil, Erbil Governorate, Iraq"
              label="Mystery"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
