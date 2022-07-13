import React from "react";
import "./VideoCard.scss";
import ReactPlayer from "react-player";

const VideoCard = ({ dummyVideoData, id }) => {
  return (
    <div data-testid="video-card" className="video-card">
      {process.env.NODE_ENV !== "test" && (
        <ReactPlayer url={dummyVideoData[id].url} width="100%" height="242px" />
      )}
    </div>
  );
};

export default VideoCard;
