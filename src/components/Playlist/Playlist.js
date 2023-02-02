import React, { Component } from "react";
import "../Playlist/Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange = (event) => {
    this.props.onNameChange(event.target.value);
  };

  render() {
    console.log("Playlist file", this.props.PlaylistTracks);
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          tracks={this.props.PlaylistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <button className="Playlist-Save" onClick={this.props.onSave}>
          Save to Spotify
        </button>
      </div>
    );
  }
}

export default Playlist;
