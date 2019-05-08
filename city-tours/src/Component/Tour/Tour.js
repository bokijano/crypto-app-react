import React, { Component } from "react";
import "./Tour.css";

class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, info, img, name, city } = this.props.tour;
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="city tours" />
          <span
            className="close-btn btnLook"
            onClick={() => this.props.handleDelete(id)}
          >
            x
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>^</span>
          </h5>
          {this.state.showInfo ? (
            <p style={{ paddingTop: "10px" }}>{info}</p>
          ) : null}
        </div>
      </article>
    );
  }
}

export default Tour;
