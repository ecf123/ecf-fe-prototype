import React from "react";
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
      <h1>Q1/15</h1>
      <h2>{quiz[0].question}</h2>
      <QuizAnswerCardList quizData={quiz} />
      <button>
        <img src={backArrow} alt="" />
      </button>
      <button>
        <img src={forwardArrow} alt="" />
      </button>
      <Navigation />
    </div>
  );
};

export default Challenge;
