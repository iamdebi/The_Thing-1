import React, { Component, Fragment } from "react";
import CaptainCompenet from "../components/GameComponents/Captain";

class RoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
      captain: null
    };

    this.getCaptain = this.getCaptain.bind(this);
  }

  componentDidMount() {
    this.getCaptain();
  }

  getCaptain() {
    const players = this.state.players;
    players.map((player, index) => {
      if (player.captain == true) {
        console.log(player);
        return this.setState({ captain: player });
      }
    });
  }

  render() {
    console.log(this.state);
    if (!this.state.captain) {
      return null;
    }
    const name = "name";
    return (
      <Fragment>
        <h3>Captain:</h3>

        <p>{this.state.captain[name]}</p>
      </Fragment>
    );
  }
}

export default RoleContainer;
