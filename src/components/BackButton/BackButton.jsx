import React from "react";
import "./BackButton.scss";
import { Link } from "react-router-dom";
import BackButtonArrow from "../../assets/images/back-arrow.svg";
import whiteArrow from "../..//assets/images/white-arrow.svg";

const BackButton = (props) => {
  // When routing is implemented, the button can be changed to a link component and the linkTo prop can be used to define which page the button will link to
  const { linkTo, isSecondary } = props;
  let buttonStyle = "back-button";

  if (isSecondary) {
    buttonStyle += " back-button--secondary";
  }
  return (
    <Link to={linkTo}>
      <button className={buttonStyle}>
        {isSecondary ? (
          <img src={whiteArrow} alt="back arrow" />
        ) : (
          <img src={BackButtonArrow} alt="back arrow" />
        )}
      </button>
    </Link>
  );
};

export default BackButton;
