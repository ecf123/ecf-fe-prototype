import React, { useState } from "react";
import "./QuizAnswerCard.scss";
import quiz from "../../assets/data/dummyQuizData";

const QuizAnswerCard = ({
  answer,
  choice,
  quizId,
  index,
  toggleClear,
  increaseScore,
  onClickCheckAnswer,
}) => {
  //const [cardClass, setCardClass] = useState("quiz");

  // const onClickCheckAnswer = (quizId, e) => {
  //   if (quizId.toString() === quiz[index].correctAnswer.toString()) {
  //     console.log(true);
  //     setCardClass("quiz correct");
  //     increaseScore();
  //   } else {
  //     console.log(false);
  //     setCardClass("quiz incorrect");
  //   }
  // };

  return (
    <div
      className="quiz correct"
      onClick={(e) => onClickCheckAnswer(quizId, e)}
    >
      <h1 className="quiz__question">{choice}</h1>
      <p className="quiz__answer">{answer}</p>
    </div>
  );
};

export default QuizAnswerCard;
