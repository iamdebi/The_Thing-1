import React, { Fragment } from "react";
import Request from "../../helpers/request";

const PreGame = props => {
  function deletePlayersUpdateSwitcher() {
    const request = new Request();
    const url = "/api/players";
    request.deleteAll(url).then(props.updateSwitcher());
  }

  return (
    <Fragment>
      <section className="pregame-component">
        <div id="intro-text">
          <div className="text-container">
            <div className="overview-text">
              <h1 className="text">
                The Thing: A hidden traitor game for 5 players
              </h1>

              <h3>
                <u className="text">Overview</u>
              </h3>
              <p className="text">
                It is the start of the bleak, desolate winter for 5 researchers
                manning a claustrophobic, isolated Antarctic outpost when they
                come into contact with a hostile extraterrestrial lifeform. Bent
                on assimilating Earth's native species, this being infiltrates
                the facility — creating a perfect imitation of one of the crew.
                The staff frantically begin trying to narrow down who is human,
                and who is not, desperate to purge this alien infection before
                it can successfully imitate the full team.
                <br /> <i> And escape </i>{" "}
              </p>
              <button
                className="pre-game-button"
                onClick={deletePlayersUpdateSwitcher}
              >
                Enter Player Names
              </button>
            </div>

            <div className="game-text">
              <h3>
                <u className="text">The Game</u>
              </h3>
              <p className="text">
                Each player will be assigned a party: Human or Alien.
              </p>
              <p className="text">
                The goal of the <u className="text">humans</u> is to block 5
                imitation attempts by The Thing or it's alien accomplice.
                <br /> Do this by playing imitation blocked cards to the board.{" "}
              </p>
              <p className="text">
                The goal of the <u className="text">aliens</u>, which is made up
                of the alien leader, The Thing, and at least one accomplice, is
                to remain hidden long enough to successfully imitate 5 times.
                <br /> Do this by playing imitation passed cards to the board.
              </p>

              <h3>
                <u className="text">Each Round</u>
              </h3>
              <p className="text">
                A Captain will be assigned. They will choose a Co-Captain.{" "}
                <br />
                The <b className="text">Captain</b> will draw a hand of 3 cards
                made of <b className="text">Imitation Blocked</b> and{" "}
                <b className="text">Imitation Passed</b> cards.
                <br /> They will discard one and pass the remaining two to the{" "}
                <b className="text">Co-Captain</b> who will choose a card to{" "}
                <b className="text">play to the board</b>
              </p>

              <h3>
                <u className="text">Game End</u>
              </h3>

              <h3 className="text">
                • Humans win if: 5 imitation blocked cards are played to the
                board.
                <br />
                • Aliens win if: 5 imitation passed cards are played to the
                board OR
                <br />• If The Thing is chosen as Co-Captain <u>after</u> 4
                Imitation Successful cards have been played to the board.
              </h3>
              <br />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default PreGame;
