import axios from 'axios';

export function spotifyClient(artist) {
  return axios.get(`${artist.href}/top-tracks?country=US`)
              .then((response) => {
                return response.data
              })
              .catch(error => console.log("There was an error: ", error));
}

export function concatPlaylist(tracks, remainingCalls) {
  return {
    type: 'BUILDING_PLAYLIST',
    payload: tracks,
    remainingCalls
  }
}

export function buildPlaylist(artists) {
  let totalCalls = artists.length;
  return function(dispatch) {
    for (let i = 0; i < artists.length; i++) {
      spotifyClient(artists[i])
        .then(response => {
          totalCalls -= 1;
          dispatch(concatPlaylist(response.tracks.map(track => track.id), totalCalls))
        })
        .catch(error => console.log(error));
    }
  }
};
