import React from "react";
import { Link } from "react-router-dom";

const PlayerDetail = props => {
  if (!props.player) {
    return "Loading ....";
  }

  return (
    <div>
      <div className="player">
        <h2>{props.player.name}</h2>
        <p>Your role in the game are as follow.</p>
        <p>Please keep this secret</p>
        <p>Role:</p>
        <p>{props.player.role}</p>
        <p>Party:</p>
        <p>{props.player.party}</p>
      </div>
      <Link to="/thething/players">
        <button type="button">Back to All Players</button>
      </Link>
    </div>
  );
};

export default PlayerDetail;
