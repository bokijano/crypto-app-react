import React, { Component } from "react";
import "./App.css";
import Currencies from "./components/currencies";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Currencies />
      </div>
    );
  }
}

export default App;
