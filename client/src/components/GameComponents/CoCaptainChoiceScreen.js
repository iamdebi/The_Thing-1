import React, { Component, Fragment } from "react";
import CardList from "./CardComponents/CardList";
import { Link } from "react-router-dom";


const CoCaptainChoiceScreen = props => {


  return (
    <Fragment>
      <div>
        <h1>Co-Captain</h1>
        <br />
        <h3>
          You have a choice of 2 imitation outcomes.
          <br />
          <br />
          Choose one to <u> discard</u>.
          <br /> The <u> other</u> card will be played to the board and increase that team's score.
        </h3>
        <CardList
          cardsInPlay={props.cardsInPlay}
        ></CardList>
        <Link to="/thething/board">
          <button type="button">To Score Board</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CoCaptainChoiceScreen;
