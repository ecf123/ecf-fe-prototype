import React from 'react'
import TrophyIcon from "../../assets/images/trophy-icon.svg"
import XpIcon from "../../assets/images/xp-icon.svg"

const TrophyStats = ({ userProfile }) => {
    const { trophies, skillPoints } = userProfile;
    return (
        <div>
            <img src={TrophyIcon} alt="trophy icon" />
            <p>{trophies}</p>
            <img src={XpIcon} alt="xp icon" />
            <p>{skillPoints}</p>
        </div>
    )
}

export default TrophyStats