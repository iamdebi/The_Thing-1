import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Captain from "../components/GameComponents/CaptainChoiceScreen";
import CoCaptain from "../components/GameComponents/CoCaptainChoiceScreen";
import GameBoards from "../components/GameComponents/GameBoards";
import PlayerDetails from "../components/GameComponents/PlayerInfo";

class GameViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players,
      aliens: [],
      humans: [],
      cards: props.cards,
      cardsInPlay: [],
      immitationsBlockedBoard: [],
      immitationsPassBoard: []
    };
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              path="/thething/game/:id"
              render={() => <PlayerDetails></PlayerDetails>}
            />

            <Route
              path="/thething/game/captain"
              render={() => <Captain></Captain>}
            />

            <Route
              path="/thething/game/cocaptain"
              render={() => <CoCaptain></CoCaptain>}
            />

            <Route
              path="/thething/game"
              render={() => <GameBoards immitationsBlockedBoard={this.state.immitationsBlockedBoard} immitationsPassBoard={this.state.immitationsPassBoard}></GameBoards>}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default GameViewContainer;
