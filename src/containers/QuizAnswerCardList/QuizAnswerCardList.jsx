import React from "react";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";

const QuizAnswerCardList = ({ quizData }) => {
  return (
    <div>
      <QuizAnswerCard quizData={quizData} />
    </div>
  );
};

export default QuizAnswerCardList;
