import React from "react";
import Player from "./Player";

const PlayerDetail = props => {
  if (!props.player) {
    return "Loading ....";
  }

  return (
    <div className="component">
      <Player player={props.player} />
      {/* <p>Role:</p>
      <p>{player.role}</p>
      <p>Party:</p>
      <p>{player.party}</p> */}
    </div>
  );
};

export default PlayerDetail;
