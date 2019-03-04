import React from "react";
import { Row, Col } from "react-bootstrap";

const Get201Func = ({ players, dices, dice, handleRoll }) => {
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
            >
              HOLD
            </button>
            <div className="player-box">
              <div className="player-current-score" />
            </div>
          </Col>

          <Col xs={3}>
            <div className="player-score">0</div>
          </Col>
        </Row>
      </div>
    );
  });
  return (
    <div className="container">
      <Row>
        <Col xs={12} md={9}>
          {playersList}
        </Col>
        <Col xs={12} md={3}>
          <div style={{ marginTop: "30px" }} className="buttonLook">
            <button
              style={{ marginTop: "50px", fontWeight: "bolder" }}
              className="btn btn-danger butLook"
            >
              NEW GAME
            </button>
            <div className="diceLook">{dices[dice - 1]}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Get201Func;
