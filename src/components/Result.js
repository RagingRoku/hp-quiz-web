import React from "react";

function Result({ answersCount, quizResult }) {
  let decimal = answersCount.correct / (answersCount.correct + answersCount.wrong);
  let percentage = decimal * 100;

  return (
    <div className="result">
      <p>
        You got <strong>{percentage}%</strong>, mostly{" "}
        <strong>{quizResult}</strong> answers!{" "}
      </p>
    </div>
  );
}

export default Result;
