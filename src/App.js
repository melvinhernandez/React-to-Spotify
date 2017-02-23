import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Spotify from './Components/Spotify';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Spotify />
        <h2>Hello, this is a message from App!</h2>
      </div>
    );
  }

  componentWillMount() {
    // Called the first time the component is loaded
    // right before the component is added to the page.
  }

  componentDidMount() {
    // Called after the component has been rendered into the page.
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed.
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change.
  }

  componentWillUnmount() {
    // Called when the component is removed.
  }

}

export default App;
