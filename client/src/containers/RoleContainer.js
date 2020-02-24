import React, { Component, Fragment } from "react";

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
    // this.coCaptain = this.coCaptain.bind(this);
  }

  componentDidMount() {
    this.getCaptain();
    this.getCoCaptain();
  }

  getCaptain() {
    const players = this.state.players;
    players.map((player, index) => {
      if (player.captain === true) {
        return this.setState({ captain: player });
      }
    });
  }

  getCoCaptain() {
    const players = this.state.players;
    players.map((player, index) => {
      if (player.coCaptain === true) {
        return this.setState({ coCaptain: player });
      }
    });
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
        onChange={this.getCoCaptain}
      >
        {options}
      </select>
    );
  }

  render() {
    if (!this.state.captain) {
      return null;
    }
    const name = "name";
    return (
      <Fragment>
        <div className="role-wrapper">
          <h2>Captain:</h2>
          <h4>{this.state.captain[name]}</h4>
          <h3>CoCaptain</h3>
          {this.setCoCaptainDropDown()}
        </div>
      </Fragment>
    );
  }
}

export default RoleContainer;
