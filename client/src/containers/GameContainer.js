import React, { Component, Fragment } from "react";
import Request from "../helpers/request";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameViewContainer from "./GameViewContainer";
import RoleContainer from "./RoleContainer";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      cards: [],
      playersPopulated: false
    };
    // this.findPirateById = this.findPirateById.bind(this);
    this.findCaptain = this.findCaptain.bind(this);
    this.findCoCaptain = this.findCoCaptain.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const playerPromise = request.get("/api/players");
    const cardsPromise = request.get("/api/cards");

    Promise.all([playerPromise, cardsPromise]).then(data => {
      this.setState({
        players: data[0],
        cards: data[1],
        playersPopulated: true
      });
    });
  }

  findplayerById(id) {
    return this.state.players.find(player => {
      return player.id === parseInt(id);
    });
  }

  findCaptain() {
    return this.state.players.find(player => {
      return player.captain === true;
    });
  }

  findCoCaptain() {
    return this.state.players.find(player => {
      return player.cocaptain === true;
    });
  }

  handleUpdate(player, id) {
    const request = new Request();
    request.patch("/api/players/" + id, player).then(() => {});
  }

  render() {
    return this.state.playersPopulated ? (
      <section className="game-container">
                
        <GameViewContainer
          cards={this.state.cards}
          players={this.state.players}
        ></GameViewContainer>
                
        <div>
          <RoleContainer
            className="role-contianer"
            players={this.state.players}
          ></RoleContainer>
        </div>
              
      </section>
    ) : (
      <p>Loading ....</p>
    );
  }
}

export default GameContainer;
