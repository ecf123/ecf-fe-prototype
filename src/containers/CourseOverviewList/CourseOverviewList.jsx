import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";
import lessonData from "../../assets/data/dummyLessonData";
import challengeData from "../../assets/data/dummyChallengeData";
import PlayIcon from "../../assets/images/business-icon.svg";
import Assignment from "../../assets/images/library-icon.svg";
import Redo from "../../assets/images/redo.svg";
import "./CourseOverviewList.scss";

const CourseOverviewList = ({ title, category }) => {
  const challengeJSX = challengeData.map((item, index) => {
    return (
      <CourseOverviewListItem
        image={Redo}
        key={index}
        title={item.title}
        duration={item.duration}
      />
    );
  });

  const lessonJSX = lessonData.map((item, index) => {
    return (
      <CourseOverviewListItem
        image={Redo}
        key={index}
        title={item.title}
        duration={item.duration}
      />
    );
  });

  return (
    <div>
      CourseOverviewList
      <h1 className="list-container__title">{title}</h1>
      <div>{lessonJSX}</div>
      <img src={PlayIcon} alt="" />
      <img src={Assignment} alt="" />
    </div>
  );
};

export default CourseOverviewList;
