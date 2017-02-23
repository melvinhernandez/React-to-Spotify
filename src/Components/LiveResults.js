import React, { Component } from 'react';
import SelectedArtists      from './SelectedArtists';

class LiveResults extends Component {

  constructor() {
    super();
    this.state = {
      selectedArtists: []
    }
  }

  render() {
    if (this.props.artists.length > 0) {
      return (
        <div>
          <h3>Suggestions</h3>
          <ul>
            {this.props.artists.map((artist, i) =>
              <li key={artist.id} onClick={ () => this.selectArtist(artist)}>Artist: {artist.name}</li>
            )}
          </ul>
          <hr />
          <SelectedArtists selected={this.state.selectedArtists} />
        </div>
      )
    } else {
      return (
        <div>
          <h3>Search for artists...</h3>
          <hr />
          <SelectedArtists selected={this.state.selectedArtists} />
        </div>
      )
    }
  }

  selectArtist(artist) {
    event.preventDefault();
    this.setState({
      selectedArtists: this.state.selectedArtists.concat(artist)
    });
    console.log(artist);
  }
}

export default LiveResults;
