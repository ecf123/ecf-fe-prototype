import React, { useState } from "react";
import ClockIcon from "../../assets/images/clock-icon.svg";
import "./CourseOverviewListItem.scss";
import Redo from "../../assets/images/redo.svg";
import { Link } from "react-router-dom";

const CourseOverviewListItem = ({ image, title, duration, id, category }) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(true);
  };

  const setImage = () => {
    if (completed === true) {
      return Redo;
    } else {
      return image;
    }
  };

  const setPath = () => {
    if (category === "lesson") {
      return "/lesson/"+id;
    } else if (category === "challenge") {
      return "/challenge/"+id;
    } else if (category === "additional") {
      return "/";
    }
  };

  return (
    <Link
      data-testid="course-list-item"
      to={setPath()}
      style={{ textDecoration: "none" }}
    >
      <div id={id} className="list-item" onClick={handleClick}>
        <div className="list-item__icon-container">
          <img className="list-item__icon" src={setImage()} alt="" />
        </div>
        <div className="list-item__content">
          <h1 data-testid="course-list-title" className="list-item__title">
            {title}
          </h1>
          <div data-testid="course-list-duration" className="list-item__duration">
            <img className="list-item__duration--icon" src={ClockIcon} alt="" />
            <h2 className="list-item__duration--heading">{duration}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseOverviewListItem;
