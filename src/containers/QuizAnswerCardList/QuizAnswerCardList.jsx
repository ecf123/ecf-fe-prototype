import React from "react";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";

const QuizAnswerCardList = ({ quizData }) => {
  const JSX = quizData[0].answers.map((item, index) => {
    return (
      <QuizAnswerCard key={index} choice={item.choice} answer={item.answer} />
    );
  });

  return <div>{JSX}</div>;
};

export default QuizAnswerCardList;
