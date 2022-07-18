import React from "react";
import "./QuizAnswerCard.scss";

const QuizAnswerCard = ({ quizData }) => {
  return (
    <div className="quiz">
      <h1 className="quiz__question">{quizData[0].A.choice}</h1>
      <p className="quiz__answer">{quizData[0].A.answer}</p>
    </div>
  );
};

export default QuizAnswerCard;
