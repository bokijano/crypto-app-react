import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GamesNavbar from "./GamesNavbar";
import Get100 from "./Get100/Get100";
import Get201 from "./Get201/Get201";
import TwoDice from "./TwoForTwo/TwoDice";
import DiceOne from "./../pictures/dice-1.png";
import DiceTwo from "./../pictures/dice-2.png";
import DiceThree from "./../pictures/dice-3.png";
import DiceFour from "./../pictures/dice-4.png";
import DiceFive from "./../pictures/dice-5.png";
import DiceSix from "./../pictures/dice-6.png";
import "./Games.css";

class Games extends Component {
  state = {
    seeDices: true
  };
  delDice = () => {
    this.setState({
      seeDices: false
    });
    console.log(this.state.seeDices);
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <GamesNavbar delDice={this.delDice} />
          <Route path="/get100" component={Get100} />
          <Route path="/get201" component={Get201} />
          <Route path="/2dice" component={TwoDice} />

          {this.state.seeDices ? (
            <div className="row dicesLook">
              <div className="col-xs-2">
                <img
                  style={{ marginTop: "150px", marginLeft: "20px" }}
                  className="img-responsive imgLook"
                  src={DiceThree}
                  alt="dice3"
                />
                <h2 style={{ marginTop: "30px" }}>Roll the dices!</h2>
              </div>
              <div className="col-xs-2">
                <img
                  style={{ marginTop: "60px" }}
                  className="img-responsive imgLook"
                  src={DiceFive}
                  alt="dice3"
                />
                <h2 style={{ marginTop: "30px" }}>Games for two!</h2>
              </div>
              <div className="col-xs-2">
                <img
                  style={{ marginTop: "130px" }}
                  className="img-responsive imgLook"
                  src={DiceTwo}
                  alt="dice3"
                />
                <h2 style={{ marginTop: "30px" }}>Fun with dices!</h2>
              </div>
              <div className="col-xs-2">
                <img
                  className="img-responsive imgLook"
                  src={DiceSix}
                  alt="dice3"
                />
                <h2 style={{ marginTop: "30px" }}>The best games!</h2>
              </div>
              <div className="col-xs-2">
                <img
                  style={{ marginTop: "150px" }}
                  className="img-responsive imgLook"
                  src={DiceOne}
                  alt="dice3"
                />
                <h2 style={{ marginTop: "30px" }}>Be the best!</h2>
              </div>
              <div className="col-xs-2">
                <img
                  style={{ marginTop: "100px" }}
                  className="img-responsive imgLook"
                  src={DiceFour}
                  alt="dice3"
                />
                <h2 style={{ marginTop: "30px" }}>Four players!</h2>
              </div>
            </div>
          ) : null}
        </div>
      </BrowserRouter>
    );
  }
}

export default Games;
