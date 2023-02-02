import React, { Component } from "react";
import "../SearchResults/SearchResults.css";
import TrackList from "../TrackList/TrackList";
class SearchResults extends Component {
  render() {
    console.log("this.props.SearchResults", this.props.searchResults);
    console.log("this.props.OnAdd", this.props.onAdd);

    return (
      <div className="SearchResults">
        {/* <TrackList /> */}
        <h1>Results</h1>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
      </div>
    );
  }
}

export default SearchResults;
