import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";

import QuestionsData from "./data/QuestionsData";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

const initialState = {
  questions: QuestionsData,

  // loading  error   ready   active   finished
  status: "ready",

  //Active Question
  index: 0,

  // Clicked Option
  answer: null,
  points: 0,
  secondsRemaining: null,
};

const App = () => {
  const [
    { questions, status, index, answer, points, secondsRemaining },
    setData,
  ] = useState(initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((a, b) => a + b.points, 0);

  const handleActive = () => {
    setData({
      ...initialState,
      status: "active",
      secondsRemaining: numQuestions * 20,
    });
  };

  const handleAnswer = (i) => {
    // grab the current question
    const question = questions.at(index);
    console.log(question.correctOption);
    console.log(i);
    const newPoints =
      i === question.correctOption ? points + question.points : points;

    setData({
      ...initialState,
      status: "active",
      secondsRemaining: secondsRemaining - 1,
      answer: i,
      index: index,
      points: newPoints,
    });
  };

  const handleNextQuestion = () => {
    setData({
      ...initialState,
      status: "active",
      secondsRemaining: secondsRemaining,
      index: index + 1,
      answer: null,
      points: points,
    });
  };

  const handleFinish = () => {
    setData({ ...initialState, status: "finished", points: points });
  };

  const handleRestart = () => {
    setData({ ...initialState });
  };

  const handleSecondsRemaining = () => {
    setData({
      ...initialState,
      status: secondsRemaining === 0 ? "finished" : "active",
      index: index,
      answer: answer,
      secondsRemaining: secondsRemaining - 1,
      points: points,
    });
  };

  return (
    <div className=" w-full h-[90vh] flex flex-col justify-center items-center">
      <Header />
      <Main>
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            handleActive={handleActive}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              maxPoints={maxPoints}
            />
            <Question
              question={questions[index]}
              handleAnswer={handleAnswer}
              answer={answer}
            />

            <Footer>
              <Timer
                handleSecondsRemaining={handleSecondsRemaining}
                secondsRemaining={secondsRemaining}
              />
              <NextButton
                handleNextQuestion={handleNextQuestion}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
                handleFinish={handleFinish}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            handleRestart={handleRestart}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
