import React from "react";
import "./QuizAnswerCard.scss";

const QuizAnswerCard = ({ answer, choice, id, onClickCheckAnswer }) => {
  return (
    <div className="quiz" id={id} onClick={onClickCheckAnswer}>
      <h1 className="quiz__question">{choice}</h1>
      <p className="quiz__answer">{answer}</p>
    </div>
  );
};

export default QuizAnswerCard;
