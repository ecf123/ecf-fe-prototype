import React from "react";
import QuizAnswerCard from "../../components/QuizAnswerCard/QuizAnswerCard";
import "./QuizAnswerCardList.scss";

const QuizAnswerCardList = ({
  quizData,
  index,
  increaseScore,
  toggleClear,
  setToggleClear,
}) => {
  const JSX = quizData[index].answers.map((item, i) => {
    return (
      <QuizAnswerCard
        key={i}
        quizId={i + 1}
        choice={item.choice}
        answer={item.answer}
        index={index}
        increaseScore={increaseScore}
        toggleClear={toggleClear}
        setToggleClear={setToggleClear}
      />
    );
  });

  return <div className="answer-list">{JSX}</div>;
};

export default QuizAnswerCardList;
