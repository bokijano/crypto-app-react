import React, { Component } from "react";
import Get100Game from "./Get100Game";

class Get100 extends Component {
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
          <div style={{ marginTop: "100px" }} className="container">
            <h2 style={{ marginTop: "30px" }}>
              Get 100 points and win the game
            </h2>
            <br />
            <h2>The game has 2 players, playing in rounds</h2>
            <br />
            <h3 style={{ textAlign: "center" }}>
              In each turn, a player rolls a dice as many times as he wishes,
              each result get added to his ROUND score
            </h3>
            <h4 style={{ textAlign: "center" }}>
              BUT, if the player rolls a 1, all his ROUND score gets lost, after
              that, it's the next player's turn
            </h4>
            <h3 style={{ textAlign: "center" }}>
              The player can choose to 'HOLD', which means that his ROUND score
              gets added to his GLOBAL score, after that, it's the next player's
              turn
            </h3>
            <br />
            <h2>
              The first player who reach 100 points on GLOBAL score wins the
              game
            </h2>
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
          <div>
            <Get100Game />
          </div>
        )}
      </div>
    );
  }
}

export default Get100;
