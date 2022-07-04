import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";
//import PlayIcon from "../"
import Redo from "../../assets/images/redo.svg";

const CourseOverviewList = ({ title }) => {
  return (
    <div>
      CourseOverviewList
      <h1>{title}</h1>
      <div>
        <CourseOverviewListItem image={Redo} title="dummy text" duration="10" />
        <CourseOverviewListItem />
        <CourseOverviewListItem />
        <CourseOverviewListItem />
        <CourseOverviewListItem />
      </div>
    </div>
  );
};

export default CourseOverviewList;
