import React from "react";
import "./VideoCardList.scss";
import VideoCard from "../../components/VideoCard/VideoCard";

const VideoCardList = ({dummyVideoData, id}) => {
  return (
    <>
      <div className="video-card-list">
        <VideoCard dummyVideoData={dummyVideoData} id={id} data-testid="video-card" />
        <img className="video-card-list__icon" src={dummyVideoData[id].icon} alt={`Icon for ${dummyVideoData[id].name}`} />
      </div>
    </>
  );
};

export default VideoCardList;
