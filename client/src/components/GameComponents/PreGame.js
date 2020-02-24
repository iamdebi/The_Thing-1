import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const PreGame = (props) => {
  return(
    <Fragment className="pregame-component">
      <div id="intro-text">
        <h1>The Thing: A hidden traitor game for 5-6 players</h1>
        <h3><u>Overview</u></h3>
        <h4>It is the start of the bleak, desolate winter for researchers manning a claustrophobic, isolated Antarctic outpost when they come into contact with a hostile extraterrestrial lifeform. Bent on assimilating Earth's native species, this being infiltrates the facility — creating a perfect imitation of one of the crew. The staff frantically begin trying to narrow down who is human, and who is not, desperate to purge this alien infection before it can successfully imitate the full team. </h4>
        <h4><i>And escape.</i></h4>
        <h3><u>The Game</u></h3>
        <h4>Each player will be assigned a party: Human or Alien.</h4>
        <h4>The goal of the humans is to block 5 imitation attempts by The Thing or it's alien accomplice. Do this by playing imitation blocked cards to the board. </h4>
        <h4>The goal of the aliens is to remain hidden long enough to successfully imitate 5 times.</h4>
      </div>
    </Fragment>
  )
}
export default PreGame;
