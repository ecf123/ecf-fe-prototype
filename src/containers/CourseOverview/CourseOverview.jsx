import React, { useState, useEffect } from "react";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import "./CourseOverview.scss";
import MenuBar from "../../components/MenuBar/MenuBar";
import BackButton from "../../components/BackButton/BackButton";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase";

// path: /:pathwayId/courses/:courseId

const CourseOverview = () => {
  const { courseId, pathwayId } = useParams();
  const [category, setCategory] = useState("lessons");
  const [course, setCourse] = useState(null);

  const getDocById = async (collectionName, id, setter) => {
    const docRef = doc(database, collectionName, id);
    const courseDoc = await getDoc(docRef);
    if (courseDoc.exists()) {
      setter(courseDoc.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getDocById("courses", courseId, setCourse);
  }, [courseId]);

  // LOADING
  if (!course) return <p></p>;

  const capitalisedNames = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const handleCategoryChange = event => {
    setCategory(event.target.innerText.toLowerCase());
  };
  const previousURL = `/${pathwayId}/courses/${courseId}`;
  return (
    <div data-testid="course-overview" className="course-overview">
      <div className="course-overview__headerSection">
        <BackButton data-testid="back-button" linkTo={`/pathways/${pathwayId}/skills-tree`} />
        <h1 data-testid="course-overview-heading" className="course-overview__heading">
          {course.title}
        </h1>
      </div>
      <div className="course-overview__content">
        <img data-testid="overview-image" className="course-overview__image" src={course.image} alt="" />
        <h2 className="course-overview__sub-heading" data-testid="sub-heading">
          {course.title}
        </h2>
        <p className="course-overview__paragraph" data-testid="paragraph-text">
          {course.description}
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

        <div data-testid="course-overview-list" className="course-overview__list">
          <CourseOverviewList
            previousURL={previousURL}
            title={capitalisedNames(category)}
            category={category}
            lessons={course.lessons}
            challenges={course.challenges}
          />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default CourseOverview;
