import React, { useState } from 'react';
import CourseOverviewList from '../CourseOverviewList/CourseOverviewList';
import './CourseOverview.scss';
import MenuBar from '../../components/MenuBar/MenuBar';
import BackButton from '../../components/BackButton/BackButton';
import Navigation from '../../components/Navigation/Navigation';
import { useParams } from "react-router-dom";

// path: /courses/:courseId

const CourseOverview = ({ pathwayData }) => { 
  const [category, setCategory] = useState("lessons");

  const { courseId } = useParams();
  console.log(pathwayData);
  const pickedPathway = pathwayData.find(
    ({ id }) => id === parseInt(courseId)
  );

  const capitalisedNames = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.innerText.toLowerCase());
  };


  return (
    <div data-testid="course-overview" className="course-overview">
      <div className="course-overview__headerSection">
        <BackButton data-testid="back-button" linkTo="/pathways/1/skills-tree" />
        <h1 data-testid="course-overview-heading" className="course-overview__heading">
          {pickedPathway.header}
        </h1>
      </div>
      <div className="course-overview__content">
        <img
          data-testid="overview-image"
          className="course-overview__image"
          src={pathwayData[courseId].image}
          alt=""
        />
        <h2 className="course-overview__sub-heading" data-testid="sub-heading">
          {pickedPathway.subHeading}
        </h2>
        <p className="course-overview__paragraph" data-testid="paragraph-text">
          {pickedPathway.courseIntroContent}
        </p>
        <div className="course-overview__filters">
          <MenuBar
            data-testid="course-overview"
            link1="Lessons"
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
      <Navigation />
    </div>
  );
};

export default CourseOverview;
