import "./App.css";
// import React, { Component } from "react";
import React from "react";
import { useState } from "react";

function App() {
  // class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }
  const [count, setState] = useState(0);
  const [color, setColor] = useState("cold");
  function increment() {
    const countValue = count + 1;
    if (countValue >= 15) {
      setColor("hot");
    }
    setState(countValue);
  }
  function decrement() {
    const countValue = count - 1;
    if (countValue <= 15) {
      setColor("cold");
    }
    setState(countValue);
  }
  // render() {
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{count}°C</div>
      </div>
      <div className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
  // }
}

export default App;
