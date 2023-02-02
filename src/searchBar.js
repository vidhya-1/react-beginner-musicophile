import "./App.css";
// import React, { Component } from "react";
import React from "react";
import { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search here"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {console.log("JSONDATA", JSONDATA)}

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          console.log("Search  Term");
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          console.log("Search Term Else", searchTerm);
          return val;
        }
        // return val;
      }).map((val, key) => {
        console.log("Map function");
        return (
          <div className="list" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
