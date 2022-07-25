import React from "react";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";
import "./QuizAnswerCardList.scss";

const QuizAnswerCardList = ({ quizData, index, handleAnswerSelect }) => {
  const question = quizData[index];

  const JSX = question.answers.map((answer, i) => (
    <QuizAnswerCard
      key={i}
      answer={answer.answer}
      choice={answer.choice}
      correctAnswer={question.correctAnswer}
      index={index}
      hasGuessed={question.hasGuessed}
      handleAnswerSelect={handleAnswerSelect}
    />
  ));

  return (
    <div data-testid="answer-list" className="answer-list">
      {JSX}
    </div>
  );
};

export default QuizAnswerCardList;
