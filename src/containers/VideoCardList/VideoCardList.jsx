import React from "react";
import "./VideoCardList.scss";
import VideoCard from "../../components/VideoCard/VideoCard";
import barclays from "../../assets/images/barclays.svg";

const VideoCardList = () => {
  return (
    <div>
      <VideoCard />
      <img src={barclays} alt={"barclays icon"} />
    </div>
  );
};

export default VideoCardList;
