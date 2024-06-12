import React from "react";
import Options from "./Options";

const Question = ({ question, handleAnswer, answer }) => {
  return (
    <div className=" px-[18%] sm:px-0">
      <h4 className="text-3xl md:text-4xl font-semibold mb-10">
        {question.question}
      </h4>

      <Options
        question={question}
        handleAnswer={handleAnswer}
        answer={answer}
      />
    </div>
  );
};

export default Question;
