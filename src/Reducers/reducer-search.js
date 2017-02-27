let initialState = {
  results: [],
  fetching: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case 'SELECT_ARTIST':
      state = {...state, results: []}
      break;
    case 'SEARCH_RESULTS_PENDING':
      state = {...state, fetching: true}
      break;
    case 'SEARCH_RESULTS_FULFILLED':
      state = {...state, fetching: false,
                results: action.payload.data.artists.items.slice(0, 5)
              };
      break;
    case 'SEARCH_RESULTS_REJECTED':
      console.log(action.payload.message);
      state = {...state, fetching: false,
                results: []
              };
      break;
    case 'EMPTY_SEARCH_QUERY':
      state = {...state, results: []};
      break;
    default:
      state = {...state, fetching: false
              };
      break;
  }
  return state;
}
