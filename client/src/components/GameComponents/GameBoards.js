import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";


const GameBoards = (props) => {

const clearCardsInPlay = () => {
  props.clearCardsInPlay()

}

  return (

    <Fragment>
      <div className="score-board">
        <h1><u>Score</u></h1>
        <h2>Imitations Passed:{props.imitationsPassBoard.length}</h2>
        <h2>Imitations Blocked:{props.imitationsBlockedBoard.length}</h2>
        <Link to="/thething/captain">
          <button onClick={clearCardsInPlay} type="button">Next Round</button>
        </Link>
      </div>
    </Fragment>
  )
}




export default GameBoards;
