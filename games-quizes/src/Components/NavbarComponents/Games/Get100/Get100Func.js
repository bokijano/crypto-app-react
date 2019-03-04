import React from "react";
import "./Get100.css";
import { Row, Col } from "react-bootstrap";

const Get100Func = ({
  players,
  sumDices,
  handleRoll,
  changePlayer,
  dices,
  dice
}) => {
  const playersList = players.map(player => {
    return (
      <div className="playerLook activePlayer" key={player.id}>
        <Row>
          <Col xs={3}>
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                marginTop: "40px",
                textAlign: "center"
              }}
            >
              Player
            </h6>
            <h2
              style={{
                fontSize: "50px",
                fontWeight: "bolder",
                marginTop: "10px",
                textAlign: "center"
              }}
            >
              {player.id}
            </h2>
          </Col>

          <Col xs={6}>
            <button
              style={{ marginTop: "20px", fontWeight: "bolder" }}
              onClick={() => handleRoll(player)}
              className="btn btn-info butLook"
            >
              ROLL
            </button>
            <button
              style={{ fontWeight: "bolder" }}
              className="btn btn-primary butLook"
              onClick={() => changePlayer(player)}
            >
              HOLD
            </button>
            <div className="player-box">
              <div className="player-current-score">
                CURR {sumDices(player.score)}
              </div>
            </div>
          </Col>

          <Col xs={3}>
            <div className="player-score">{sumDices(player.roundScore)}</div>
          </Col>
        </Row>
      </div>
    );
  });
  return <div>{playersList}</div>;
};

export default Get100Func;
