import React, { Component } from "react";
import { Image, Navbar, Nav } from "react-bootstrap";
import Currency from "./currency.jpg";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand
          style={{ color: "dodgerblue", fontSize: "30px" }}
          className="fontFour"
        >
          Cryptocurrencies
        </Navbar.Brand>
        <Nav className="navbar-head mr-auto">Check your coins!</Nav>
        <Nav>
          <Image src={Currency} alt="currency" rounded fluid />
          <span className="counter">0</span>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavbar;
