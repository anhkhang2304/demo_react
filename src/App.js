import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from "./content.js";

export default class App extends Component {
  constructor(){
    super();
    this.state = { name: "Anh Khang" };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Content name={ this.state.name } />
        <div id="hello"></div>
      </div>
    );
  }
}

