import React, { Component, Fragment } from "react";
import Request from "../helpers/request";

class RoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
      captain: null,
      coCaptain: null
    };
    this.getCaptain = this.getCaptain.bind(this);
    this.setCoCaptainDropDown = this.setCoCaptainDropDown.bind(this);
    this.getCoCaptain = this.getCoCaptain.bind(this);
    this.setCoCaptain = this.setCoCaptain.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    this.getCaptain();
    this.getCoCaptain();
  }
  getCaptain() {
    const players = this.props.players;
    players.map((player, index) => {
      if (player.captain === true) {
        return this.setState({ captain: player });
      }
      return null;
    });
  }
  getCoCaptain() {
    const players = this.state.players;
    players.map((player, index) => {
      if (player.coCaptain === true) {
        return this.setState({ coCaptain: player });
      }
      return null;
    });
  }

  findPlayerById(id) {
    return this.state.players.find(player => {
      return player.id === id;
    });
  }

  restCoCaptain(player) {
    this.setState({
      coCaptain: {
        name: player.name,
        role: player.role,
        party: player.party,
        captain: player.captain,
        coCaptain: true,
        vote: player.vote
      }
    });
  }

  setCoCaptain(event) {
    const previousPlayerID = this.state.coCaptain.id;
    const previousPlayer = this.findPlayerById(previousPlayerID);
    const id = parseInt(event.target.value);
    const player = this.findPlayerById(id);
    this.setState({ coCaptain: player });
    this.restCoCaptain(player);
    player.coCaptain = true;
    previousPlayer.coCaptain = false;
    this.props.onUpdate(player, id);
    this.props.onUpdate(previousPlayer, previousPlayerID);
  }

  setCoCaptainDropDown() {
    const players = this.state.players;
    const options = players.map((player, index) => {
      return (
        <option name={player.id} key={index} value={player.id}>
          {player.name}
        </option>
      );
    });
    return (
      <select
        defaultValue={this.state.coCaptain.id}
        onChange={this.setCoCaptain}
      >
        {options}
      </select>
    );
  }

  endGame() {
    const request = new Request();
    const playersUrl = "/api/players";
    const blockedUrl = "/api/imitation-blocks";
    const passesUrl = "/api/imitation-passes";
    request
      .deleteAll(playersUrl)
      .then(request.deleteAll(blockedUrl))
      .then(request.deleteAll(passesUrl))
      .then(() => (window.location = "/thething"));
  }

  render() {
    if (!this.state.captain) {
      return null;
    }

    return (
      <Fragment>
        <div className="role-wrapper">
          <h2>Captain:</h2>
          <h4>{this.state.captain.name}</h4>
          <h3>Co-Captain</h3>
          {this.setCoCaptainDropDown()}
          <button onClick={this.endGame}>End Game</button>
        </div>
      </Fragment>
    );
  }
}
export default RoleContainer;
