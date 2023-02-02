import React from "react";
function FunctionalProps(props) {
  return (
    <div>
      <h1>
        Hey! I am a functional Props {props.name} from {props.place}
      </h1>
      <h3>{props.children}</h3>
    </div>
  );
}
export default FunctionalProps;
