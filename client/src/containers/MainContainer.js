import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Request from "../helpers/request";
import PreGameContainer from "./PreGameContainer";
import GameContainer from "./GameContainer";

class MainContainer extends Component {
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
            <Route path="/setup" component={PreGameContainer} />
            <Route path="/thething" component={GameContainer} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default MainContainer;
