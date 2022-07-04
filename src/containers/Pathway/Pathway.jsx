import React from 'react'
import TrophyHeader from '../../components/TrophyHeader/TrophyHeader'

const Pathway = ({ userProfile }) => {
  return (
    <div>
        <TrophyHeader userProfile = {userProfile}/>
    </div>
  )
}

export default Pathway