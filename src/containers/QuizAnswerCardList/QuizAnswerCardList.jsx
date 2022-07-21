import React from "react";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";
import "./QuizAnswerCardList.scss";

const QuizAnswerCardList = ({ quizData, index, increaseScore }) => {
  const JSX = quizData[index].answers.map((item, i) => {
    return (
      <QuizAnswerCard
        key={i}
        quizId={i + 1}
        choice={item.choice}
        answer={item.answer}
        index={index}
        increaseScore={increaseScore}
      />
    );
  });

  return <div className="answer-list">{JSX}</div>;
};

export default QuizAnswerCardList;
