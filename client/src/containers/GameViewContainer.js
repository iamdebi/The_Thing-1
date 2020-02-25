import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RoleContainer from "./RoleContainer";
import Request from "../helpers/request";

class GameViewContainer extends Component {
  render() {
    return this.state.playersPopulated ? (
      <section className="game-container">
        <Router>
          <Fragment>
            <Switch></Switch>
            <div>
              <RoleContainer
                className="role-contianer"
                players={this.state.players}
                onUpdate={this.handleUpdate}
              ></RoleContainer>
            </div>
          </Fragment>
        </Router>
      </section>
    ) : (
      <p>Loading ....</p>
    );
  }
}

export default GameViewContainer;
