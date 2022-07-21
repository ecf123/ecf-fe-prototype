import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import BackButton from "../../components/BackButton/BackButton";
import TrophyStats from "../../components/TrophyStats/TrophyStats";
import Navigation from "../../components/Navigation/Navigation";

import "./LessonOverview.scss";

// path: /lesson/:lessonId

const LessonOverview = ({ userProfile, lessonData }) => {
    const bulletPoints = lessonData.bullets
        .split("*")
        .map((sentence) => <li>{sentence}</li>);
    return (
        <div className="lesson">
            <header className="lesson__header" data-testId="topButtons">
                <div className="lesson__back-button">
                    <BackButton linkTo="/courses/0" isSecondary={false} />
                </div>
                <div className="lesson__trophy">
                    <TrophyStats userProfile={userProfile} />
                </div>
            </header>
            <div className="contents">
                <div className="contents__video">
                    <VideoCard
                        className="contents__video--temp"
                        videoData={lessonData.video}
                    />
                </div>
                <h1 className="contents__title" data-testId="title">
                    {lessonData.title}
                </h1>
                <h2 className="contents__header">Overview</h2>
                <p className="contents__paragraph">
                    <ul>{bulletPoints}</ul>
                </p>
                <h2 className="contents__header">{lessonData.headingOne}</h2>
                <p className="contents__paragraph">{lessonData.paragraphOne}</p>
                <h2 className="contents__header">{lessonData.headingTwo}</h2>
                <p className="contents__paragraph">{lessonData.paragraphTwo}</p>
            </div>
            <Navigation />
        </div>
    );
};

export default LessonOverview;
