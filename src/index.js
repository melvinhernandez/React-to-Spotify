import './index.css';
import React          from 'react';
import ReactDOM       from 'react-dom';
// Import provider to pass data from store to container.
import {Provider}     from 'react-redux';
// Import function from redux library.
import {applyMiddleware, createStore}  from 'redux';
import promise        from 'redux-promise-middleware';
import thunk          from 'redux-thunk';

import App            from './App';
// Get the index file from the reducers folder.
import allReducers    from './Reducers';

// Middleware functionality
const middleware = applyMiddleware(promise(), thunk);
// Create the store object to store all compiled data.
const store = createStore(allReducers, middleware);


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
