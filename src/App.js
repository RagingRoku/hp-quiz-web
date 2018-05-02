import React, { Component } from 'react';
import Question from './components/Question';
import Quiz from './components/Quiz';
import hallows from './hallows.png';
import './App.css';
import quizQuestions from './api/quizQuestions';
import update from 'immutability-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount:{
        right: 0,
        wrong: 0,
      },
      result: '',
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setUserAnswer = this.setUserAnswer.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    // this.shuffleArray = this.shuffleArray.bind(this);
  }

  setUserAnswer(answer) {
    let updatedAnswerCount = update(this.state.answersCount, {
      [answer]: {$apply : currentValue => currentValue + 1}
    });

    this.setState({
      answersCount: '',
      answer: answer,
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter,
      questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    })
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.target.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {

    }
  }
  // shuffleArray(array) {
  //   let currentIndex = array.length;
  //   let temporaryValue;
  //   let randomIndex;

  //   // while (0 !== currentIndex) {
  //   //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   //   currentIndex = -1;

  //   //   temporaryValue = array[currentIndex];
  //   //   array[currentIndex] = array[randomIndex];
  //   //   array[randomIndex] = temporaryValue;
  //   // }
  //   return array;
  // }

  componentWillMount() {
    let answers = quizQuestions.map(q => q.answers);

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answers[0],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hallows} className="App-logo" alt="logo" />
          <h1 className="App-title">Harry Potter and the Sorcer's Stone Quiz</h1>
        </header>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default App;
