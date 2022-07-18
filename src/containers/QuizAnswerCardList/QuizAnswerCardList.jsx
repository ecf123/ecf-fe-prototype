import React from "react";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";
import "./QuizAnswerCardList.scss";

const QuizAnswerCardList = ({ quizData }) => {
  const JSX = quizData[0].answers.map((item, index) => {
    return (
      <QuizAnswerCard key={index} choice={item.choice} answer={item.answer} />
    );
  });

  return <div className="answer-list">{JSX}</div>;
};

export default QuizAnswerCardList;
