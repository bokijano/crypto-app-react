import React from "react";

const FavoriteMovieList = ({ addFilm, movie, handleDelete }) => {
  const movieList =
    movie.length > 0 ? (
      movie.map(add => (
        <div key={add.id}>
          <p>
            <span style={{ backgroundColor: "grey", marginLeft: "20px" }}>
              {" "}
              Movie:
            </span>{" "}
            {add.name}{" "}
            <span style={{ backgroundColor: "grey", marginLeft: "20px" }}>
              Main actor:
            </span>{" "}
            {add.mainActor}
            <span style={{ backgroundColor: "grey", marginLeft: "20px" }}>
              Year:
            </span>{" "}
            {add.year}{" "}
            <span style={{ backgroundColor: "grey", marginLeft: "20px" }}>
              Genre:
            </span>{" "}
            {add.genre}{" "}
            <button
              style={{ marginLeft: "150px" }}
              className="btn btn-primary"
              onClick={() => handleDelete(add.id)}
            >
              Delete from the list
            </button>
          </p>
          <hr />
        </div>
      ))
    ) : (
      <p style={{ textAlign: "center" }}>Your list is empty!</p>
    );

  return (
    <div className="favoriteList">
      <h2 style={{ marginTop: "5px", paddingBottom: "15px" }}>
        List of your favorite movies:
      </h2>
      <hr />
      {movieList}
    </div>
  );
};

export default FavoriteMovieList;
