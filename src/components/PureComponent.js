import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Pure component");
    return (
      <div>
        <h1>
          I am a pure Component {this.props.name} from {this.props.place}
        </h1>
      </div>
    );
  }
}

export default PureComp;
