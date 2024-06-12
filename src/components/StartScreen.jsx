import React from "react";

const StartScreen = ({ numQuestions, handleActive }) => {
  return (
    <div className=" flex flex-col items-center">
      <h2 className=" text-3xl sm:text-5xl md:text-6xl mb-8">
        Welcome to the React Quiz!
      </h2>
      <h3 className=" text-3xl sm:text-4xl mb-16 font-semibold">
        {numQuestions} question to test your React mastery
      </h3>
      <button
        onClick={handleActive}
        class="group text-2xl md:text-4xl relative inline-flex h-12 text-white py-8 px-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent font-medium  transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
      >
        Let's start
      </button>
      {/* <button
        onClick={handleActive}
        className=" block text-2xl md:text-4xl border-2 border-[#495057] bg-[#495057] py-5 px-10 cursor-pointer rounded-[100px] transition-[0.3s] float-right"
      >
        Let's start
      </button> */}
    </div>
  );
};

export default StartScreen;
