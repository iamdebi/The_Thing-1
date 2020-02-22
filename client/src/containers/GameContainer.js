import React, { Component, Fragment } from "react";
import Request from "../helpers/request";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameViewContainer from "./GameViewContainer";
import RoleContainer from "./RoleContainer";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      cards: []
    };
  }

  componentDidMount() {
    if (!this.state.players) {
      return null;
    }

    const request = new Request();
    const playerPromise = request.get("/api/players");
    const cardsPromise = request.get("/api/cards");

    Promise.all([playerPromise, cardsPromise]).then(data => {
      this.setState({
        players: data[0],
        cards: data[1]
      });
    });
  }

  render() {
    return (
      <Fragment>
        <GameViewContainer
          cards={this.state.cards}
          players={this.state.players}
        ></GameViewContainer>
        <RoleContainer players={this.state.players}></RoleContainer>
      </Fragment>
    );
  }
}

export default GameContainer;
