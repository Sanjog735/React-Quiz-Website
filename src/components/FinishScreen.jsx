import React from "react";

const FinishScreen = ({ points, maxPoints, handleRestart }) => {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "😎";
  if (percentage >= 80 && percentage < 100) emoji = "🙁";
  if (percentage < 80) emoji = "😪";

  return (
    <div className="flex flex-col px-10 md:px-0 items-center justify-center">
      <p className=" result w-[80%]  md:w-full text-2xl md:text-4xl ">
        {emoji}
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        onClick={handleRestart}
        class=" float-right group text-2xl md:text-4xl relative inline-flex h-12 text-white py-8 px-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium  transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
      >
        Restart quiz
      </button>
    </div>
  );
};

export default FinishScreen;
