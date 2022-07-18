import React from "react";
import "./QuizAnswerCard.scss";

const QuizAnswerCard = ({ answer, choice }) => {
  return (
    <div className="quiz">
      <h1 className="quiz__question">{choice}</h1>
      <p className="quiz__answer">{answer}</p>
    </div>
  );
};

export default QuizAnswerCard;
