import React, { Component } from "react";
import PreGame from "../components/GameComponents/PreGame";
import CreatePlayerForm from "../components/GameComponents/CreatePlayerForm";
import Request from "../helpers/request";

class PreGameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PreGameFormSwitcher: false
    };

    this.updateSwitcher = this.updateSwitcher.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  updateSwitcher() {
    this.setState({ PreGameFormSwitcher: !this.PreGameFormSwitcher });
  }

  handlePost(player) {
    const request = new Request();
    request.post("/api/players", player);
  }

  render() {
    return this.state.PreGameFormSwitcher ? (
      <CreatePlayerForm
        deleteAll={this.props.deleteAll}
        players={this.props.players}
        onPost={this.handlePost}
      />
    ) : (
      <PreGame
        deleteAll={this.props.deleteAll}
        updateSwitcher={this.updateSwitcher}
      />
    );
  }
}

export default PreGameContainer;
