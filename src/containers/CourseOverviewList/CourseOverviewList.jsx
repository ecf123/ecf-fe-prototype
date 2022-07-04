import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";
//import PlayIcon from "../"
import Redo from "../../assets/images/redo.svg";
import "./CourseOverviewList.scss";

const CourseOverviewList = ({ title }) => {
  return (
    <div>
      CourseOverviewList
      <h1 className="list-container__title">{title}</h1>
      <div>
        <CourseOverviewListItem
          image={Redo}
          title="The Role of Banking in The Financial System"
          duration="10"
        />
        <CourseOverviewListItem />
        <CourseOverviewListItem />
        <CourseOverviewListItem />
        <CourseOverviewListItem />
      </div>
    </div>
  );
};

export default CourseOverviewList;
