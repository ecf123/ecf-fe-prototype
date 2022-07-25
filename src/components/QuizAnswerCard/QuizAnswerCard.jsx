import React from "react";
import "./QuizAnswerCard.scss";

const QuizAnswerCard = ({ answer, choice, correctAnswer, handleAnswerSelect, hasGuessed, index }) => {
    
  const cardClass = correctAnswer === choice && hasGuessed ? "correct" : "incorrect";

  return (
    <div
      data-testid="answer-card"
      className={hasGuessed ? "quiz " + cardClass : "quiz"}
      onClick={() => handleAnswerSelect(index, choice, hasGuessed)}
    >
      <h1 data-testid="heading" className="quiz__question">
        {choice}
      </h1>
      <p data-testid="paragraph" className="quiz__answer">
        {answer}
      </p>
    </div>
  );
};

export default QuizAnswerCard;
