import React, { useEffect } from "react";

const Timer = ({ handleSecondsRemaining, secondsRemaining }) => {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      handleSecondsRemaining();
    }, 1000);

    return () => clearInterval(id);
  }, [handleSecondsRemaining]);
  return (
    <div className="timer text-[15px] md:text-3xl px-[1.8rem] md:px-11 py-[1rem] md:py-5">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
