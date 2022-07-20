import React from "react";
import quiz from "../../assets/data/dummyQuizData";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";
import "./QuizAnswerCardList.scss";

const QuizAnswerCardList = ({ quizData, index }) => {
  const onClickCheckAnswer = (quizId, e) => {
    if (quizId.toString() === quiz[index].correctAnswer.toString()) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  const JSX = quizData[index].answers.map((item, i) => {
    return (
      <QuizAnswerCard
        key={i}
        quizId={i + 1}
        choice={item.choice}
        answer={item.answer}
        onClickCheckAnswer={onClickCheckAnswer}
      />
    );
  });

  return <div className="answer-list">{JSX}</div>;
};

export default QuizAnswerCardList;
