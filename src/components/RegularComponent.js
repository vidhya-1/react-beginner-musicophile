import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("Regular component");
    return (
      <div>
        <h1>
          I am a Regular Component {this.props.name} from {this.props.place}
        </h1>
      </div>
    );
  }
}

export default RegularComponent;
