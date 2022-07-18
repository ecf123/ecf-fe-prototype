import React from "react";
import "./Challenge.scss";
import quiz from "../../assets/data/dummyQuizData";
import QuizAnswerCardList from "../QuizAnswerCardList/QuizAnswerCardList";

// path: /challenge/:challengeId

const Challenge = () => {
  return (
    <div>
      <QuizAnswerCardList quizData={quiz} />
    </div>
  );
};

export default Challenge;
