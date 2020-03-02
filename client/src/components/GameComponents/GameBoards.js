import React, { Fragment } from "react";
import CardList from "../GameComponents/CardComponents/CardList";

const GameBoards = props => {
  const clearCardsInPlay = () => {
    props.clearCardsInPlay();
  };

  function checkIfThingCoCapt() {
    for (var player of props.players) {
      if (player.coCaptain === true && player.role === "The Thing") {
        return true;
      }
    }
  }

  function checkForWinner() {
    return (
      (props.imitationsPassBoard.length === 4 &&
        checkIfThingCoCapt() &&
        "Aliens Have 4 imitations and The Thing is Co-Captain! Aliens Win!") ||
      (props.imitationsPassBoard.length === 5 &&
        "Aliens reached 5 imitations. Aliens Win!") ||
      (props.imitationsBlockedBoard.length === 5 &&
        "Humans blocked 5 imitations. Humans Win!") ||
      null
    );
  }

  return (
    <Fragment>
      <div className="score-board">
        <h1>
          <u>Score</u>
        </h1>
        <div className="scoreContainer">
          <CardList
            className="passedCards"
            cardsInPlay={props.imitationsPassBoard}
          ></CardList>
          <CardList
            className="blockedCards"
            cardsInPlay={props.imitationsBlockedBoard}
          ></CardList>
        </div>

        <button onClick={clearCardsInPlay} type="button">
          Next Round
        </button>
        <div className="win-message">
          <h1>{checkForWinner()}</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default GameBoards;
