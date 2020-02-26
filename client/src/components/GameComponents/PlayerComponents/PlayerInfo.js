import React from "react";
import { Link } from "react-router-dom";

const PlayerDetail = props => {
  if (!props.player) {
    return "Loading ....";
  }

  function populateAlienTeam(array){
    for (var player of array){
      if(player.party === "Aliens"){
        props.aliens.push(player)
      }
    }
    return props.aliens;
  }
  populateAlienTeam(props.players);

  function renderParty(){
    if(props.player.party === "Aliens" ){
      return props.player.party + ": " + props.aliens[0].name + " - " + props.aliens[0].role + " & " + props.aliens[1].name + " - " + props.aliens[1].role;
    } else if
      (props.player.party ==="Humans"){
      return props.player.party;
      }
    }






  return (
      <div className="player">
        <h2><u>{props.player.name}</u></h2>
        <p>Keep this information secret.</p>
        <p><u>Role:</u></p>
        <p>{props.player.role}</p>
        <p><u>Party:</u></p>
        <div>
          <p>{renderParty()}</p>
        </div>
        <Link to="/thething/players">
          <button type="button">Back to All Players</button>
        </Link>
    </div>
  );
}

export default PlayerDetail;
