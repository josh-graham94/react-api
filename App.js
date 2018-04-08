import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './components/clock'
import API from './components/api'

import API from './router/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        </p>
          <Clock/>
          <API/>
      </div>
    );
  }
}

export default App;
