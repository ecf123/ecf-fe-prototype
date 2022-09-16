import React, { useState, useEffect } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import BackButton from "../../components/BackButton/BackButton";
import TrophyStats from "../../components/TrophyStats/TrophyStats";
import Navigation from "../../components/Navigation/Navigation";
import "./LessonOverview.scss";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase";

// path: /:pathwayId/courses/:courseId/lesson/:lessonId

const LessonOverview = ({ userProfile }) => {
  const { pathwayId, courseId, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const navigate = useNavigate();

  const getDocById = async (collectionName, id, setter, handleError) => {
    const docRef = doc(database, collectionName, id);
    const courseDoc = await getDoc(docRef);
    if (courseDoc.exists()) {
      setter(courseDoc.data());
    } else {
      console.log("No such document!");
      handleError();
    }
  };

  useEffect(() => {
    getDocById("lessons", lessonId, setLesson, () => navigate("/"));
  }, [lessonId, navigate]);

  if (!lesson) return <p>Loading</p>;

  const bulletPoints = lesson.bullets.map((sentence, index) => <li key={"lesson-bullet" + index}>{sentence}</li>);

  const contents = lesson.contents.map((content, index) => (
    <div key={"content" + index}>
      <h2 className="contents__header">{content.title}</h2>
      <p className="contents__paragraph">{content.text}</p>
    </div>
  ));
  return (
    <div>
      <div className="lesson">
        <header className="lesson__header" data-testid="topButtons">
          <div className="lesson__back-button">
            <BackButton linkTo={`/${pathwayId}/courses/${courseId}`} isSecondary={false} />
          </div>
          <div className="lesson__trophy">
            <TrophyStats userProfile={userProfile} />
          </div>
        </header>
        <div className="contents">
          <div className="contents__video">
            <VideoCard className="contents__video--temp" videoData={lesson.video} />
          </div>
          <h1 className="contents__title" data-testid="title">
            {lesson.title}
          </h1>
          <h2 className="contents__header">Overview</h2>
          <div className="contents__paragraph">
            <ul>{bulletPoints}</ul>
          </div>
          {contents}
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default LessonOverview;
