import React from "react";
import "./VideoCard.scss";
import ReactPlayer from "react-player";

// LINK TO DOCS FOR VIDEO PLAYER
// https://openbase.com/js/react-player/documentation

const VideoCard = ({videoData}) => {
  return (
    <div data-testid="video-card" className="video-card">
      {process.env.NODE_ENV !== "test" && <ReactPlayer url={videoData.url} width="100%" height="242px" />}
    </div>
  );
};

export default VideoCard;
