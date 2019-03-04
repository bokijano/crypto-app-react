import React, { Component } from "react";
import Get201Game from "./Get201Game";

class Get201 extends Component {
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
            <h1 style={{ marginTop: "30px" }}>
              Get 201 points and win the game
            </h1>
            <h2>The game has 4 players, playing in rounds</h2>
            <h2>
              In each turn, a player rolls a dice as many times as he wishes,
              each result get added to his ROUND score
            </h2>
            <h3>
              The player can choose to 'HOLD', which means that his ROUND score
              gets added to his GLOBAL score, after that, it's the next player's
              turn
            </h3>
            <h3>
              The player have 20+ points in ROUND score and 'HOLD', ROUND score
              is double
            </h3>
            <h3>
              The player have 30+ points in ROUND score and 'HOLD', ROUND score
              is three times bigger
            </h3>
            <h4>
              The player have 40+ points in ROUND score and 'HOLD', ROUND score
              is four times bigger
            </h4>
            <h4>
              BUT, if the player rolls a 1, all his ROUND score gets lost, after
              that, it's the next player's turn
            </h4>
            <h4>
              The player rolls 2 two times in row, ROUND score before last roll
              is double, goes in GLOBAL score and it's the next player turn
            </h4>
            <h3>
              The player rolls 3 two times in row, ROUND score before last roll
              is three times bigger, goes in GLOBAL score and it's the next
              player turn
            </h3>
            <h3>
              The player rolls 4 two times in row, ROUND score before last roll
              is four times bigger, goes in GLOBAL score and it's the next
              player turn
            </h3>
            <h3>
              The player rolls 5 or 6 two times in row, all his GLOBAL score get
              lost, after that, it's the next player's turn
            </h3>
            <h2>
              The player rolls 5 or 6 in last roll, if next player roll 5 or 6,
              all GLOBAL score of next player get lost, it's the next player's
              turn
            </h2>
            <h2>
              The first player to reach 201 points on GLOBAL score wins the game
            </h2>
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
            <br />
            <br />
          </div>
        ) : (
          <Get201Game />
        )}
      </div>
    );
  }
}

export default Get201;
