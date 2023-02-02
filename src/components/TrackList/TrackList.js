import React, { Component } from "react";
import "../TrackList/TrackList.css";
import Track from "../Track/Track";

class TrackList extends Component {
  render() {
    console.log("TrackList", this.props.tracks);
    console.log("On ADD TrackList file", this.props.onAdd);
    // return;
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              isRemoval={this.props.isRemoval}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
