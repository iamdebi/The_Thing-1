import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const GameBoards = props => {
  const clearCardsInPlay = () => {
    props.clearCardsInPlay();
  };

  function checkForWinner(condition) {
    return (
      (props.imitationsPassBoard.length === 5 && "Aliens Win") ||
      (props.imitationsBlockedBoard.length === 5 && "Humans Win")
      null
    );
  }

  useEffect(() => {
    checkForWinner();
  }, []);

  return (
    <Fragment>
      <div className="score-board">
        <h1>
          <u>Score</u>
        </h1>
        <h2>Imitations Passed:{props.imitationsPassBoard.length}</h2>
        <h2>Imitations Blocked:{props.imitationsBlockedBoard.length}</h2>
        <Link to="/thething/captain">
          <button onClick={clearCardsInPlay} type="button">
            Next Round
          </button>
        </Link>
        <h4>{checkForWinner()}</h4>
      </div>
    </Fragment>
  );
};

export default GameBoards;
