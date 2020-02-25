import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardList = props => {
  if (props.cards.length === 0) {
    return <p>Loading .....</p>;
  }

  const cards = props.cards.map((card, index) => {
    return (
      <div>
        <li key={index} className="component-item">
          <div className="component">
            <Card card={card}></Card>
            <button onclick={discard()} type="button">
              Discard Card
            </button>
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
