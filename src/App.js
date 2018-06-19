import React, { Component } from 'react';
import './App.css';
import Homepage from './container/Homepage';
import {BrowserRouter} from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Homepage/>
        </div>
      </BrowserRouter>
    );
  }
} 

export default App;
