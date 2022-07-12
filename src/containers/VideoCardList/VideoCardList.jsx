import React from "react";
import "./VideoCardList.scss";
import VideoCard from "../../components/VideoCard/VideoCard";

const VideoCardList = (dummyVideo) => {
  const {url, icon} = dummyVideo;

  return (
    <>
      <div className="video-card">
        <VideoCard url={url} />
        <img className="video-card__icon" src={icon} alt={"barclays icon"} />
      </div>
    </>
  );
};

export default VideoCardList;
