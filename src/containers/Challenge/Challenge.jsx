import { React, useState } from "react";
import "./Challenge.scss";
import quizData from "../../assets/data/dummyQuizData";
import QuizAnswerCardList from "../QuizAnswerCardList/QuizAnswerCardList";
import Navigation from "../../components/Navigation/Navigation";
import BackButton from "../../components/BackButton/BackButton";
import TrophyStats from "../../components/TrophyStats/TrophyStats";
import userProfile from "../../assets/data/dummyUserData";
import backArrow from "../../assets/images/back-arrow.svg";
import forwardArrow from "../../assets/images/forward-arrow.svg";

// path: /challenge/:challengeId

const Challenge = () => {
  const [quiz, setQuiz] = useState(quizData);
  const [index, setIndex] = useState(0);

  const [isDisabled, setDisabled] = useState(true);
  const [userPercentage, setUserPercentage] = useState(0);

  const calculatePercentage = () => {
    let counter = 0;
    for (let index = 0; index < quiz.length; index++) {
      if (quiz[index].correctGuess) {
        counter++;
      }
    }
    const total = Math.floor((counter / quiz.length) * 100);
    setUserPercentage(total);
  };

  const onClickIncrease = () => {
    if (index === 0) {
      setDisabled(false);
    }
    if (index === quiz.length - 1) {
      calculatePercentage();
      setIndex(quiz.length - 1);
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

  const handleAnswerSelect = (index, choice, hasGuessed) => {
    if (hasGuessed) return;

    const quizStateCopy = quiz.map((question, i) => {
      const questionCopy = { ...question };

      if (i === index) {
        questionCopy.hasGuessed = true;
        questionCopy.correctGuess = choice === quiz[index].correctAnswer;
      }

      questionCopy.answers = question.answers.map((answer) => ({ ...answer }));

      return questionCopy;
    });

    setQuiz(quizStateCopy);
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
          handleAnswerSelect={handleAnswerSelect}
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
