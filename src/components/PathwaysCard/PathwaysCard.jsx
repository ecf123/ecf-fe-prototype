import {React} from "react";

import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./PathwaysCard.scss";

const PathwaysCard = ({card, percentage}) => {
  const {header, topics, image} = card;
  return (
    <>
      <div className="card" data-testid="pathwaycard">
        <div className="card__progress" data-testid="circularprogressbar">
          <CircularProgressbar
            className="card__progress-bar"
            value={percentage}
            text={`${percentage}%`}
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
          <img className="card__content-image" src={image} alt={header} />
          <h1 className="card__content-header">{header}</h1>
          <h2 className="card__content-topics">{topics}</h2>
        </div>
      </div>
    </>
  );
};
export default PathwaysCard;