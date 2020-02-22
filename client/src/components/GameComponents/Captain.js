import React from "react";

const captianComponet = props => {
  if (!props.captain) {
    return "Loading...";
  }

  return (
    <div className="component">
      <p>Captain:</p>
      <p>{this.props.captain}</p>
    </div>
  );
};

export default captianComponet;
