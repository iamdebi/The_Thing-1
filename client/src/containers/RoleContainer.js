import React, { Component, Fragment } from "react";

class RoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
      captain: null
    };

    this.getCaptain = this.getCaptain.bind(this);
    this.getCoCaptain = this.getCoCaptain.bind(this);
  }

  componentDidMount() {
    this.getCaptain();
  }

  getCaptain() {
    const players = this.state.players;
    players.map((player, index) => {
      if (player.captain === true) {
        console.log(player);
        return this.setState({ captain: player });
      }
    });
  }

  getCoCaptain() {
    const players = this.state.players;
    const options = players.map((player, index) => {
      return (
        <option key={index} value={player.id}>
          {player.name}
        </option>
      );
    });
    return <select>{options}</select>;
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
        <h3>CoCaptain</h3>
        {this.getCoCaptain()}
      </Fragment>
    );
  }
}

export default RoleContainer;
