import React from "react";
import "./PathwaysCard.scss";
import image from "../../assets/images/financial-forest.svg";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const PathwaysCard = ({card}) => {
  const {header, topics, percentage} = card;

  return (
    <div className="card">
      <div className="card__progress">
        <CircularProgressbar className="card__progress--bar" value={percentage} text={percentage} />
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
