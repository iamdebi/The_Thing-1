import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = props => {
  if (!props.card) {
    return "Loading...";
  }

  const discard = () => {
    props.discard(props.card.id);
  };

  return (
    <Fragment>
      <p>Type: {props.card.type}</p>
      <button onclick={discard} type="button">
        Discard Card
      </button>
    </Fragment>
  );
};

export default Card;
