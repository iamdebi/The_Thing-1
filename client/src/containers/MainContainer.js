import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PreGameContainer from "./PreGameContainer";
import RoleContainer from "./RoleContainer";
import CaptainChoiceScreen from "../components/GameComponents/CaptainChoiceScreen";
import CoCaptainChoiceScreen from "../components/GameComponents/CoCaptainChoiceScreen";
import GameBoards from "../components/GameComponents/GameBoards";
import PlayerDetails from "../components/GameComponents/PlayerComponents/PlayerInfo";
import PlayersList from "../components/GameComponents/PlayerComponents/PlayersList";
import Card from "../components/GameComponents/CardComponents/Card";
import CardList from "../components/GameComponents/CardComponents/CardList";
import Request from "../helpers/request";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      aliens: [],
      humans: [],
      cards: [],
      cardsInPlay: [],
      immitationsBlockedBoard: [],
      immitationsPassBoard: [],
      playersPopulated: false
    };
    this.findPlayerById = this.findPlayerById.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.draw3 = this.draw3.bind(this);
    this.discardCard = this.discardCard.bind(this);
    this.addToGameBoard = this.addToGameBoard.bind(this);
    this.clearCardsInPlay = this.clearCardsInPlay.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const playerPromise = request.get("/api/players");
    const cardsPromise = request.get("/api/cards");
    const imitationsBlockedPromise = request.get("/api/imitation-blocks");
    const imitationsPassedPromise = request.get("api/imitation-passes");

    Promise.all([
      playerPromise,
      cardsPromise,
      imitationsBlockedPromise,
      imitationsPassedPromise
    ]).then(data => {
      this.setState({
        players: data[0],
        cards: data[1],
        immitationsBlockedBoard: data[2],
        immitationsBlockedBoard: data[3],
        playersPopulated: true
      });
    });
  }

  handleUpdate(player, id) {
    const request = new Request();
    request.patch("/api/players/" + id, player);
  }

  findPlayerById(id) {
    return this.state.players.find(player => {
      return player.id === id;
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  draw3() {
    let shuffledCards = this.shuffle(this.state.cards);

    return this.setState({ cardsInPlay: shuffledCards.slice(0, 3) });
  }

  findCardById(id) {
    return this.state.Card.find(card => {
      return card.id === id;
    });
  }

  findCardInPlay(id) {
    return this.state.cardsInPlay.find(card => {
      return card.id === id;
    });
  }

  discardCard(id) {
    const discardCard = this.findCardInPlay(id);
    this.setState({
      cardsInPlay: this.state.cardsInPlay.filter(card => card !== discardCard)
    });
  }

  clearCardsInPlay() {
    this.setState({
      cardsInPlay: []
    });
  }

  addToGameBoard() {
    const card = this.state.cardsInPlay[0];
    if (card.type === "passed") {
      this.setState({ immitationsPassBoard: this.state.cardsInPlay });
    } else {
      this.setState({ immitationsBlockedBoard: this.state.cardsInPlay });
    }
  }

  restCoCaptain(player) {
    this.setState({
      coCaptain: {
        name: player.name,
        role: player.role,
        party: player.party,
        captain: player.captain,
        coCaptain: true,
        vote: player.vote
      }
    });
  }

  render() {
    return this.state.playersPopulated ? (
      <section className="game-container">
        <Router>
          <Fragment>
            <Switch>
              <Route
                exact
                path="/thething/players/:id"
                render={props => {
                  const id = props.match.params.id;
                  const player = this.findPlayerById(parseInt(id));
                  return <PlayerDetails player={player} />;
                }}
              />
              <Route
                exact
                path="/thething/players"
                render={() => {
                  return <PlayersList players={this.state.players} />;
                }}
              />
              <Route
                exact
                path="/thething/cocaptain"
                render={() => <CoCaptainChoiceScreen></CoCaptainChoiceScreen>}
                render={() => (
                  <CoCaptainChoiceScreen
                    addToGameBoard={this.addToGameBoard}
                    discard={this.discardCard}
                    cardsInPlay={this.state.cardsInPlay}
                  ></CoCaptainChoiceScreen>
                )}
              />

              <Route
                exact
                path="/thething/captain"
                render={() => (
                  <CaptainChoiceScreen
                    discard={this.discardCard}
                    draw3={this.draw3}
                    cardsInPlay={this.state.cardsInPlay}
                    players={this.state.players}
                  ></CaptainChoiceScreen>
                )}
              />

              <Route
                exact
                path="/thething/board"
                render={() => (
                  <GameBoards
                    clearCardsInPlay={this.clearCardsInPlay}
                    cardsInPlay={this.state.cardsInPlay}
                    immitationsBlockedBoard={this.state.immitationsBlockedBoard}
                    immitationsPassBoard={this.state.immitationsPassBoard}
                  ></GameBoards>
                )}
              />

              <Route
                exact
                path="/thething"
                render={() => <PreGameContainer></PreGameContainer>}
              />
            </Switch>
          </Fragment>
        </Router>
        <div className="role-contianer">
          <RoleContainer
            className="role-contianer"
            players={this.state.players}
            onUpdate={this.handleUpdate}
          ></RoleContainer>
        </div>
      </section>
    ) : (
      <p>Loading ....</p>
    );
  }
}
export default MainContainer;
