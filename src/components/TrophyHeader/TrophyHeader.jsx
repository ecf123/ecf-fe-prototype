import React from "react";
import UserIcon from "../UserIcon/UserIcon";
import TrophyStats from "../TrophyStats/TrophyStats";
import "./TrophyHeader.scss";

const TrophyHeader = ({ userProfile }) => {
  const { userIcon } = userProfile;
  return (
    <header className="trophy-header">
      <div className="trophy-header__backButton">
        <UserIcon userIcon={userIcon} />
      </div>
      <div className="trophy-header__trophy">
        <TrophyStats userProfile={userProfile} />
      </div>
    </header>
  );
};

export default TrophyHeader;
