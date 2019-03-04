import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./../App.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand>
          <Link className="brandLook" to="/">
            Fun with us
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ marginLeft: "150px" }}>
              <Link className="brandLook" to="/">
                Home
              </Link>
            </Nav.Link>

            <NavDropdown
              style={{ marginLeft: "30px" }}
              className="brandLook"
              title="Games"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link className="dropLook" to="/get100">
                  Get 100 - 2 players game
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropLook" to="/get201">
                  Get 201 - 4 players game
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropLook" to="/2dice">
                  2 dice game for 2 players
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              style={{ marginLeft: "30px" }}
              className="brandLook"
              title="Quizes"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link className="dropLook" to="/autoQuiz">
                  Auto quiz
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="dropLook" to="/footballQuiz">
                  Football quiz
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={{ marginLeft: "30px" }}>
              <Link className="brandLook" to="/movies">
                Movie
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "30px" }}>
              <Link className="brandLook" to="/cars">
                Cars
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
