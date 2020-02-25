import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";


const GameBoards = (props) => {

const clearCardsInPlay = () => {
  props.clearCardsInPlay()

}

  return (

    <Fragment>
      <div>
        <h1>GameBoards</h1>
        <h2>Imitations Passed:{props.immitationsPassBoard.length}</h2>
        <h2>Imitations Blocked:{props.immitationsBlockedBoard.length}</h2>
      </div>
      <Link to="/thething/captain">
        <button onClick={clearCardsInPlay} type="button">Next Round</button>
      </Link>
    </Fragment>
  )
}




export default GameBoards;
