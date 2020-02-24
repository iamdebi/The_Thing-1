import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const PreGame = (props) => {
  return(
    <Fragment >
      <section className="pregame-component">
        <div id="intro-text">
          <h1>The Thing: A hidden traitor game for 5-6 players</h1>

          <h3><u>Overview</u></h3>
          <p>It is the start of the bleak, desolate winter for researchers manning a claustrophobic, isolated Antarctic outpost when they come into contact with a hostile extraterrestrial lifeform. Bent on assimilating Earth's native species, this being infiltrates the facility — creating a perfect imitation of one of the crew. The staff frantically begin trying to narrow down who is human, and who is not, desperate to purge this alien infection before it can successfully imitate the full team.<br /> <i> And escape </i> </p>

          <h3><u>The Game</u></h3>
          <p>Each player will be assigned a party: Human or Alien.</p>
          <p>The goal of the <u>humans</u> is to block 5 imitation attempts by The Thing or it's alien accomplice.<br /> Do this by playing imitation blocked cards to the board. </p>
          <p>The goal of the <u>aliens</u>, which is made up of the alien leader, The Thing, and at least one accomplice, is to remain hidden long enough to successfully imitate 5 times.<br /> Do this by playing imitation success cards to the board.</p>

          <h3><u>Each Round</u></h3>
          <p>A Captain will be assigned. They will choose a Co-Captain. <br />
          The <b>Captain</b> will draw a hand of 3 cards made of <b>Imitation Blocked</b> and <b>Imitation Successful</b> cards.<br /> They will discard one and pass the remaining two to the <b>Co-Captain</b> who will choose a card to <b>play to the board</b></p>

          <h3>If The Thing is chosen as Co-Captain <u>after</u> 4 Imitation Successful cards have been played to the board;<br /> the aliens automatically win.</h3>
          <br />
          <button onClick={props.updateSwitcher}>Enter Player Names</button>
        </div>
      </section>
    </Fragment>
  )
}
export default PreGame;
