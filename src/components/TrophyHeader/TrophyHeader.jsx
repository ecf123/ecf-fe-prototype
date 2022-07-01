import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import TrophyStats from '../TrophyStats/TrophyStats'

const TrophyHeader = ({ userProfile }) => {
    const { userIcon } = userProfile
    return (
        <div>
            <UserIcon userIcon = {userIcon} />

            <TrophyStats userProfile = {userProfile}/>
            
        </div>
    )
}

export default TrophyHeader