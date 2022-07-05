import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";
import lessonData from "../../assets/data/dummyLessonData";
import challengeData from "../../assets/data/dummyChallengeData";
//import PlayIcon from "../"
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

  const displayJSX = () => {
    if (category === "lesson") {
        return lessonJSX;
    } else if (category === "challenge") {
      return challengeJSX;
    } else if (category === "additional") {
      // This is to be replaced once the format for additional information is know.
      return null;
    }
  }

  return (
    <div>
      <h1 className="list-container__title">{title}</h1>
      <div>
        {displayJSX()}
      </div>
    </div>
  );
};

export default CourseOverviewList;
