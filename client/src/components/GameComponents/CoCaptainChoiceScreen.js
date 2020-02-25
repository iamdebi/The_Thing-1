import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CoCaptain = props => {
  if (!props.cards) {
    return "Loading...";
  }
  return <Fragment></Fragment>;
};

export default CoCaptain;
