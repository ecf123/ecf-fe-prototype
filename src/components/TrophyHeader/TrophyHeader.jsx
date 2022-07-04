import React from "react";
import UserIcon from "../UserIcon/UserIcon";
import TrophyStats from "../TrophyStats/TrophyStats";
import "./TrophyHeader.scss";

const TrophyHeader = ({ userProfile }) => {
  const { userIcon } = userProfile;
  return (
    <div className="trophy-header-container">
      <UserIcon userIcon={userIcon} />
      <TrophyStats userProfile={userProfile} />
    </div>
  );
};

export default TrophyHeader;
