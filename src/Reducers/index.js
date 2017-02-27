import {combineReducers}        from 'redux';

// import all reducers to pass them to the above function.
import searchReducer            from './reducer-search';
import selectedReducer          from './reducer-selected';
import reducerPlaylist          from './reducer-playlist';

const allReducers = combineReducers({
  search: searchReducer,
  selected: selectedReducer,
  playlist: reducerPlaylist
});

export default allReducers;
