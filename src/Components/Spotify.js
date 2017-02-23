import React, { Component } from 'react';
import Request              from 'superagent';
import LiveResults          from './LiveResults';

class Spotify extends Component {

  constructor() {
    super();
    this.state = {
      api: 'https://api.spotify.com/v1/',
      queryType: 'artist',
      artists: []
    }
  }

  render() {
    return (
      <form className="SpotifyRequest" >
        <input type="text" ref="query" onChange={this.callToSpotify.bind(this)}/>
        <br />
        <LiveResults artists={this.state.artists} />
      </form>
    );
  }

  // Call on the Spotify api once the app has been authorized.
  callToSpotify(event) {
    event.preventDefault();
    if (this.refs.query.value !== '') {
      var searchUrl = this.state.api + 'search';
      Request.get(searchUrl)
        .query({q: this.refs.query.value,
                type: this.state.queryType,
                market: 'US'})
        .then((response) => {
          this.setState({
            artists: response.body.artists.items.slice(0, 6)
          })
        }) //then
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({
        artists: []
      })
    }
  }

}


export default Spotify;
