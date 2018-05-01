import React from 'react';

function QuestionCount (props) {
  return (
    <div>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

export default QuestionCount;
