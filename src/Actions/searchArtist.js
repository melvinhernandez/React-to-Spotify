import axios from 'axios';

export function searchArtist(query) {
  if (query !== '') {
    try {
      let searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist&market=US`;
      return {
        type: 'SEARCH_RESULTS',
        payload: axios.get(searchUrl)
      }
    } catch(error) {
      console.log(error.message);
    }
  } else {
    return {
      type: 'EMPTY_SEARCH_QUERY',
      payload: {}
    }
  }
};
