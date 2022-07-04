import React from "react";
import ClockIcon from "../../assets/images/clock-icon.svg";

const CourseOverviewListItem = ({ image, title, duration }) => {
  return (
    <div className="list-item">
      <img className="list-item__icon" src={image} alt="" />
      <h1 className="list-item__title">{title}</h1>
      <div className="list-item__duration">
        <img className="list-item__duration--icon" src={ClockIcon} alt="" />
        <h2 className="list-item__duration--heading">{duration} minutes</h2>
      </div>
    </div>
  );
};

export default CourseOverviewListItem;
