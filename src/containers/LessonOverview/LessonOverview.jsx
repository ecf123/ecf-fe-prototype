import React from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import data from "../../assets/data/dummyVideoCardData.js"

import "./LessonOverview.scss";

// path: /lesson/:lessonId

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
          <VideoCard className="contents__video--temp" dummyVideoData={data} id={1} />
        </div>
        <h1 className="contents__title">The Role of etc.</h1>
        <h2 className="contents__header">Overview</h2>
        <p className="contents__paragraph">lorem</p>
        <h2 className="contents__header">Introduction</h2>
        <p className="contents__paragraph">lorem</p>
      </div>
    </div>
  )
}

export default LessonOverview
