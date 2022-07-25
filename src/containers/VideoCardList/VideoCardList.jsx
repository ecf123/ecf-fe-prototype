import React from "react";
import "./VideoCardList.scss";
import VideoCard from "../../components/VideoCard/VideoCard";

const VideoCardList = ({videoData, id}) => {
  return (
    <>
      <div className="video-card-list">
        <VideoCard videoData={videoData} data-testid="video-card" />
        <img className="video-card-list__icon" src={videoData[id].icon} alt={`Icon for ${videoData[id].name}`} />
      </div>
    </>
  );
};

export default VideoCardList;
