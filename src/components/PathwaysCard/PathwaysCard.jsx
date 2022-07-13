import { React } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./PathwaysCard.scss";
import { useNavigate } from 'react-router-dom';

const PathwaysCard = ({ header, topics, image, percentage, id, cardUrl }) => {
  const navigate = useNavigate();

  // const redirect = (url) => {
  //   console.log("attempt");
  //   console.log(url);

    // navigate(url, true);
  // }

  return (
    <>
      <div id={id} className="card" data-testid="pathwaycard" onClick={()=>navigate(cardUrl)}>
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
    </>
  );
};
export default PathwaysCard;