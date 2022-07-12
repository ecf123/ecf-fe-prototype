import React from "react";
import "./VideoCardList.scss";
import VideoCard from "../../components/VideoCard/VideoCard";

const VideoCardList = ({dummyVideoData}) => {
  return (
    <>
      {dummyVideoData.map(({url, icon, name}, index) => (
        <div className="video-card-list" key={index}>
          <VideoCard url={url} />
          <img className="video-card-list__icon" src={icon} alt={`Icon for ${name}`} />
        </div>
      ))}
    </>
  );
};

export default VideoCardList;
