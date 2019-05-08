import React, { Component } from "react";
import "./Get100.css";
import dice1 from "./../../pictures/dice-1.png";
import dice2 from "./../../pictures/dice-2.png";
import dice3 from "./../../pictures/dice-3.png";
import dice4 from "./../../pictures/dice-4.png";
import dice5 from "./../../pictures/dice-5.png";
import dice6 from "./../../pictures/dice-6.png";
import Get100Func from "./Get100Func";
import { Row, Col } from "react-bootstrap";

class Get100Game extends Component {
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
    dice: null
  };

  handleRoll = player => {
    let dice = Math.floor(Math.random() * 6) + 1;
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...player };
    players[index].score = [...players[index].score, dice];
    players[index].roundScore = [...players[index].roundScore, dice];
    console.log(players[index].score);
    console.log(players[index].roundScore);
    console.log(this.state.dice);
    console.log(this.state.dices[dice]);
    this.setState({
      dice: dice,
      players: players
    });
  };

  changePlayer = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...player };
    players[index].score = [];
    console.log(players[index].activePlayer);
    this.setState({
      players
    });
  };

  sumDices = arr => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };

  render() {
    return (
      <div style={{ marginTop: "80px" }} className="container-fluid">
        <Row>
          <Col xs={12} md={8}>
            <Get100Func
              players={this.state.players}
              dices={this.state.dices}
              dice={this.state.dice}
              sumDices={this.sumDices}
              handleRoll={this.handleRoll}
              changePlayer={this.changePlayer}
            />
          </Col>
          <Col xs={12} md={4}>
            <div style={{ marginTop: "30px" }} className="buttonLook">
              <div className="diceLook" style={{ marginRight: "10px" }}>
                {this.state.dices[this.state.dice - 1]}
              </div>
              <button
                style={{
                  marginTop: "10px",
                  marginBottom: "20px",
                  fontWeight: "bolder"
                }}
                className="btn btn-danger butLook"
              >
                NEW GAME
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Get100Game;
