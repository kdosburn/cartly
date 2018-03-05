import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-bar">Cart.ly</div>
        <Products />
      </div>
    );
  }
}

export default App;
