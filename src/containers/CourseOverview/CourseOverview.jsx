import React, { useState } from "react";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import "./CourseOverview.scss";
import MenuBar from "../../components/MenuBar/MenuBar";

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
      <div className="course-overview__content">
        <div
          className="course-overview__filters"
          onClick={handleCategoryChange}
        >
          <MenuBar
            link1="Lesson"
            link2="Challenges"
            link3="Additional Info"
            onClickLink={handleCategoryChange}
          />
        </div>

        <div
          data-testid="course-overview-list"
          className="course-overview__list"
        >
          <CourseOverviewList
            title={capitalisedNames(category)}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
