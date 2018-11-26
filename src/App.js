import React, { Component } from 'react';
import './App.css';
import Range from './Range';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">  Simple offer challange
         </header>
        <Range id="1" RangeName="Beginers" ></Range>
        <Range id="2" RangeName="Advance" ></Range>
        <Range id="3" RangeName="Expert" ></Range>

      </div>

    );
  }
}

export default App;
