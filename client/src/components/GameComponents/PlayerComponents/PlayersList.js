import React from "react";
import Player from "./Player";

const PlayersList = props => {
  if (props.players.length === 0) {
    return <p>Loading .....</p>;
  }

  const players = props.players.map((player, index) => {
    return (
      <li key={index} className="component-item">
        <div className="component">
          <Player player={player}></Player>
        </div>
      </li>
    );
  });

  return <ul className="component-list">{players}</ul>;
};

export default PlayersList;
