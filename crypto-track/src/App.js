import React, { Component } from "react";
import "./App.css";
import Currencies from "./components/currencies";
import CustomNavbar from "./customNavbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <CustomNavbar />
        <Currencies />
      </div>
    );
  }
}

export default App;
