import { React, useState } from "react";
import "./Challenge.scss";
import quiz from "../../assets/data/dummyQuizData";
import QuizAnswerCardList from "../QuizAnswerCardList/QuizAnswerCardList";
import Navigation from "../../components/Navigation/Navigation";
import BackButton from "../../components/BackButton/BackButton";
import TrophyStats from "../../components/TrophyStats/TrophyStats";
import userProfile from "../../assets/data/dummyUserData";
import backArrow from "../../assets/images/back-arrow.svg";
import forwardArrow from "../../assets/images/forward-arrow.svg";

// path: /challenge/:challengeId

const Challenge = () => {
  const [index, setIndex] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  const onClickIncrease = () => {
    if (index === quiz.length) {
      setIndex(quiz.length);
    } else {
      setIndex(index + 1);
    }
  };

  const onClickDecrease = () => {
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <header className="challenge__header">
        <div className="challenge__backButton">
          <BackButton linkTo="linkTo" />
        </div>
        <div className="challenge__trophy">
          <TrophyStats userProfile={userProfile} />
        </div>
      </header>
      <div className="challenge__question-container">
        <h1 className="challenge__question-number">
          Q{index + 1}/{quiz.length}
        </h1>
        <h2 className="challenge__question-text">{quiz[index].question}</h2>
        <QuizAnswerCardList quizData={quiz} index={index} />
      </div>
      <div className="challenge__button-container">
        <button
          className="challenge__back-button"
          onClick={onClickDecrease}
          disabled={isDisabled}
        >
          <img src={backArrow} alt="" />
        </button>
        <button className="challenge__forward-button" onClick={onClickIncrease}>
          <img src={forwardArrow} alt="" />
        </button>
      </div>
      <Navigation />
    </div>
  );
};

export default Challenge;
