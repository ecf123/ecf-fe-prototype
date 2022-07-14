import React from "react";
import "./Button.scss";

const Button = ({ buttonText, isSecondary, onClickButton, buttonType }) => {
  let buttonStyle = "button";

  if (isSecondary) {
    buttonStyle += " button--secondary";
  }
  return (
    <button className={buttonStyle} type={buttonType} onClick={onClickButton} data-testid="button">
      {buttonText}
    </button>
  );
};

export default Button;
