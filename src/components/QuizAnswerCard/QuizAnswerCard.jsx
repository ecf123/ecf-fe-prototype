import React from "react";
import "./QuizAnswerCard.scss";

const QuizAnswerCard = ({ quizData }) => {
  return (
    <div>
      <h1>{quizData[0].A.choice}</h1>
      <p>{quizData[0].A.answer}</p>
    </div>
  );
};

export default QuizAnswerCard;
