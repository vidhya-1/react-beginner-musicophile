import React, { Component } from "react";

export class MouseEnter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 2 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.increment}>Hover Me {count}</button>
      </div>
    );
  }
}

export default MouseEnter;
