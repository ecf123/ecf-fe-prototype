import React, { useState } from "react";
import "./QuizAnswerCard.scss";

const QuizAnswerCard = ({ answer, choice, quizId, onClickCheckAnswer }) => {
  const [cardClass, setCardClass] = useState("quiz");
  return (
    <div className={cardClass} onClick={(e) => onClickCheckAnswer(quizId, e)}>
      <h1 className="quiz__question">{choice}</h1>
      <p className="quiz__answer">{answer}</p>
    </div>
  );
};

export default QuizAnswerCard;
