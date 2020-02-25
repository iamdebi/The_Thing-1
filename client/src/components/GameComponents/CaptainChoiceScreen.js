import React, { Component, Fragment } from "react";
import CardList from "./CardComponents/CardList";

const CaptainChoiceScreen = props => {
  return (
    <Fragment>
      <div>
        <h1>Captain</h1>
        <br />
        <h3>
          You have a choice of 3 imitation outcomes.
          <br />
          <br />
          Choose one to discard,
          <br /> then your co-captain will choose one of the remaining imitation
          outcomes
        </h3>
        <button onClick={props.draw3}>Draw 3 cards</button>
        <CardList
          discard={props.discard}
          cardsInPlay={props.cardsInPlay}
        ></CardList>
      </div>
    </Fragment>
  );
};

export default CaptainChoiceScreen;
