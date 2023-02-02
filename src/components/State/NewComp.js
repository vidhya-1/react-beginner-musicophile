import React, { Component } from "react";
import BellA from "../State/BellA.png";
import BellB from "../State/BellB.png";
import "../State/App.css";

export class NewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to poetic world",
      sub: "Subscribe",
      imageUrl: BellA,
    };
  }
  styles = {
    fontStyle: "bold",
    color: "teal",
  };
  clickFunction = () => {
    this.setState({
      message: "Thank you for subscribed Poetic world",
      sub: "Subscribed",
    });
  };
  bellFunction = () => {
    this.setState({
      message: "Regular Updates on track,Thank you",
      imageUrl: BellB,
    });
  };
  render() {
    return (
      <div className="APP">
        <p style={this.styles}>{this.state.message}</p>
        <button onClick={this.clickFunction}>{this.state.sub}</button>
        <img
          style={{ width: "30px", height: "30px" }}
          src={this.state.imageUrl}
          onClick={this.bellFunction}
          alt=""
        ></img>
      </div>
    );
  }
}

export default NewComp;
