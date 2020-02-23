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
    this.getCoCaptainId = this.getCoCaptainId.bind(this);
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

  getCoCaptainId(event) {
    return event.target.value;
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
    return <select onChange={this.getCoCaptainId}>{options}</select>;
  }

  //   Being worked on
  //   Trying to get id to set state coCaptain to the current selected cocaptain
  //
  //   setCoCaptainState() {
  //     const id = this.getCoCaptainId();
  //     const player = this.state.players.filter(player => player.id === id);
  //     console.log(player);
  //     return player;
  //   }

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
