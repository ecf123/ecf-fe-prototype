import { React } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "./PathwaysCard.scss";

const PathwaysCard = ({ header, topics, image, percentage, id }) => {
  return (
    <>
      <Link to={"/pathways/" + id}>
        <div id={id} className="card" data-testid="pathwaycard">
          <div className="card__progress" data-testid="circularprogressbar">
            <CircularProgressbar
              className="card__progress-bar"
              value={percentage}
              text={percentage === 0 ? "0" : `${percentage}%`}
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
            <div className="card__content-img-div">
              <img className="card__content-image" src={image} alt={header} />
            </div>

            <h1 className="card__content-header">{header}</h1>
            <h2 className="card__content-topics">{topics}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};
export default PathwaysCard;
