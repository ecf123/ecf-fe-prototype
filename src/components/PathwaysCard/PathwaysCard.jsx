import {React, useState} from "react";
import {NavLink} from "react-router-dom";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./PathwaysCard.scss";
import image from "../../assets/images/financial-forest.svg";

const PathwaysCard = ({card, percentage}) => {
  const {header, topics} = card;

  return (
    <div className="card" data-testid="1">
      <div className="card__progress" data-testid="2">
        <CircularProgressbar
          className="card__progress-bar"
          value={percentage}
          text={percentage}
          strokeWidth={10}
          styles={buildStyles({
            textColor: "#3b5165",
            pathColor: "#b4ddc0",
            trailColor: "#e9e9e9",
            textSize: "22px",
          })}
        />
      </div>
      <div className="card__content">
        <img className="card__content-image" src={image} alt="" />
        <h1 className="card__content-header">{header}</h1>
        <h2 className="card__content-topics">{topics}</h2>
      </div>
    </div>
  );
};
export default PathwaysCard;
