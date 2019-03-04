import React from "react";

const MoviesDisplay = ({ movies, addToFavorites }) => {
  const MoviesDisplay = movies.map(movie => (
    <div className="recomendedMovies" key={movie.id}>
      <p>Name: {movie.name}</p>
      <p>Main actor: {movie.mainActor}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <button
        className="btn btn-primary"
        onClick={() => addToFavorites(movie.id)}
      >
        Add to favorites
      </button>
    </div>
  ));
  return <div>{MoviesDisplay}</div>;
};

export default MoviesDisplay;
