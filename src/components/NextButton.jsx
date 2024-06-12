import React from "react";

const NextButton = ({
  handleNextQuestion,
  answer,
  index,
  numQuestions,
  handleFinish,
}) => {
  if (answer === null) return;

  if (index < numQuestions - 1)
    return (
      <button
        onClick={handleNextQuestion}
        class=" float-right group text-2xl md:text-4xl relative inline-flex h-12 text-white py-8 px-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium  transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        onClick={handleFinish}
        class=" float-right group text-2xl md:text-4xl relative inline-flex h-12 text-white py-8 px-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium  transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
      >
        Finish
      </button>
    );
};

export default NextButton;
