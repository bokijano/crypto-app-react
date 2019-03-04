import React, { Component } from "react";
import QuizNavbar from "./QuizNavbar";
import { BrowserRouter, Route } from "react-router-dom";
import AutoQuiz from "./AutoQuiz";
import FootballQuiz from "./FootballQuiz";

class Quizes extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <QuizNavbar />
          <Route path="/autoQuiz" component={AutoQuiz} />
          <Route path="/footballQuiz" component={FootballQuiz} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Quizes;
