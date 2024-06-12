import React from "react";

const Options = ({ question, handleAnswer, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className=" flex flex-col gap-5 mb-14">
      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={hasAnswered}
          className={`text-2xl md:text-4xl btn btn-option ${
            index === answer ? "answer" : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => handleAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
