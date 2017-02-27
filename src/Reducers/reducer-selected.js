// Checks for duplicates before adding to selected artists array.
const notDuplicate = (artistArray, artist) => {
  for (let item of artistArray) {
    if (item.id === artist.id) {
      return false
    }
  }
  return true
}

let initialState = {
  artists: []
}

export default function(state=initialState, action) {
  let artist = action.payload;
  switch (action.type) {
    case 'SELECT_ARTIST':
      if (notDuplicate(state.artists, artist)) {
        state = {...state,
                artists: state.artists.concat(action.payload),
                };
      } else {
        console.log("Artist already selected");
      }
      break;
    case 'REMOVE_ARTIST':
      let i = state.artists.indexOf(artist);
      if (i !== -1) {
        state.artists.splice(i, 1)
      }
      state = {...state}
      break;
    case 'BUILDING_PLAYLIST':
      if (action.remainingCalls === 0) {
        state = {...state, artists: []}
      }
      break;
    default:
      break;
  }
  return state
}
