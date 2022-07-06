import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";
import lessonData from "../../assets/data/dummyLessonData";
import challengeData from "../../assets/data/dummyChallengeData";
import PlayIcon from "../../assets/images/play-icon.svg";
import Assignment from "../../assets/images/library-icon.svg";
import "./CourseOverviewList.scss";

const CourseOverviewList = ({ title, category }) => {
  const challengeJSX = challengeData.map((item, index) => {
    let imageSrc = "";
    if (item.type === "video") {
      imageSrc = PlayIcon;
    } else {
      imageSrc = Assignment;
    }
    return (
      <CourseOverviewListItem
        image={imageSrc}
        id={index}
        key={index}
        title={item.title}
        duration={item.duration}
        category={category}
      />
    );
  });

  const lessonJSX = lessonData.map((item, index) => {
    let imageSrc = "";
    if (item.type === "video") {
      imageSrc = PlayIcon;
    } else {
      imageSrc = Assignment;
    }
    return (
      <CourseOverviewListItem
        data-testid="course-list-items"
        image={imageSrc}
        id={index}
        key={index}
        title={item.title}
        duration={item.duration}
        category={category}
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
  };

  return (
    <div>
      <h1 data-testid="course-list-heading" className="list-container__title">{title}</h1>
      <div data-testid="course-list-items">{displayJSX()}</div>
    </div>
  );
};

export default CourseOverviewList;
