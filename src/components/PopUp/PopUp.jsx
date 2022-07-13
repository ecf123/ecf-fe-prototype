import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./PopUp.scss";

const PopUp = (props) => {
  const { title, description, link, onOverlayClick } = props;
  return (
    <>
      <div className="pop-up" data-testid="popup">
        <h1 className="pop-up__heading">{title}</h1>
        <p className="pop-up__text">{description}</p>
        <div className="pop-up__button-container">
          <Link to={link}>
            <Button buttonText="Start Course" buttonType="submit" />
          </Link>
        </div>
      </div>
      <div
        onClick={onOverlayClick}
        className="pop-up__overlay"
        data-testid="popup-overlay"
      ></div>
    </>
  );
};

export default PopUp;
