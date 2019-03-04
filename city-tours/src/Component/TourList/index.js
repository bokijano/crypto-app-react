import React, { Component } from "react";
import "./TourList.css";
import Tour from "./../Tour/Tour";
import TourData from "./../tourData";

class TourList extends Component {
  state = {
    tours: TourData
  };
  handleDelete = id => {
    let tours = this.state.tours.filter(tour => {
      return tour.id !== id;
    });
    this.setState({
      tours: tours
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}

export default TourList;
