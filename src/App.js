import React, { Component } from 'react';
import Question from './components/Question';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Harry Potter | Book 1 Quiz</h1>
        </header>
        <Question content="Where does Mr. Dursley work?" />
      </div>
    );
  }
}

export default App;
