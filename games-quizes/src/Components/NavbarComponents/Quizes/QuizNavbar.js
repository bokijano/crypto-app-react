import React from "react";
import { Link } from "react-router-dom";

const QuizNavbar = () => {
  return (
    <div style={{ marginTop: "70px", marginLeft: "570px" }}>
      <Link className="linkLook" to="/autoQuiz">
        Quiz about cars
      </Link>
      <Link className="linkLook" to="/footballQuiz">
        Russia2018
      </Link>
    </div>
  );
};

export default QuizNavbar;
