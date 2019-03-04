import React, { Component } from "react";
import MoviesDisplay from "./MoviesDisplay";
import Film from "./../pictures/film1.jpg";
import AddFavoriteMovie from "./AddFavoriteMovie";
import FavoriteMovieList from "./FavoriteMovieList";
import "./Movies.css";

class Movies extends Component {
  state = {
    emptyMovies: [],
    movies: [
      {
        id: 1,
        name: "Gone with the wind",
        mainActor: "Scarlet O'Hara",
        year: 1939,
        genre: "Historical drama"
      },
      {
        id: 2,
        name: "The green mile",
        mainActor: "Tom Hanks",
        year: 1999,
        genre: "Crime drama"
      },
      {
        id: 3,
        name: "Fight club",
        mainActor: "Brad Pitt",
        year: 1999,
        genre: "Drama"
      },
      {
        id: 4,
        name: "About a boy",
        mainActor: "Hugh Grant",
        year: 2002,
        genre: "Comedy"
      },
      {
        id: 5,
        name: "Black panther",
        mainActor: "Chadwick Boseman",
        year: 2018,
        genre: "Action, Sci-Fi"
      },
      {
        id: 6,
        name: "Terminator 2: Judgment Day",
        mainActor: "Arnold Schwarzenegger",
        year: 1991,
        genre: "Action"
      },
      {
        id: 7,
        name: "Salt",
        mainActor: "Angelina Jolie",
        year: 2012,
        genre: "Thriller"
      },
      {
        id: 8,
        name: "Finding Nemo",
        mainActor: "Albert Brooks",
        year: 2003,
        genre: "Animation, Adventure"
      }
    ]
  };

  addFavoriteMovie = movie => {
    movie.id = Math.random();
    let emptyMovies = [...this.state.emptyMovies, movie];
    this.setState({
      emptyMovies: emptyMovies
    });
  };

  handleDelete = id => {
    let emptyMovies = this.state.emptyMovies.filter(empty => {
      return empty.id !== id;
    });
    this.setState({
      emptyMovies: emptyMovies
    });
  };

  addToFavorites = id => {
    let addMovie = this.state.movies.filter(add => {
      return add.id !== id;
    });

    this.setState({
      movies: addMovie
    });
  };

  render() {
    return (
      <div className="movieLooking">
        <h2
          style={{
            marginTop: "100px",
            marginLeft: "50px",
            marginRight: "50px",
            textAlign: "center",
            padding: "20px",
            border: "5px solid dodgerBlue",
            borderRadius: "20px",
            fontWeight: "bolder",
            fontSize: "35px"
          }}
        >
          We recommend this movies:
        </h2>

        <MoviesDisplay
          movies={this.state.movies}
          addToFavorites={this.addToFavorites}
        />
        <img className="moviesLook" src={Film} alt="filmTape" />
        <AddFavoriteMovie
          emptyMovies={this.state.emptyMovies}
          addFavoriteMovie={this.addFavoriteMovie}
        />
        <FavoriteMovieList
          movie={this.state.emptyMovies}
          addFilm={this.state.movies}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Movies;
