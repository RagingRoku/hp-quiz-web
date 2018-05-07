import React from 'react';

function Result(props) {
  return (
    <div className="result">
      You got mostly <strong>{props.quizResult}</strong> answers!
    </div>
  );
}

export default Result;
