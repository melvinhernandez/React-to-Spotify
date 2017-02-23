import React, { Component } from 'react';

class SelectedArtists extends Component {

  constructor() {
    super();
    this.state = {
      selectedArtists: []
    }
  }

  render() {
    if (this.props.selected.length > 0) {
      return (
        <div>
          <h3>Selected Artists</h3>
          <ul>
            {this.props.selected.map((artist, i) =>
              <li key={artist.id} >Artist: {artist.name}</li>
            )}
          </ul>
        </div>
      )
    } else {
      return <h3>No Artists Selected :(</h3>
    }
  }
}

export default SelectedArtists;
