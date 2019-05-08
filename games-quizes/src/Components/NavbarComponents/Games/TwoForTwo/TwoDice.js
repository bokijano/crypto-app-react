import React, { Component } from "react";
import TwoDiceGame from "./TwoDiceGame";

class TwoDice extends Component {
  state = {
    seeText: true
  };
  seeGame = () => {
    this.setState({
      seeText: false
    });
  };
  render() {
    return (
      <div>
        {this.state.seeText ? (
          <div
            style={{ textAlign: "center", marginTop: "100px" }}
            class="container"
          >
            <h1>Enter goal points, get it and win the game</h1>
            <h2>The game has 2 players, playing in rounds</h2>
            <h3>
              In each turn, a player rolls two dices as many times as he wishes,
              each result get added to his ROUND score
            </h3>
            <h3>
              BUT, if add of ttwo dices is smaller than 5, all player ROUND
              score gets lost, after that it's the next player's turn
            </h3>
            <h4>
              If player rolls double 1, all his GLOBAL score gets lost, after
              that, it's the next player's turn
            </h4>
            <h4>
              If player rolls double 2, all his ROUND score before gets double,
              add to GLOBAL score and after that it's the next player's turn
            </h4>
            <h4>
              If player rolls double 3, all his ROUND score before gets triple,
              add to GLOBAL score and after that it's the next player's turn
            </h4>
            <h3>
              The player can choose to 'HOLD', which means that his ROUND score
              gets added to his GLOBAL score, after that, it's the next player's
              turn
            </h3>
            <h2>
              The first player to reach 100 points on GLOBAL score wins the game
            </h2>
            <br />
            <br />
            <br />
            <button
              style={{
                marginLeft: "100px",
                marginBottom: "30px",
                width: "200px",
                fontWeight: "bolder"
              }}
              className="btn btn-primary"
              onClick={this.seeGame}
            >
              Play the game
            </button>
          </div>
        ) : (
          <TwoDiceGame />
        )}
      </div>
    );
  }
}

export default TwoDice;
