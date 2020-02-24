import React, { Component } from "react";
import Request from "../../helpers/request";

class CreatePlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player2: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player3: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player4: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player5: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }
    };

    this.handlePlayer1 = this.handlePlayer1.bind(this);
    this.handlePlayer2 = this.handlePlayer2.bind(this);
    this.handlePlayer3 = this.handlePlayer3.bind(this);
    this.handlePlayer4 = this.handlePlayer4.bind(this);
    this.handlePlayer5 = this.handlePlayer5.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
  }

  handlePlayer1(event) {
    this.setState({
      player1: {
        name: event.target.value,
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }
    });
  }

  handlePlayer2(event) {
    this.setState({
      player2: {
        name: event.target.value,
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }
    });
  }

  handlePlayer3(event) {
    this.setState({
      player3: {
        name: event.target.value,
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }
    });
  }

  handlePlayer4(event) {
    this.setState({
      player4: {
        name: event.target.value,
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }
    });
  }

  handlePlayer5(event) {
    this.setState({
      player5: {
        name: event.target.value,
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }
    });
  }

  handleDeleteAll() {
    const request = new Request();
    const url = "/api/players";
    request.deleteAll(url).then(() => (window.location = "/thething/game"));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleDeleteAll();
    this.props.onPost(this.state.player1);
    this.props.onPost(this.state.player2);
    this.props.onPost(this.state.player3);
    this.props.onPost(this.state.player4);
    this.props.onPost(this.state.player5);
  }

  render() {
    return (
      <div className="PlayerInputFormWrapper">
        <form className="PlayerInputForm" onSubmit={this.handleSubmit}>
          <h1>Enter 5 players names:</h1>
          <input
            onChange={this.handlePlayer1}
            required
            type="text"
            placeholder="Player 1"
            name="player1"
            value={this.state.player1.name}
          />
          <input
            onChange={this.handlePlayer2}
            required
            type="text"
            placeholder="Player 2"
            name="player2"
            value={this.state.player2.name}
          />
          <input
            onChange={this.handlePlayer3}
            required
            type="text"
            placeholder="Player 3"
            name="player3"
            value={this.state.player3.name}
          />
          <input
            onChange={this.handlePlayer4}
            required
            type="text"
            placeholder="Player 4"
            name="player4"
            value={this.state.player4.name}
          />
          <input
            onChange={this.handlePlayer5}
            required
            type="text"
            placeholder="Player 5"
            name="player5"
            value={this.state.player5.name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePlayerForm;
