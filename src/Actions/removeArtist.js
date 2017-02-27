export function removeArtist(artist) {
  return {
    type: 'REMOVE_ARTIST',
    payload: artist
  }
};
