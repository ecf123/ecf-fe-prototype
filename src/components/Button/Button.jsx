import React from "react";
import "./Button.scss";

const Button = ({ buttonText, isSecondary, onClickButton, buttonType }) => {
  let buttonStyle = "button";

  if (isSecondary) {
    buttonStyle += " button__secondary";
  }
  return (
    <button className={buttonStyle} type={buttonType} onClick={onClickButton}>
      {buttonText}
    </button>
  );
};

export default Button;
