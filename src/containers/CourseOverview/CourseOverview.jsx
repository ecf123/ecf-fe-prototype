import React, { useState } from "react";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import "./CourseOverview.scss";

// path: /courses/:courseId

const CourseOverview = () => {
  const [category, setCategory] = useState("lesson");

  const capitalisedNames = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const handleCategoryChange = () => {
    if (category === "lesson") {
      setCategory("challenge");
    } else {
      setCategory("lesson");
    }
  };

  return (
    <div className="course-overview">
      <div className="course-overview__filters" onClick={handleCategoryChange}>
        Dummy filter section. Click here to switch to challenges.
      </div>
      <div data-testid="course-overview-list" className="course-overview__list">
        <CourseOverviewList
          title={capitalisedNames(category)}
          category={category}
        />
      </div>
    </div>
  );
};

export default CourseOverview;
