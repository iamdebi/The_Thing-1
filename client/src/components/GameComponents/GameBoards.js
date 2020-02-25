import React, { Component, Fragment } from 'react';

const GameBoards = (props) => {


  return (

    <Fragment>
      <div>
        <h1>GameBoards</h1>
        <h2>Imitations Passed:{props.immitationsPassBoard.length}</h2>
        <h2>Imitations Blocked:{props.immitationsBlockedBoard.length}</h2>
      </div>
    </Fragment>
  )
}




export default GameBoards;
