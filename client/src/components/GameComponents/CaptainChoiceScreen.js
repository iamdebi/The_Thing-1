import React, {Component, Fragment} from 'react';

const CaptainChoiceScreen = (props) => {

  handleClick(){
    props.draw3()

  }

    return (
      <Fragment>
        <div>
          <h1>Captain</h1><br />
          <h3>You have a choice of 3 imitation outcomes.<br /><br />Choose one to discard,<br /> then your co-captain will choose one of the remaining imitation outcomes</h3>
          <button onClick={handleClick()}>Draw 3 cards</button>
        </div>

      </Fragment>
    )

}


export default CaptainChoiceScreen;
