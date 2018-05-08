import React from "react";
import Gif from "./Gif";

function Result({ answersCount, quizResult }) {
  let decimal = answersCount.correct / (answersCount.correct + answersCount.wrong);
  let percentage = decimal * 100;

  return (
    <div className="result">
      <p>
        You got <strong>{percentage}%</strong>, mostly{" "}
        <strong>{quizResult}</strong> answers!{" "}
      </p>
      <Gif percentage={percentage} />
      <br />
      <button className="resetButton" onClick={() => window.location = '/'}>
        Try Again
      </button>
    </div>
  );
}

export default Result;
