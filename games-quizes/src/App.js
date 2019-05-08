import React, { Component } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/NavbarComponents/Home";
import AutoQuiz from "./Components/NavbarComponents/Quizes/AutoQuiz";
import FootballQuiz from "./Components/NavbarComponents/Quizes/FootballQuiz";
import Get100 from "./Components/NavbarComponents/Games/Get100/Get100";
import Get201 from "./Components/NavbarComponents/Games/Get201/Get201";
import TwoDice from "./Components/NavbarComponents/Games/TwoForTwo/TwoDice";
import Movies from "./Components/NavbarComponents/Movies/Movies";
import Cars from "./Components/NavbarComponents/Cars/Cars";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />

          <Route path="/autoQuiz" component={AutoQuiz} />
          <Route path="/footballQuiz" component={FootballQuiz} />

          <Route path="/get100" component={Get100} />
          <Route path="/get201" component={Get201} />
          <Route path="/2dice" component={TwoDice} />

          <Route path="/movies" component={Movies} />
          <Route path="/cars" component={Cars} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
