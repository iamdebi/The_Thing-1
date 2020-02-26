import React from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

const PlayersList = props => {
  if (props.players.length === 0) {
    return <p>Loading .....</p>;
  }

  const players = props.players.map((player, index) => {
    return (
      <div>
        <li key={index} className="component-item">
          <div className="component">
            <Player player={player}></Player>
          </div>
        </li>
      </div>
    );
  });

  return (
    <div className="player-list-with-captain-button">
      <ul className="component-list">{players}</ul>
      <Link className="button" to="/thething/captain">
        <button type="button">Go to Captain</button>
      </Link>
    </div>
  );
};

export default PlayersList;
