import React, {useState} from "react";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import "./CourseOverview.scss";
import MenuBar from "../../components/MenuBar/MenuBar";
import BackButton from "../../components/BackButton/BackButton";
// path: /courses/:courseId

const CourseOverview = ({dummyPathwayData}) => {
  const [category, setCategory] = useState("lessons");

  const capitalisedNames = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.innerText.toLowerCase());
  };

  return (
    <div data-testid="course-overview" className="course-overview">
      <div className="course-overview__headerSection">
        <BackButton linkTo="/pathways/1/skills-tree" />
        <h1 className="course-overview__heading">{dummyPathwayData[0].header}</h1>
      </div>

      <div className="course-overview__content">
        <div className="course-overview__filters">
          <MenuBar data-testid="course-overview" link1="Lessons" link2="Challenges" link3="Additional Info" onClickLink={handleCategoryChange} />
        </div>

        <div data-testid="course-overview-list" className="course-overview__list">
          <CourseOverviewList title={capitalisedNames(category)} category={category} />
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
