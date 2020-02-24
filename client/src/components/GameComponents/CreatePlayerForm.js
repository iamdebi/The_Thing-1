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
      }

    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({player1:{
      name: event.target.value,
      role: "",
      party: "",
      captain: false,
      coCaptain: false,
      vote: ""}})
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
      <input onChange={this.handleName} type="text" placeholder="Name" name="player1" value={this.state.player1.name}/>
      <input onChange={this.handleName} type="text" placeholder="Name" name="player2" value={this.state.player2.name}/>
      <input onChange={this.handleName} type="text" placeholder="Name" name="player3" value={this.state.player3.name}/>
      <button type="submit">Save</button>
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
