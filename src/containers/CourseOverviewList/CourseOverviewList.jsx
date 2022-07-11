import React from "react";
import CourseOverviewListItem from "../../components/CourseOverviewListItem/CourseOverviewListItem";
import lessonData from "../../assets/data/dummyLessonData";
import challengeData from "../../assets/data/dummyChallengeData";

import "./CourseOverviewList.scss";

const CourseOverviewList = ({ category }) => {
  const challengeJSX = challengeData.map((item, index) => {
    return (
      <CourseOverviewListItem
        id={index}
        key={index}
        title={item.title}
        duration={item.duration}
        category={category}
        type={item.type}
      />
    );
  });

  const lessonJSX = lessonData.map((item, index) => {
    return (
      <CourseOverviewListItem
        data-testid="course-list-items"
        id={index}
        key={index}
        title={item.title}
        duration={item.duration}
        category={category}
        type={item.type}
      />
    );
  });

  const displayJSX = () => {
    if (category === "Lessons") {
      return lessonJSX;
    } else if (category === "Challenges") {
      return challengeJSX;
    } else if (category === "Additional Info") {
      // This is to be replaced once the format for additional information is known.
      return null;
    }
  };

  return (
    <div>
      <h1 data-testid="course-list-heading" className="list-container__title">
        {category}
      </h1>
      <div data-testid="course-list-items">{displayJSX()}</div>
    </div>
  );
};

export default CourseOverviewList;
