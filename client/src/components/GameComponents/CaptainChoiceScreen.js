import React, { Fragment } from "react";
import CardList from "./CardComponents/CardList";
import { Link } from "react-router-dom";
import Request from "../../helpers/request";

const CaptainChoiceScreen = props => {
  



  return (
    <Fragment>
      <div>
        <h1>
          <u>Captain</u>
          <br />
          <br />
          Choose Your Co-Captain
        </h1>
        <br />
        <button onClick={props.draw3}>Draw 3 cards</button>
        <h3>
          You have a choice of 3 imitation outcomes.
          <br />
          <CardList
            discard={props.discard}
            cardsInPlay={props.cardsInPlay}
          ></CardList>
          <br />
          Choose one to discard,
          <br /> then your co-captain will choose one of the remaining imitation
          outcomes.
        </h3>

        <Link to="/thething/cocaptain">
          <button type="button">Pass Remaining to Co-Captain</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CaptainChoiceScreen;
