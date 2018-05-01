import React, { Component } from 'react';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  render() {
    return (
      <div className="quiz">
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(this.renderAnswerOptions)}
        </ul>
      </div>
    );
  }
}

export default Quiz;
