import React, {Component}   from 'react';
import {bindActionCreators} from 'redux';
// Connect container to the passed down prop store.
import {connect}            from 'react-redux';
import {buildPlaylist}       from '../Actions/buildPlaylist';

// Abstract: communicate with Spotify API.
// Renders: input search field.
class Playlist extends Component {

  render() {
    if (this.props.inProgress) {
      return (
        <div className="container section">
          <h2 className="small-heading centered">Building your playlist...</h2>
        </div>
      )
    } else if (this.props.built) {
      return (
        <div className="container section">
          <h2 className="big-heading centered">Your 10 Track Playlist</h2>
          <iframe src={`https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:${this.props.tracks.join()}`} height="400" width="100%"></iframe>
        </div>
      )
    } else if (this.props.artists.length !== 0) {
      return (
        <div className="container section spotify-iframe">
          <h2 className="small-heading centered">3. Build your playlist.</h2>
          <div className="playlist-btn" onClick={() => this.props.buildPlaylist(this.props.artists)}>Create Playlist</div>
        </div>
      )
    } else {
      return (
        <div className="container spotify-iframe">
        <h2 className="small-heading centered">3. Build your playlist.</h2>
        </div>
      )
    }
  }

}

// Container functionality.
function mapStateToProps(state) {
  return {
    artists: state.selected.artists,
    inProgress: state.playlist.inProgress,
    built: state.playlist.built,
    tracks: state.playlist.tracks
  }
}

// Pass in action to component
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    buildPlaylist: buildPlaylist
  }, dispatch)
}

// Export this file as a container, aka smart component.
export default connect(mapStateToProps, matchDispatchToProps)(Playlist);
