import React, { Fragment, Component } from "react";
import PreGame from "../components/GameComponents/PreGame";
import CreatePlayerForm from "../components/GameComponents/CreatePlayerForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class PreGameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PreGameFormSwitcher: false
    }

    this.updateSwitcher = this.updateSwitcher.bind(this)
  }

  updateSwitcher(){
    this.setState({PreGameFormSwitcher: !this.PreGameFormSwitcher})
  }

  render(){
    return this.state.PreGameFormSwitcher ? (
      <CreatePlayerForm/>
    ) : (
    <PreGame updateSwitcher={this.updateSwitcher} />
    )
  }

}

export default PreGameContainer;
