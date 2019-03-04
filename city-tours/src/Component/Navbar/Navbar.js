import React from "react";
import "./Navbar.css";
import Logo from "./logo.jpg";
import { Image } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navbar">
      <Image style={{ width: "80px" }} src={Logo} fluid />
      <ul className="nav-links">
        <li>
          <a href="" className="nav-link">
            HOME
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="" className="nav-link active">
            TOURS
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
