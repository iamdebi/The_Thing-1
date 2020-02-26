import React from "react";
import { Link } from "react-router-dom";

const PlayerDetail = props => {
  if (!props.player) {
    return "Loading ....";
  }

  return (
      <div className="player">
        <h2><u>{props.player.name}</u></h2>
        <p>Keep this information secret.</p>
        <p><u>Role:</u></p>
        <p>{props.player.role}</p>
        <p><u>Party:</u></p>
        <p>{props.player.party}</p>
        <Link to="/thething/players">
          <button type="button">Back to All Players</button>
        </Link>
    </div>
  );
};

export default PlayerDetail;
