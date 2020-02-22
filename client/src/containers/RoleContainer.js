import React, { Component } from "react";

class RoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players
    };
  }

  render() {
    return <p>I am the game RoleContainer</p>;
  }
}

export default RoleContainer;
