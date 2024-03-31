import { Component } from 'react';
import Display from './Display'
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="app">
        <Display />
      </div>
    );
  }
}

export default App;
