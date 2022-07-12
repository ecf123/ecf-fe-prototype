import React from "react";
import "./VideoCard.scss";
import ReactPlayer from "react-player";

const VideoCard = () => {
  return (
    <div className="video-card">
      <ReactPlayer url="http://www.youtube.com/watch?v=ysz5S6PUM-U" width="100%" />
    </div>
  );
};

export default VideoCard;
