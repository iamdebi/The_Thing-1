import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardList from "./CardComponents/CardList";

const CoCaptain = props => {
  if (!props.cardsInPlay) {
    return "Loading...";
  }
  return (
    <Fragment>
      <div>
        <h1>CoCaptain</h1>
        <br />
        <h3>
          You have a choice of 2 imitation outcomes.
          <br />
          <br />
          Choose one to <u> discard</u>.
          <br /> The <u> other</u> card will be played to the board and increase
          that team’s score.
        </h3>
        <CardList
          discard={props.discard}
          cardsInPlay={props.cardsInPlay}
        ></CardList>
      </div>
    </Fragment>
  );
};

export default CoCaptain;
