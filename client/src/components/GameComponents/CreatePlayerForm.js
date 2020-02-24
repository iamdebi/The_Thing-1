import React, {Component} from 'react';

class CreatePlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player2: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player3: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player4: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player5: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      },

      player6: {
        name: "",
        role: "",
        party: "",
        captain: false,
        coCaptain: false,
        vote: ""
      }

    }

    this.handlePlayer1 = this.handlePlayer1.bind(this);
    this.handlePlayer2 = this.handlePlayer2.bind(this);
    this.handlePlayer3 = this.handlePlayer3.bind(this);
    this.handlePlayer4 = this.handlePlayer4.bind(this);
    this.handlePlayer5 = this.handlePlayer5.bind(this);
    this.handlePlayer6 = this.handlePlayer6.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlayer1(event) {
    this.setState({
      player1: {
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""
    } })
  }

  handlePlayer2(event) {
    this.setState({
      player2: {
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""
    } })
  }

  handlePlayer3(event) {
    this.setState({
      player3: {
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""
    } })
  }

  handlePlayer4(event) {
    this.setState({
      player4: {
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""
    } })
  }

  handlePlayer5(event) {
    this.setState({
      player5: {
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""
    } })
  }

  handlePlayer6(event) {
    this.setState({
      player6: {
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""
    } })
  }

  handleSubmit(event) {
    event.preventDefault();
    const player1 = {
      name: event.target.player1,
      role: this.state.role,
      party: this.state.party,
      captain: this.state.captain,
      coCaptain: this.state.coCaptain,
      vote: this.state.vote
    }
    this.props.onPost(player1)
  }

  render() {

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handlePlayer1} type="text" placeholder="Name" name="player1" value={this.state.player1.name}/>
      <input onChange={this.handlePlayer2} type="text" placeholder="Name" name="player2" value={this.state.player2.name}/>
      <input onChange={this.handlePlayer3} type="text" placeholder="Name" name="player3" value={this.state.player3.name}/>
      <input onChange={this.handlePlayer4} type="text" placeholder="Name" name="player4" value={this.state.player4.name}/>
      <input onChange={this.handlePlayer5} type="text" placeholder="Name" name="player5" value={this.state.player5.name}/>
      <input onChange={this.handlePlayer6} type="text" placeholder="Name" name="player6" value={this.state.player6.name}/>
      <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default CreatePlayerForm;
//
//   render(){
//
//     const shipOptions = this.props.ships.map((ship, index) => {
//       return <option key={ship.id} value={index}>{ship.name}</option>
//     });
//
//     return (
//       <div>
//       <form onSubmit={this.handleSubmit}>
//       <input type="text" placeholder="First Name" name="firstName" onChange={this.handleFirstName} value={this.state.firstname} />
//       <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleLastName} value={this.state.lastName} />
//       <input type="number" placeholder="Age" name="age" onChange={this.handleAge} value={this.state.age}/>
//       <select name="ship" onChange={this.handleShip}>
//         <option disabled selected>Select a ship</option>
//         {shipOptions}
//       </select>
//       <button type="submit">Save</button>
//       </form>
//       </div>
//     )
//   }
// }
//
// export default PirateCreateForm;
