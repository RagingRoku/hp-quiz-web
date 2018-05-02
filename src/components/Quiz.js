import React, { Component } from 'react';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={this.props.answer}
        questionId={this.props.questionId}
        onAnswerSelected={this.props.onAnswerSelected}
      />
    );
  }

  render() {
    return (
      <div className="quiz">
        <QuestionCount
          counter={this.props.questionId}
          total={this.props.questionTotal}
        />
        <Question content={this.props.question} />
        <ul className="answerOptions">
          {this.props.answerOptions.map(this.renderAnswerOptions)}
        </ul>
      </div>
    );
  }
}

export default Quiz;
