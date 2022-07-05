import React from "react";
import ClockIcon from "../../assets/images/clock-icon.svg";
import "./CourseOverviewListItem.scss";

const CourseOverviewListItem = ({ image, title, duration }) => {
  return (
    <div className="list-item">
      <div className="list-item__icon-container">
        <img className="list-item__icon" src={image} alt="" />
      </div>
      <div className="list-item__content">
        <h1 className="list-item__title">{title}</h1>
        <div className="list-item__duration">
          <img className="list-item__duration--icon" src={ClockIcon} alt="" />
          <h2 className="list-item__duration--heading">{duration}</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewListItem;
