import React from "react";
import "./Cards3.css";
import CardItem from "./CardItem";

function Cards3() {
  return (
    <div className="cards">
      <h1>Our Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/d1.jpg"
              text="Pai, Mae Hong Son, Thailand"
              label="Package 1"
              path="/sign-up"
            />
            <CardItem
              src="images/d2.jpg"
              text="Batu Caves, Selangor, Malaysia"
              label="Package 2"
              path="/sign-up"
            />
            <CardItem
              src="images/d3.jpg"
              text="Providencia, San Andrés y Providencia, Colombia"
              label="Package 3"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/d4.jpg"
              text="Vila Nova, RJ, Brazil"
              label="Package 4"
              path="/sign-up"
            />
            <CardItem
              src="images/d5.jpg"
              text="Xàbia, Comunidad Valenciana, Spain"
              label="Package 5"
              path="/sign-up"
            />
            <CardItem
              src="images/d6.jpg"
              text="Beijing, Beijing, China"
              label="Package 6"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/d7.jpg"
              text="Portugal"
              label="Package 7"
              path="/sign-up"
            />
            <CardItem
              src="images/d8.jpg"
              text="Jawa Timur, Indonesia"
              label="Package 8"
              path="/sign-up"
            />
            <CardItem
              src="images/d9.jpg"
              text="San Andrés, San Andrés and Providencia, Colômbia"
              label="Package 9"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/d10.jpg"
              text="United Kingdom"
              label="Package 10"
              path="/sign-up"
            />
            <CardItem
              src="images/d11.jpg"
              text="Maldives"
              label="Package 11"
              path="/sign-up"
            />
            <CardItem
              src="images/d12.jpg"
              text="Maldives"
              label="Package 12"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards3;
