import React, { useState } from "react";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";

const CourseOverview = () => {
  const [category, setCategory] = useState("lesson");
  return (
    <div>
      CourseOverview
      <CourseOverviewList title="Lesson" category={category} />
    </div>
  );
};

export default CourseOverview;
