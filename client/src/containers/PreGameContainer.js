import React, { Fragment, Component } from "react";
import PreGame from "../components/GameComponents/PreGame";
// import CreatePlayerForm from "../components/GameComponents/CreatePlayerForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class PreGameContainer extends Component {

  render(){
    return (
      <Router>
      <Switch>
        <PreGame />

      </Switch>
      </Router>
    )
  }

}

export default PreGameContainer;
