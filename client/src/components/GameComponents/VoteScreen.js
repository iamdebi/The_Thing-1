import React, { Component, Fragment } from "react";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteRestult: true,
      votes: []
    };

    this.vote = this.vote.bind(this);
  }

  vote() {
    const player = this.props.players.map((player, index) => {
      return (
        <div className="voteContainer" key={index}>
          <li>{player.name}</li>
          <div className="votes">
            <p>Vote:</p>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      );
    });

    return player;
  }

  render() {
    return (
      <Fragment>
        <ul className="voteList">{this.vote()}</ul>
      </Fragment>
    );
  }
}

export default Vote;
