import React, { Component } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

import hallows from "./hallows.png";
import "./App.css";
import quizQuestions from "./api/quizQuestions";
import update from "immutability-helper";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        right: 0,
        wrong: 0
      },
      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setUserAnswer = this.setUserAnswer.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.getResults = this.getResults.bind(this);
    this.setResults = this.setResults.bind(this);
    this.renderQuiz = this.renderQuiz.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  setUserAnswer(answer) {
    let updatedAnswerCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswerCount,
      answer: answer
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
      answer: ""
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.target.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswersCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      key => answersCount[key] === maxAnswersCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({
        result: result[0]
      });
    } else {
      this.setState({
        result: "Undetermined"
      });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  shuffleArray(array) {
    // Fisher-Yates shuffle
    let m = array.length;
    let temp;
    let idx;

    // While there remains elements to shuffle
    while (m) {
      // Pick a remaining element
      idx = Math.floor(Math.random() * m--);

      // Swap it with the current element
      temp = array[m];
      array[m] = array[idx];
      array[idx] = temp;
    }

    return array;
  }

  componentWillMount() {
    let shuffledAnswers = quizQuestions.map(q => this.shuffleArray(q.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswers[0]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hallows} className="App-logo" alt="logo" />
          <h1 className="App-title">
            The Ultimate Harry Potter Quiz
          </h1>
          <p className="App-quote">
            "Well, we were always going to fail that one." ~ R. Weasley
          </p>
          {
            this.state.result
              ? this.renderResult()
              : this.renderQuiz()
          }
        </header>
      </div>
    );
  }
}

export default App;
