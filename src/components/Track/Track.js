import React, { Component } from "react";
import "../Track/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack = () => {
    console.log("on Add function", this.props.track);
    this.props.onAdd(this.props.track);
  };

  removeTrack = () => {
    this.props.onRemove(this.props.track);
  };
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  }

  render() {
    console.log("Track Id", this.props.track.id);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} |{this.props.track.album}
          </p>
          <iframe
            src={"https://open.spotify.com/embed/track/" + this.props.track.id}
            width="300"
            height="80"
            frameborder="0"
            allowTransparency="true"
            allow="encypted-media"
            title="preview"
          />
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
