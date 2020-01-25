import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
      </div>
    );
  }
}

export default App;
