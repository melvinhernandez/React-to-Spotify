import React, {Component} from 'react';
import Spotify            from './Components/Spotify';
import SelectedArtists    from './Components/SelectedArtists';
import Playlist           from './Components/Playlist';

// The main stylesheet file.
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="app">
        <Spotify />
        <SelectedArtists />
        <Playlist />
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
