import React from "react";
import TrophyIcon from "../../assets/images/trophy-icon.svg";
import XpIcon from "../../assets/images/xp-icon.svg";
import "./TrophyStats.scss";

const TrophyStats = ({ userProfile }) => {
  const { trophies, skillPoints } = userProfile;
  return (
    <div data-testid="trophy-stats" className="trophy-stats-container">
      <img
        className="trophy-stats-container__icon"
        src={TrophyIcon}
        alt="trophy icon"
      />
      <p
        data-testid="trophy-stats-p"
        className="trophy-stats-container__paragraph"
      >
        {trophies}
      </p>
      <img
        className="trophy-stats-container__icon"
        src={XpIcon}
        alt="xp icon"
      />
      <p
        data-testid="trophy-stats-s"
        className="trophy-stats-container__paragraph"
      >
        {skillPoints}
      </p>
    </div>
  );
};

export default TrophyStats;
