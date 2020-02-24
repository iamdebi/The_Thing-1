import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VoteScreen from '../components/GameComponents/VoteScreen';


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
          path="/thething/vote"
          render={() => <VoteScreen></VoteScreen>}
          />

        </Switch>
      </Fragment>
    </Router>
  )}
}

export default GameViewContainer;
