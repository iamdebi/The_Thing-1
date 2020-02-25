import React from "react";
import Card from "./Card";

const CardList = props => {
  if (props.cardsInPlay.length === 0) {
  }

  const cards = props.cardsInPlay.map((card, index) => {
    return (
      <div>
        <li key={index} className="component-item">
          <div className="component">
            <Card discard={props.discard} card={card}></Card>
          </div>
        </li>
      </div>
    );
  });

  return (
    <div>
      <ul className="component-list">{cards}</ul>
    </div>
  );
};

export default CardList;
