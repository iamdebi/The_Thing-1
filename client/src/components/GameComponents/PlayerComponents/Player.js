import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Player = props => {
  if (!props.player) {
    return "Loading...";
  }

  const url = "/thething/players/" + props.player.id;

  return (
    <Fragment>
      <Link to={url} className="name">
        <p>Name: {props.player.name}</p>
        <button type="button">View Role</button>
      </Link>
    </Fragment>
  );
};

export default Player;
