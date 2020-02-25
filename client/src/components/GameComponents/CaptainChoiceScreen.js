import React, {Component, Fragment} from 'react';

const CaptainChoiceScreen = (props) => {

      //moved shuffle and draw 3 to maincontainer.






    return (
      <Fragment>
        <div>
          <h1>Captain</h1><br />
          <h3>You have a choice of 3 imitation outcomes.<br /><br />Choose one to discard,<br /> then your co-captain will choose one of the remaining imitation outcomes</h3>
          <button>Draw 3 cards</button>
        </div>
      </Fragment>

    )

}


export default CaptainChoiceScreen;
