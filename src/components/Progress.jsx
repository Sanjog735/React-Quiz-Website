import React from "react";

const Progress = ({ index, numQuestions, points, answer, maxPoints }) => {
  return (
    <header className="progress  items-center text-xl md:text-3xl">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
