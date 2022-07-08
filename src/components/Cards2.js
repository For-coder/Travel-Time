import React from "react";
import "./Cards2.css";
import CardItem from "./CardItem";

function Cards2() {
  return (
    <div className="cards">
      <h1>Explore these Special & Discount Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/sone.jpg"
              text="B.C., Mexico"
              label="Special"
              path="/sign-up"
            />
            <CardItem
              src="images/stwo.jpg"
              text="CA, United States"
              label="Special"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/sthree.jpg"
              text="Vaitāpē, Îles Sous-le-Vent, French Polynesia"
              label="Discount"
              path="/sign-up"
            />
            <CardItem
              src="images/sfour.jpg"
              text="Paris, Île-de-France, France"
              label="Discount"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
