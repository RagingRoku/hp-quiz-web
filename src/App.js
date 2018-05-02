import React, { Component } from 'react';
import Question from './components/Question';
import hallows from './hallows.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hallows} className="App-logo" alt="logo" />
          <h1 className="App-title">Harry Potter and the Sorcer's Stone Quiz</h1>
        </header>
        <Question content="Where does Mr. Dursley work?" />
      </div>
    );
  }
}

export default App;
