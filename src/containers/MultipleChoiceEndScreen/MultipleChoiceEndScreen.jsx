import React from "react";
import "./MultipleChoiceEndScreen.scss";
import podium from "../../assets/images/podium.svg";
import line from "../../assets/images/line.svg";
import Button from "../../components/Button/Button";
import retakeIcon from "../../assets/images/retake.svg";
import { Link } from "react-router-dom";

//challenge/multiple-choice-end-screen

const MultipleChoiceEndScreen = ({ score, quizLink, courseOverviewLink }) => {
  return (
    <div className="end-screen">
      <h1 className="end-screen__title">Multiple Choice Quiz</h1>
      <div>
        <img
          className="end-screen__podium"
          src={podium}
          alt="Congratulations"
        />
        <img className="end-screen__underline" src={line} alt="underline" />
      </div>
      <h2 className="end-screen__message">
        Congratulations!! You passed with a score of {score}
      </h2>
      <div className="end-screen__button">
        {/* <Link to={quizLink}> */}
          <button className="end-screen__button--retake">
            <img
              src={retakeIcon}
              alt="re-take"
              className="end-screen__retake-icon"
            />
            RE-TAKE
          </button>
        {/* </Link> */}
        {/* <Link to={courseOverviewLink}> */}
          <Button isSecondary={true} buttonText="CONTINUE" />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default MultipleChoiceEndScreen;
