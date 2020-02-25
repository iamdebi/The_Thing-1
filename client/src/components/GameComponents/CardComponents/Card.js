import React, { Fragment } from "react";

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
      <button onClick={discard} type="button">
        Discard Card
      </button>
    </Fragment>
  );
};

export default Card;
