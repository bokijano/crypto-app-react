import React from "react";
import Zvezda from "./pictures/zvezda.jpg";
import Smiley from "./pictures/smile.jpg";
import DiceOne from "./pictures/dice-1.png";
import DiceTwo from "./pictures/dice-2.png";
import DiceThree from "./pictures/dice-3.png";
import DiceFour from "./pictures/dice-4.png";
import DiceFive from "./pictures/dice-5.png";
import DiceSix from "./pictures/dice-6.png";
import Film from "./pictures/film1.jpg";
import Mercedes from "./pictures/auto.jpg";
import Fica from "./pictures/fica2.jpg";
import "./../../App.css";
import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-fluid">
      <Row style={{ marginTop: "100px" }}>
        <Col xs={12} md={4}>
          <Image
            style={{ paddingLeft: "100px" }}
            src={Smiley}
            alt="zvezda"
            fluid
          />
          <h2>QUIZ about World Cup Russia2018!</h2>
        </Col>
        <Col xs={6} md={4} style={{ marginTop: "50px" }}>
          <Image src={Zvezda} alt="zvezda" responsive rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Smiley} alt="zvezda" fluid />
          <h4>Interesting things about cars! Try to guess it?</h4>
        </Col>
      </Row>

      <div className="container">
        <Row className="dicesLook">
          <Col xs={2}>
            <Image
              style={{ marginTop: "80px" }}
              className="imgLook"
              src={DiceThree}
              alt="dice3"
              fluid
            />
          </Col>
          <Col xs={2}>
            <Image
              style={{ marginTop: "50px" }}
              className="imgLook"
              src={DiceFive}
              alt="dice3"
              fluid
            />
          </Col>
          <Col xs={2}>
            <Image className="imgLook" src={DiceTwo} alt="dice3" fluid />
            <h2 style={{ marginTop: "10px" }}>Fun!</h2>
          </Col>
          <Col xs={2}>
            <Image className="imgLook" src={DiceSix} alt="dice3" fluid />
            <h2 style={{ marginTop: "50px" }}>Dice games!</h2>
          </Col>
          <Col xs={2}>
            <Image
              style={{ marginTop: "50px" }}
              className="imgLook"
              src={DiceOne}
              alt="dice3"
              fluid
            />
          </Col>
          <Col xs={2}>
            <Image
              style={{ marginTop: "80px" }}
              className="imgLook"
              src={DiceFour}
              alt="dice3"
              fluid
            />
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <Row>
          <Col xs={12} md={6}>
            <Image className="movieLook" src={Film} alt="film-type" fluid />
            <h2 className="headingLook">What are your favorite movies?</h2>
          </Col>

          <Col style={{ float: "left", marginTop: "100px" }} xs={6} md={3}>
            <Image className="carLook" src={Mercedes} alt="mercedes" fluid />
          </Col>

          <Col style={{ float: "left", marginTop: "40px" }} xs={6} md={3}>
            <Image className="carLook" src={Fica} alt="fica" fluid />
            <h2 style={{ marginTop: "5px", marginLeft: "20px" }}>
              All about cars!
            </h2>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
