import React, { Component } from "react";

class Click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const count = this.state.count;
    return (
      <div>
        <button onClick={this.increment}>Click Me {count}</button>
      </div>
    );
  }
}
export default Click;
