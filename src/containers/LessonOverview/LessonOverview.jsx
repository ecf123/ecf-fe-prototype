import React from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import data from "../../assets/data/dummyLessonOverview.js"

import "./LessonOverview.scss";

// path: /lesson/:lessonId

const lessonData = data[0];

const bulletPoints = lessonData.bullets.split("*").map(sentence => <li>{sentence}</li>);

const LessonOverview = ({userProfile}) => {
  return (
    <div className="lesson">
      <header className="lesson__header">
        <div className="lesson__back-button" >
          <BackButton linkTo="/courses/0" isSecondary={false} />
        </div>
        <div className="lesson__trophy">
          <TrophyStats userProfile={userProfile}/>
        </div>
      </header>
      <div className="contents">
        <div className="contents__video">
          <VideoCard className="contents__video--temp" videoData={lessonData.video} />
        </div>
        <h1 className="contents__title">{lessonData.title}</h1>
        <h2 className="contents__header">Overview</h2>
        <p className="contents__paragraph">
          {bulletPoints}
        </p>
        <h2 className="contents__header">{lessonData.headingOne}</h2>
        <p className="contents__paragraph">{lessonData.paragraphOne}</p>
        <h2 className="contents__header">{lessonData.headingTwo}</h2>
        <p className="contents__paragraph">{lessonData.paragraphTwo}</p>
      </div>
    </div>
  )
}

export default LessonOverview
