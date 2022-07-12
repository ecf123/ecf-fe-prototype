import React from "react";
import "./VideoCard.scss";
import ReactPlayer from "react-player";

const VideoCard = ({url}) => {
  return (
    <div className="video-card">
      <ReactPlayer url={url} width="100%" height="242px" />
    </div>
  );
};

export default VideoCard;
