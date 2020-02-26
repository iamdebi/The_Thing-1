import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const GameBoards = props => {
  const clearCardsInPlay = () => {
    props.clearCardsInPlay();
  };

  function checkForWinner(){
    if(props.imitationsPassBoard.length === 5) || (props.imitationsPassBoard.length === 4 && props.players.player4.coCaptain = "true"){
      return <h1>Aliens win!</h1>
    }
    else if (props.imitationsBlockedBoard.length === 5){
      return <h1>Humans win!</h1>
    }
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
