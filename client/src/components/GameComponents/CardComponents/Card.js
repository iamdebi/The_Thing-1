import React, { Fragment } from "react";

const Card = props => {
  if (!props.card) {
    return "Loading...";
  }

  const discard = () => {
    props.discard(props.card.id);
  };

  let cardType;

  if (props.card.type === "passed") {
    cardType = "passedImitation";
  } else {
    cardType = "blockedImitation";
  }

  return (
    <Fragment>
      <div className={cardType}>
        <p>Type: {props.card.type}</p>
        <button onClick={discard} type="button">
          Discard Card
        </button>
      </div>{" "}
    </Fragment>
  );
};

export default Card;
