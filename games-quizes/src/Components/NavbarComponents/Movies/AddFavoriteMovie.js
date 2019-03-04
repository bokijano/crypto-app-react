import React, { Component } from "react";

class AddFavoriteMovie extends Component {
  state = {
    name: "",
    mainActor: "",
    year: "",
    genre: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFavoriteMovie(this.state);
  };

  render() {
    return (
      <div className="addingLook">
        <h2 style={{ marginTop: "20px" }}>Add your favorite movie:</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Movie name: </label>
          <input
            type="text"
            name="name"
            placeholder="Add you favorite movie"
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="name">Main actor:</label>
          <input
            style={{ marginLeft: "12px" }}
            type="text"
            name="mainActor"
            placeholder="Add main actor in the movie"
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="name">Years of filming:</label>
          <input
            style={{ marginLeft: "-26px" }}
            type="number"
            name="year"
            placeholder="Add the year when the movie is filmed"
            onChange={this.handleChange}
          />

          <label htmlFor="name">Genre: </label>
          <select
            style={{ marginLeft: "44px" }}
            name="genre"
            onChange={this.handleChange}
          >
            <option style={{ marginLeft: "30px" }} value="">
              ----- Choose the movie genre -----
            </option>
            <option value="Drama">Drama</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
          </select>
          <br />
          <br />

          <button style={{ marginLeft: "150px" }} className="btn btn-primary">
            Add to favorite list
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default AddFavoriteMovie;
