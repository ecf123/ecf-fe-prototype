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
  const [isDisabled, setDisabled] = useState(true);
  const [userScore, setUserScore] = useState(0);
  const [userPercentage, setUserPercentage] = useState(0);
  const [toggleClear, setToggleClear] = useState(true);

  const increaseScore = () => {
    setUserScore(userScore + 1);
  };

  const calculatePercentage = () => {
    const total = Math.floor((userScore / quiz.length) * 100);
    setUserPercentage(total);
  };

  const onClickCard = () => {
    setToggleClear(false);
  };

  const onClickIncrease = () => {
    setToggleClear(true);
    if (index === 0) {
      setDisabled(false);
    }

    if (index === quiz.length - 1) {
      setIndex(quiz.length - 1);
      calculatePercentage();
    } else {
      setIndex(index + 1);
    }
  };

  const onClickDecrease = () => {
    if (index === 0) {
      setIndex(0);
    } else if (index === 1) {
      setDisabled(true);
      setIndex(index - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div data-testid="challenge">
      <header className="challenge__header">
        <div className="challenge__backButton">
          <BackButton linkTo="linkTo" />
        </div>
        <div data-testid="trophy" className="challenge__trophy">
          <TrophyStats userProfile={userProfile} />
        </div>
      </header>
      <div
        data-testid="question-container"
        className="challenge__question-container"
      >
        <h1 className="challenge__question-number">
          Q{index + 1}/{quiz.length}
        </h1>
        <h2 className="challenge__question-text">{quiz[index].question}</h2>
        <QuizAnswerCardList
          quizData={quiz}
          index={index}
          increaseScore={increaseScore}
          toggleClear={toggleClear}
          onClickCard={onClickCard}
        />
      </div>
      <div className="challenge__button-container">
        <button
          className={"challenge__back-button" + (isDisabled ? " disabled" : "")}
          onClick={onClickDecrease}
          disabled={isDisabled}
        >
          <img src={backArrow} alt="back arrow" />
        </button>
        <button className="challenge__forward-button" onClick={onClickIncrease}>
          <img src={forwardArrow} alt="forward-arrow" />
        </button>
      </div>
      <Navigation />
    </div>
  );
};

export default Challenge;
