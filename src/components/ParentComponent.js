import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComponent";
import FunctionalProps from "./FunctionalProps";
export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vidhu",
      place: "New Chennai",
    };
  }
  // componentDidMount() {                                                        // working on ComponentDidmount
  //   setInterval(() => {
  //     this.setState({ name: "Selva", place: "New York" });
  //   }, 3000);
  // }
  render() {
    console.log("Parent component");
    return (
      <div>
        <h2>I am parent component</h2>
        <PureComp name={this.state.name} place={this.state.place} />
        {/*Eg Understanding of pure Component*/}
        <RegularComponent name={this.state.name} place={this.state.place} />
        {/*Eg for Component props*/}
        <FunctionalProps name={this.state.name} place={this.state.place}>
          <button>Click Here</button>
        </FunctionalProps>
        {/*Eg for functional props and children props*/}
      </div>
    );
  }
}

export default ParentComponent;
