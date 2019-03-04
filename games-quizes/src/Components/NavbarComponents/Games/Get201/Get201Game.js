import React, { Component } from "react";
import Get201Func from "./Get201Func";
import dice1 from "./../../pictures/dice-1.png";
import dice2 from "./../../pictures/dice-2.png";
import dice3 from "./../../pictures/dice-3.png";
import dice4 from "./../../pictures/dice-4.png";
import dice5 from "./../../pictures/dice-5.png";
import dice6 from "./../../pictures/dice-6.png";

class Get201Game extends Component {
  state = {
    players: [
      {
        id: 1,
        score: [],
        roundScore: [],
        activePlayer: 0,
        gamePlaying: true
      },
      {
        id: 2,
        score: [],
        roundScore: [],
        activePlayer: 1,
        gamePlaying: false
      },
      {
        id: 3,
        score: [],
        roundScore: [],
        activePlayer: 0,
        gamePlaying: true
      },
      {
        id: 4,
        score: [],
        roundScore: [],
        activePlayer: 1,
        gamePlaying: false
      }
    ],
    dices: [
      <img src={dice1} alt="dice one" />,
      <img src={dice2} alt="dice two" />,
      <img src={dice3} alt="dice three" />,
      <img src={dice4} alt="dice four" />,
      <img src={dice5} alt="dice five" />,
      <img src={dice6} alt="dice six" />
    ],
    dice: ""
  };
  handleRoll = () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    this.setState({
      dice: dice
    });
  };
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <Get201Func
          players={this.state.players}
          dices={this.state.dices}
          dice={this.state.dice}
          handleRoll={this.handleRoll}
        />
      </div>
    );
  }
}

export default Get201Game;
