import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Request from "../helpers/request";
import PreGameContainer from "./PreGameContainer";
import GameContainer from "./GameContainer";

class MainContainer extends Component {
  // i have commented this out as I think it should be in the gameContainer?

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     players: [],
  //     cards: []
  //   };
  // }

  // componentDidMount() {
  //   const request = new Request();
  //   const playerPromise = request.get("/api/players");
  //   const cardsPromise = request.get("/api/cards");

  //   Promise.all([playerPromise, cardsPromise]).then(data => {
  //     this.setState({
  //       players: data[0],
  //       cards: data[1]
  //     });
  //   });
  // }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              path="/setup"
              render={() => <PreGameContainer></PreGameContainer>}
            />
            <Route
              path="/thething"
              render={() => <GameContainer></GameContainer>}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default MainContainer;
