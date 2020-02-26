import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardList from "./CardComponents/CardList";

const CoCaptain = props => {
  if (!props.cardsInPlay) {
    return "Loading...";
  }

  const addToGameBoard = () => {
      props.addToGameBoard()
  }

  return (
    <Fragment>
      <div>
        <h1><u>Co-Captain</u></h1>
        <br />
        <h3>
          You have a choice of 2 imitation outcomes.
          <br />
          <CardList
            discard={props.discard}
            cardsInPlay={props.cardsInPlay}
          ></CardList>
          <br />
          Choose one to <u> discard</u>.
          <br /> The <u> other</u> card will be played to the board and increase
          that team’s score.
        </h3>

        <Link to="/thething/board">
          <button onClick={addToGameBoard} type="button">Add to Game Board</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CoCaptain;
