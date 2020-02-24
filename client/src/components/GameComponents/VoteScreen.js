import React, { Component, Fragment } from 'react';

const VoteScreen = (props) => {

return(
  <Fragment>
    <div>
      <h1>Do you approve of the team of ?</h1>
      <br />
      <label>Yes:</label>
      <input type="number" id="yes" name="yes" min="0" max="6"/>

      <label>No:</label>
      <input type="number" id="no" name="no" min="0" max="6"/>
      <br />
      <button>Submit votes</button>
    </div>
  </Fragment>
)
}


export default VoteScreen;
