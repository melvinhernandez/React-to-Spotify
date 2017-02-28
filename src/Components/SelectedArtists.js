import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import {removeArtist}     from '../Actions/removeArtist';

class SelectedArtists extends Component {

  render() {
    if (this.props.built) {
      return (<span></span>)
    } else if (this.props.selected.artists.length > 0) {
      return (
        <div className="container section">
          <h2 className="small-heading">Selected Artists</h2>
          <ul className="selected-artists">
            {this.props.selected.artists.map((artist) =>
              <li className="artist-card" key={artist.id}>
              <div className="artist-content">
                <div className="remove-artist" onClick={() => this.props.removeArtist(artist)}></div>
                <div className="artist-img" style={{backgroundImage: `url(${artist.images[2].url})`}}></div>
                <p className="artist-title">{artist.name}</p>
                <a className="artist-url" target="_blank" href={artist.external_urls.spotify}>View on Spotify</a>
              </div>
              <div className="artist-blur"></div>
              </li>
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="container section">
          <h2 className="small-heading">Selected Artists</h2>
          <ul className="selected-artists">
            <h2 className="small-heading centered selected-placeholder">2. Select artists to build your playlist.</h2>
          </ul>
        </div>
      )
    }
  }
}
// Containers data
function mapStateToProps(state) {
  return {
    selected: state.selected,
    built: state.playlist.built
  }
}

// Link dispatch to props.
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    removeArtist: removeArtist
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectedArtists);
