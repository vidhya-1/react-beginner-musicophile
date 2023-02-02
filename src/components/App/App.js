import React, { Component } from "react";

import SearchBar from "../Search/SearchBar";
import SearchResults from "../SearchResults/SearchResult";
import Spotify from "../util/Spotify.js";
import Playlist from "../Playlist/Playlist";

import "../App/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [],
      PlaylistName: "New Playlist",
      PlaylistTracks: [],
    };
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }
  search = (term) => {
    Spotify.search(term).then((SearchResults) => {
      console.log("Inside Search Function", SearchResults);
      this.setState({ SearchResults: SearchResults });
    });
  };
  addTrack = (track) => {
    console.log("aPP.JS Add track function", track);
    let tracks = this.state.PlaylistTracks;
    console.log("PlayList Tracks", tracks);
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      console.log("Inside if tracks");
      return;
    }
    tracks.push(track);
    this.setState({ PlaylistTracks: tracks });
    console.log("this.state.playlistTracks", this.state.PlaylistTracks);
  };
  removeTrack = (track) => {
    let tracks = this.state.PlaylistTracks;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    trackSearch.unshift(tracks);
    this.setState({ PlaylistTracks: tracks });
  };
  removeTrackSearch = (track) => {
    let tracks = this.state.SearchResults;
    tracks = tracks.find((currentTrack) => currentTrack.id !== track.id);
    this.setState({ SearchResults: tracks });
  };
  doThese = (track) => {
    this.addTrack(track);
    this.removeTrackSearch(track);
  };
  updatePlaylistName = (name) => {
    this.setState({ PlaylistName: name });
  };
  savePlaylist = () => {
    const trackUris = this.state.PlaylistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.PlaylistName, trackUris).then(() => {
      this.setState({
        updatePlaylistName: "New Playlist",
        PlaylistTracks: [],
      });
    });
  };
  // console.log("Spotify",)

  render() {
    console.log("Spotify", Spotify);

    return (
      <div>
        <h1>
          <a href="http://localhost:3000">Musicophile</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              PlaylistTracks={this.state.PlaylistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div>
//       <h1>
//         <a href="http://localhost:3000">Musicophile</a>
//       </h1>
//       <div className="App">
//         <SearchBar onSearch={this.search} />
//         <div className="App-playlist">
//           <SearchResults searchResults={this.state.SearchResults} />
//           <Playlist
//             PlaylistTracks={this.state.PlaylistTracks}
//             onNameChange={this.updatePlaylistName}
//             onRemove={this.removeTrack}
//             onSave={this.savePlaylist}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
